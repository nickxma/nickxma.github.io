/*
 * Newsletter signup for every form on the site.
 *
 * The old forms posted to /api/subscribe, which does not exist on GitHub
 * Pages, so signups were lost. To turn signups on, set BUTTONDOWN_USER to
 * the Buttondown username (buttondown.com/<username>). While it is empty,
 * the signup blocks are hidden so nobody types an email that goes nowhere.
 */
(function () {
  'use strict';
  var BUTTONDOWN_USER = '';

  function forms() {
    return Array.prototype.filter.call(document.querySelectorAll('form'), function (f) {
      return /subscribe/i.test(f.getAttribute('onsubmit') || '');
    });
  }

  function block(form) {
    return form.closest('.subscribe-widget, .subscribe-section, section') || form;
  }

  function init() {
    forms().forEach(function (form) {
      if (!BUTTONDOWN_USER) {
        var b = block(form);
        b.hidden = true;
        var prev = b.previousElementSibling;
        if (prev && prev.tagName === 'HR') prev.hidden = true;
        return;
      }
      form.onsubmit = null;
      form.addEventListener('submit', onSubmit);
    });
  }

  function onSubmit(e) {
    var form = e.currentTarget;
    e.preventDefault();
    var input = form.querySelector('input[type="email"]');
    var btn = form.querySelector('button[type="submit"], button');
    var msg = block(form).querySelector('[id$="-msg"]');
    var email = input ? input.value.trim() : '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (msg) msg.textContent = 'Please enter a valid email.';
      return;
    }
    if (btn) { btn.disabled = true; btn.textContent = '...'; }
    var body = new URLSearchParams();
    body.set('email', email);
    body.set('embed', '1');
    fetch('https://buttondown.com/api/emails/embed-subscribe/' + encodeURIComponent(BUTTONDOWN_USER), {
      method: 'POST',
      mode: 'no-cors',
      body: body
    }).then(function () {
      if (msg) msg.textContent = 'Thanks. Check your inbox to confirm.';
      if (input) input.value = '';
    }).catch(function () {
      if (msg) msg.textContent = 'Something went wrong. Please try again.';
    }).then(function () {
      if (btn) { btn.disabled = false; btn.textContent = 'Subscribe'; }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
