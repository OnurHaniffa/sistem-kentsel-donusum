import { browser } from '$app/environment';

export type AnimationType =
	| 'fade-up'
	| 'fade-down'
	| 'fade-left'
	| 'fade-right'
	| 'fade'
	| 'scale'
	| 'scale-up'
	| 'blur';

export interface AnimateOptions {
	type?: AnimationType;
	delay?: number;
	duration?: number;
	threshold?: number;
	once?: boolean;
}

const defaultOptions: AnimateOptions = {
	type: 'fade-up',
	delay: 0,
	duration: 600,
	threshold: 0.1,
	once: true
};

export function animate(node: HTMLElement, options: AnimateOptions = {}) {
	if (!browser) return;

	const opts = { ...defaultOptions, ...options };

	// Set initial styles
	node.style.opacity = '0';
	node.style.transition = `opacity ${opts.duration}ms ease-out, transform ${opts.duration}ms ease-out, filter ${opts.duration}ms ease-out`;
	node.style.transitionDelay = `${opts.delay}ms`;

	// Set initial transform based on animation type
	switch (opts.type) {
		case 'fade-up':
			node.style.transform = 'translateY(30px)';
			break;
		case 'fade-down':
			node.style.transform = 'translateY(-30px)';
			break;
		case 'fade-left':
			node.style.transform = 'translateX(30px)';
			break;
		case 'fade-right':
			node.style.transform = 'translateX(-30px)';
			break;
		case 'scale':
			node.style.transform = 'scale(0.95)';
			break;
		case 'scale-up':
			node.style.transform = 'scale(0.9) translateY(20px)';
			break;
		case 'blur':
			node.style.filter = 'blur(10px)';
			break;
		case 'fade':
		default:
			break;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) translateX(0) scale(1)';
					node.style.filter = 'blur(0)';

					if (opts.once) {
						observer.unobserve(node);
					}
				} else if (!opts.once) {
					// Reset animation when element leaves viewport
					node.style.opacity = '0';
					switch (opts.type) {
						case 'fade-up':
							node.style.transform = 'translateY(30px)';
							break;
						case 'fade-down':
							node.style.transform = 'translateY(-30px)';
							break;
						case 'fade-left':
							node.style.transform = 'translateX(30px)';
							break;
						case 'fade-right':
							node.style.transform = 'translateX(-30px)';
							break;
						case 'scale':
							node.style.transform = 'scale(0.95)';
							break;
						case 'scale-up':
							node.style.transform = 'scale(0.9) translateY(20px)';
							break;
						case 'blur':
							node.style.filter = 'blur(10px)';
							break;
					}
				}
			});
		},
		{ threshold: opts.threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
		update(newOptions: AnimateOptions) {
			Object.assign(opts, newOptions);
		}
	};
}

// Stagger animation helper for lists
export function stagger(index: number, baseDelay: number = 100): number {
	return index * baseDelay;
}
