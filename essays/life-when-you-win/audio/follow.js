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

const player = document.querySelector('.narration-player');
if (player && globalThis.CSS?.highlights && globalThis.Highlight) {
  const audio = player.querySelector('audio');
  const follow = player.querySelector('input');
  const status = player.querySelector('[role="status"]');
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

  function update() {
    const cue = data && follow.checked && !audio.ended && cueAt(audio.currentTime * 1000);
    if (cue === active) return;
    active = cue;
    highlight.clear();
    if (!cue) return;

    const {node, offset, text} = words[cue[2]];
    const range = new Range();
    range.setStart(node, offset);
    range.setEnd(node, offset + text.length);
    highlight.add(range);

    const bounds = range.getBoundingClientRect();
    const top = player.getBoundingClientRect().bottom + 20;
    if (!audio.paused && (bounds.top < top || bounds.bottom > innerHeight - 32)) {
      window.scrollBy({top: bounds.top - Math.max(top + 8, innerHeight * 0.38), behavior: 'instant'});
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

  function sync() {
    cancelAnimationFrame(frame);
    player.classList.toggle('is-listening', !audio.ended && (!audio.paused || audio.currentTime > 0));
    if (follow.checked && !audio.paused) {
      loading ??= loadTimings();
      tick();
    } else {
      update();
    }
  }

  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);
  audio.addEventListener('seeked', sync);
  follow.addEventListener('change', sync);
}

const narrationAudio = player?.querySelector('audio');
narrationAudio?.addEventListener('error', () => {
  const status = player.querySelector('[role="status"]');
  status.textContent = 'The narration couldn’t load. Try refreshing the page.';
  status.hidden = false;
});
