export function GET() {
  const baseUrl = 'https://tres-palmeiras.vercel.app'
  
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

User-agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}