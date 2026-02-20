import { getPostData, getAllPostIds } from '../../lib/posts';
import PostDetail from '../../components/PostDetail';
import RelatedPosts from '../../components/RelatedPosts';
import Sidebar from '../../components/Sidebar';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} | AutoBlog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [post.image] : [],
    }
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => path.params);
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image ? [post.image] : [],
    datePublished: post.date,
    author: [{
      '@type': 'Person',
      name: 'Admin',
    }],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <PostDetail post={post} />
          <RelatedPosts />
        </div>
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
