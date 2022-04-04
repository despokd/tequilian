let website = 'https://tequilian.de';

export async function get() {
    let snippets = [];
    snippets = await fetch(website + '/api/snippets.json').then(res => res.json());
    const pages = [`snippets`, `links`, `imprint`]

    const body = sitemap(snippets, pages)

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }
    return {
        headers,
        body,
    }
}

const sitemap = (
    snippets,
    pages
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages
        .map(
            page => `
  <url>
    <loc>${website}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
        )
        .join('')}
  ${snippets
        .map(snippet => `
  <url>
    <loc>${website + snippet.path}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
        )
        .join('')}
</urlset>`