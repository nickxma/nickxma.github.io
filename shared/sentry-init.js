/**
 * Sentry browser error monitoring initialisation.
 *
 * DSN is intentionally hardcoded here as a PUBLIC client key
 * (rate-limited to this project; safe to commit).
 *
 * Set SENTRY_DSN_POA in your secrets manager and replace the
 * placeholder below when configuring the Sentry project.
 */
(function () {
  'use strict';
  var dsn = window.__SENTRY_DSN__ || '%%SENTRY_DSN_POA%%';
  if (!dsn || dsn.indexOf('%%') === 0) return; // not yet configured

  if (typeof Sentry === 'undefined') return; // CDN script not loaded

  Sentry.init({
    dsn: dsn,
    release: window.__SENTRY_RELEASE__ || undefined,
    environment: window.__SENTRY_ENV__ || 'production',
    tracesSampleRate: 0.05,
    integrations: [Sentry.browserTracingIntegration()],
    tracePropagationTargets: ['paradoxofacceptance.xyz'],
  });
})();
