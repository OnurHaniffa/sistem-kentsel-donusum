<script lang="ts">
	import '../app.css';
	import { Toaster } from '$lib/components/ui/sonner';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

	let { children } = $props();

	// JSON-LD Structured Data
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Sistem Kentsel Dönüşüm',
		url: 'https://www.sistemkentseldonusum.com',
		logo: 'https://www.sistemkentseldonusum.com/logo.png',
		description: 'Kentsel dönüşüm danışmanlık hizmetleri. Hukuki destek, mimari danışmanlık, gayrimenkul değerleme.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza',
			addressLocality: 'Darıca',
			addressRegion: 'Kocaeli',
			addressCountry: 'TR'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'Müşteri Hizmetleri',
			email: 'info@sistemkentseldonusum.com',
			areaServed: 'TR',
			availableLanguage: 'Turkish'
		}
	};

	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': 'https://www.sistemkentseldonusum.com/#localbusiness',
		name: 'Sistem Kentsel Dönüşüm',
		image: 'https://www.sistemkentseldonusum.com/og-image.jpg',
		description: 'Kentsel dönüşüm danışmanlık hizmetleri',
		url: 'https://www.sistemkentseldonusum.com',
		email: 'info@sistemkentseldonusum.com',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Kazım Karabekir Mah. İstasyon Cad. No:523/17 Tüm Ev Plaza',
			addressLocality: 'Darıca',
			addressRegion: 'Kocaeli',
			postalCode: '41700',
			addressCountry: 'TR'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 40.7693,
			longitude: 29.3772
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			}
		],
		priceRange: '$$',
		areaServed: [
			{ '@type': 'City', name: 'İstanbul' },
			{ '@type': 'City', name: 'Kocaeli' }
		],
		serviceType: ['Kentsel Dönüşüm Danışmanlığı', 'Hukuki Destek', 'Mimari Danışmanlık', 'Gayrimenkul Değerleme']
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://images.unsplash.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>`}
</svelte:head>

<div class="min-h-screen flex flex-col font-sans">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
	<WhatsAppButton />
	<Toaster richColors position="top-right" />
</div>
