import type { APIRoute } from 'astro';
import { SITE } from 'astrowind:config';
import { articles } from '~/data/articles';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
  const site = (SITE?.site || 'https://www.monkeyjobs.co').replace(/\/$/, '');
  const sorted = [...articles].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  const items = sorted
    .map((a) => {
      const url = `${site}/blog/${a.slug}`;
      const pubDate = new Date(`${a.datePublished}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escape(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(a.description)}</description>
      <pubDate>${pubDate}</pubDate>
${a.tags.map((t) => `      <category>${escape(t)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MonkeyJobs — Blog</title>
    <link>${site}/blog</link>
    <description>Insights de desarrollo de software, apps móviles e inteligencia artificial de MonkeyJobs.</description>
    <language>es-CO</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
