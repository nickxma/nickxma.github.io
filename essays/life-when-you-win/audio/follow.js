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

export function attachNarrationFollow(player, audio, status) {
  if (!globalThis.CSS?.highlights || !globalThis.Highlight) return;
  const follow = player.querySelector('input[type="checkbox"]');
  follow.closest('label').hidden = false;
  let data, words, active, frame, loading;
  const highlight = new Highlight();
  CSS.highlights.set('narration-word', highlight);

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
    const cue = data && follow.checked && !audio.ended &&
      player.classList.contains('is-docked') && cueAt(audio.currentTime * 1000);
    if (cue === active && !reveal) return;
    active = cue;
    highlight.clear();
    if (!cue) return;

    const {node, offset, text} = words[cue[2]];
    const range = new Range();
    range.setStart(node, offset);
    range.setEnd(node, offset + text.length);
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
      const response = await fetch(new URL('./timings-v0.30.json', import.meta.url));
      if (!response.ok) throw new Error('Could not load timings');
      const timings = await response.json();
      words = narrationWords([document.querySelector('h1'), document.querySelector('article')]);
      if (timings.signature !== narrationSignature(words)) throw new Error('Essay text has changed');
      data = timings;
      update();
    } catch {
      follow.checked = false;
      follow.disabled = true;
      status.textContent = 'Word highlighting is unavailable. You can still listen.';
      status.hidden = false;
    }
  }

  function sync(reveal = false) {
    cancelAnimationFrame(frame);
    update(reveal);
    if (follow.checked && !audio.paused) {
      loading ??= loadTimings();
      frame = requestAnimationFrame(tick);
    }
  }

  follow.addEventListener('change', () => sync(follow.checked));
  return sync;
}
