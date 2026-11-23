import {attachNarrationFollow} from './follow.js?v=4';

const player = document.querySelector('.narration-player');
const audio = player.querySelector('audio');
const controls = player.querySelector('.narration-ui');
const play = player.querySelector('.narration-play');
const slider = player.querySelector('input[type="range"]');
const elapsed = player.querySelector('[data-elapsed]');
const duration = player.querySelector('[data-duration]');
const skips = Array.from(player.querySelectorAll('[data-skip]'));
const speed = player.querySelector('select');
const close = player.querySelector('[data-close]');
const status = player.querySelector('[role="status"]');

let scrubbing = false;
const syncFollow = attachNarrationFollow(player, audio, status, seek);

function dock(visible) {
  player.classList.toggle('is-docked', visible);
  document.body.classList.toggle('has-narration-dock', visible);
}

function formatTime(value) {
  const seconds = Math.max(0, Math.floor(value));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

function showPosition(time) {
  elapsed.textContent = formatTime(time);
  slider.style.setProperty('--played', `${100 * time / Number(slider.max)}%`);
  slider.setAttribute('aria-valuetext', `${formatTime(time)} of ${duration.textContent}`);
}

function updatePosition() {
  if (scrubbing) return;
  slider.value = Math.round(audio.currentTime);
  showPosition(audio.currentTime);
}

function updateDuration() {
  const seekable = Number.isFinite(audio.duration) && audio.duration > 0;
  slider.disabled = !seekable;
  for (const skip of skips) skip.disabled = !seekable;
  if (seekable) {
    slider.max = Math.ceil(audio.duration);
    duration.textContent = formatTime(Math.round(audio.duration));
  }
  updatePosition();
}

function seek(time) {
  if (Number.isFinite(audio.duration)) {
    audio.currentTime = Math.min(audio.duration, Math.max(0, time));
    updatePosition();
  }
}

function showPlayback() {
  const playing = !audio.paused && !audio.ended;
  play.classList.toggle('is-playing', playing);
  const label = !player.classList.contains('is-docked')
    ? 'Listen to this article' : playing ? 'Pause narration' : 'Play narration';
  play.setAttribute('aria-label', label);
  play.title = label;
}

function mediaError() {
  status.textContent = 'The narration couldn’t load. Try refreshing the page.';
  status.hidden = false;
  showPlayback();
}

function togglePlayback() {
  if (audio.paused || audio.ended) {
    audio.play().catch(error => {
      if (error.name !== 'AbortError') mediaError();
    });
  } else {
    audio.pause();
  }
}

play.addEventListener('click', togglePlayback);
audio.addEventListener('play', () => {
  dock(true);
  showPlayback();
  syncFollow?.();
});
for (const event of ['pause', 'ended']) {
  audio.addEventListener(event, () => {
    showPlayback();
    updatePosition();
    syncFollow?.();
  });
}
audio.addEventListener('timeupdate', updatePosition);
audio.addEventListener('loadedmetadata', updateDuration);
audio.addEventListener('durationchange', updateDuration);
audio.addEventListener('seeked', () => syncFollow?.(true));
audio.addEventListener('error', mediaError);
audio.addEventListener('ratechange', () => { speed.value = String(audio.playbackRate); });

for (const skip of skips) {
  skip.addEventListener('click', () => seek(audio.currentTime + Number(skip.dataset.skip)));
}
speed.addEventListener('change', () => { audio.playbackRate = Number(speed.value); });
slider.addEventListener('input', () => {
  scrubbing = true;
  showPosition(Number(slider.value));
});
function commitScrub() {
  if (!scrubbing) return;
  scrubbing = false;
  seek(Number(slider.value));
}

slider.addEventListener('change', commitScrub);
// WebKit can release a tap on the native slider without firing change.
slider.addEventListener('touchend', commitScrub);
slider.addEventListener('touchcancel', () => {
  scrubbing = false;
  updatePosition();
});
close.addEventListener('click', () => {
  audio.pause();
  dock(false);
  showPlayback();
  syncFollow?.();
  play.focus({preventScroll: true});
});

document.addEventListener('keydown', event => {
  if ((event.code !== 'Space' && event.key !== ' ') || event.defaultPrevented || event.repeat || event.isComposing ||
      event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
      !player.classList.contains('is-docked') ||
      event.target.closest?.('button, input, select, textarea, a, summary, [contenteditable], [role="button"]')) return;
  event.preventDefault();
  togglePlayback();
});

audio.controls = false;
audio.hidden = true;
controls.hidden = false;
showPlayback();
