import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: process.env.SENTRY_DSN,

	// Performance Monitoring
	tracesSampleRate: 1.0
});

export const handleError = Sentry.handleErrorWithSentry();
