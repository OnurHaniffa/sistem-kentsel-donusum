<script lang="ts">
	interface Props {
		title: string;
		description: string;
		canonical?: string;
		ogImage?: string;
		ogType?: 'website' | 'article';
		noindex?: boolean;
	}

	let {
		title,
		description,
		canonical = '',
		ogImage = 'https://www.sistemkentseldonusum.com/og-image.jpg',
		ogType = 'website',
		noindex = false
	}: Props = $props();

	const siteUrl = 'https://www.sistemkentseldonusum.com';
	const siteName = 'Sistem Kentsel Dönüşüm';
	const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
	<link rel="canonical" href={fullCanonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={fullCanonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="tr_TR" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={fullCanonical} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
