export const prerender = true;

const pages = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/hizmetler', changefreq: 'monthly', priority: '0.9' },
	{ path: '/kurumsal', changefreq: 'monthly', priority: '0.8' },
	{ path: '/ekibimiz', changefreq: 'monthly', priority: '0.8' },
	{ path: '/iletisim', changefreq: 'weekly', priority: '0.9' },
	{ path: '/destekler', changefreq: 'monthly', priority: '0.7' },
	{ path: '/sss', changefreq: 'monthly', priority: '0.7' },
	{ path: '/gizlilik', changefreq: 'yearly', priority: '0.3' },
	{ path: '/kvkk', changefreq: 'yearly', priority: '0.3' },
	{ path: '/kullanim-kosullari', changefreq: 'yearly', priority: '0.3' }
];

export async function GET() {
	const siteUrl = 'https://sistemkentseldonusum.com';
	const lastmod = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}
