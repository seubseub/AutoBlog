import { getSortedPostsData } from '../lib/posts';

export async function GET() {
  const posts = getSortedPostsData();
  const siteUrl = 'https://your-domain.com';

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>AutoBlog MVP</title>
        <link>${siteUrl}</link>
        <description>Next.js Automated Blog</description>
        <language>ko</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${posts.map(post => `
            <item>
                <title><![CDATA[${post.title}]]></title>
                <link>${siteUrl}/posts/${post.slug}</link>
                <guid>${siteUrl}/posts/${post.slug}</guid>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                <description><![CDATA[${post.description}]]></description>
                <category>${post.category}</category>
            </item>
        `).join('')}
    </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
