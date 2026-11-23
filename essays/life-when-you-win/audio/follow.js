const wordPattern = /[\p{L}\p{N}\p{M}]+(?:['’][\p{L}\p{N}\p{M}]+)*/gu;

export function narrationWords(roots) {
  const words = [];
  for (const root of roots) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: node => node.parentElement.closest('figure, .fn-ref, .fn-back')
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      for (const match of node.data.matchAll(wordPattern)) {
        words.push({text: match[0], node, offset: match.index});
      }
    }
  }
  return words;
}

export function narrationSignature(words) {
  let hash = 2166136261;
  for (const character of words.map(word => word.text).join(' ')) {
    hash = Math.imul(hash ^ character.codePointAt(0), 16777619);
  }
  return (hash >>> 0).toString(16);
}

function wordRange({node, offset, text}) {
  const range = new Range();
  range.setStart(node, offset);
  range.setEnd(node, offset + text.length);
  return range;
}

export function attachNarrationFollow(player, audio, status, seek) {
  const article = document.querySelector('article');
  const follow = player.querySelector('input[type="checkbox"]');
  const hint = player.querySelector('.narration-hint');
  const startsByNode = new WeakMap();
  const highlight = globalThis.CSS?.highlights && globalThis.Highlight ? new Highlight() : null;
  const canPickWord = document.caretPositionFromPoint || document.caretRangeFromPoint;

  if (highlight) {
    CSS.highlights.set('narration-word', highlight);
    follow.closest('label').hidden = false;
  }

  let data, words, active, frame, loading;

  function cueAt(time) {
    let lo = 0;
    let hi = data.cues.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (data.cues[mid][0] <= time) lo = mid + 1;
      else hi = mid;
    }
    const cue = data.cues[lo - 1];
    return cue && time < cue[1] ? cue : undefined;
  }

  function update(reveal = false) {
    if (!highlight) return;
    const cue = data && follow.checked && !audio.ended &&
      player.classList.contains('is-docked') && cueAt(audio.currentTime * 1000);
    if (cue === active && !reveal) return;
    active = cue;
    highlight.clear();
    if (!cue) return;

    const range = wordRange(words[cue[2]]);
    highlight.add(range);
    const bounds = range.getBoundingClientRect();
    const bottom = Math.min(player.getBoundingClientRect().top, innerHeight) - 18;
    if ((!audio.paused || reveal) && (bounds.top < 24 || bounds.bottom > bottom)) {
      window.scrollBy({top: bounds.top - Math.max(28, bottom * 0.38), behavior: 'instant'});
    }
  }

  function tick() {
    update();
    if (!audio.paused && follow.checked) frame = requestAnimationFrame(tick);
  }

  async function loadTimings() {
    try {
      const response = await fetch(new URL('./timings-v0.31.json', import.meta.url));
      if (!response.ok) throw new Error('Could not load timings');
      const timings = await response.json();
      words = narrationWords([document.querySelector('h1'), article]);
      if (timings.signature !== narrationSignature(words)) throw new Error('Essay text has changed');

      if (canPickWord) {
        for (const [start, , index] of timings.cues) {
          const word = words[index];
          if (!startsByNode.has(word.node)) startsByNode.set(word.node, []);
          startsByNode.get(word.node).push({word, time: start / 1000});
        }
        hint.hidden = false;
      }
      data = timings;
      update();
    } catch {
      follow.checked = false;
      follow.disabled = true;
      status.textContent = 'Word timing is unavailable. You can still listen.';
      status.hidden = false;
    }
  }

  function jumpToWord(event) {
    if (!data || !player.classList.contains('is-docked') || event.defaultPrevented ||
        event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey ||
        event.target.closest('a, button, input, select, textarea, [contenteditable]') ||
        window.getSelection()?.isCollapsed === false) return;

    const x = event.clientX;
    const y = event.clientY;
    const caret = document.caretPositionFromPoint?.(x, y);
    const range = !caret && document.caretRangeFromPoint?.(x, y);
    const node = caret?.offsetNode ?? range?.startContainer;
    const offset = caret?.offset ?? range?.startOffset;
    const cue = startsByNode.get(node)?.find(({word}) =>
      offset >= word.offset && offset <= word.offset + word.text.length &&
      Array.from(wordRange(word).getClientRects()).some(rect =>
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom),
    );
    if (cue) seek(cue.time);
  }

  function sync(reveal = false) {
    cancelAnimationFrame(frame);
    update(reveal);
    if (!audio.paused && (highlight || canPickWord)) loading ??= loadTimings();
    if (highlight && follow.checked && !audio.paused) frame = requestAnimationFrame(tick);
  }

  if (canPickWord) article.addEventListener('click', jumpToWord);
  follow.addEventListener('change', () => sync(follow.checked));
  return sync;
}
