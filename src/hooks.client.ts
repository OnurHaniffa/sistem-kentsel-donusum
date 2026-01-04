import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: import.meta.env.VITE_SENTRY_DSN,

	// Performance Monitoring
	tracesSampleRate: 1.0,

	// Session Replay
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,

	integrations: [Sentry.replayIntegration()]
});

export const handleError = Sentry.handleErrorWithSentry();
