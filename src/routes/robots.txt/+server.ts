export const prerender = true;

export async function GET() {
	const siteUrl = 'https://www.sistemkentseldonusum.com';

	const robots = `# Sistem Kentsel Dönüşüm - Robots.txt
User-agent: *
Allow: /
Disallow: /api/

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# Crawl delay (optional, respected by some bots)
Crawl-delay: 1

# Google
User-agent: Googlebot
Allow: /

# Bing
User-agent: Bingbot
Allow: /

# Yandex (popular in Turkey)
User-agent: Yandex
Allow: /
`;

	return new Response(robots.trim(), {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
}
