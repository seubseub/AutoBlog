import { MetadataRoute } from 'next';
import { getSortedPostsData } from './lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  const baseUrl = 'https://your-domain.com';

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...postUrls,
  ];
}
