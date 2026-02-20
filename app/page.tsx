import { Metadata } from 'next';
import { getSortedPostsData } from './lib/posts';
import PostList from './components/PostList';
import Sidebar from './components/Sidebar';
import AdContainer from './components/AdContainer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ToolVerdict - AI Tools Review & Comparison',
  description: 'The AI Tool Review Platform. Reviews & Comparisons of the latest AI Tools.',
};

export default function Home() {
  const allPosts = getSortedPostsData();
  const publishedPosts = allPosts.filter(p => p.published);
  const featuredPost = publishedPosts[0];
  const recentPosts = publishedPosts.slice(1);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-3/4">
        <section className="mb-8 text-center">
          <p className="text-xs text-gray-400 mb-1">Sponsor</p>
          <AdContainer slot="TOP_BANNER_SLOT" format="auto" className="bg-gray-100 rounded-lg min-h-[100px]" />
        </section>

        {featuredPost && (
          <section className="mb-12">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-gray-800 text-white mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-700 opacity-50">
                <span className="text-gray-400">Featured Review</span>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-2/3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-wider">Featured Review</span>
                <Link href={`/posts/${featuredPost.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 hover:underline">{featuredPost.title}</h2>
                </Link>
                <p className="text-gray-200 line-clamp-2">{featuredPost.description}</p>
              </div>
            </div>
          </section>
        )}

        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Reviews</h2>
            <Link href="/posts" className="text-primary font-semibold hover:underline text-sm">View All →</Link>
          </div>
          <PostList posts={recentPosts} />
        </section>
      </div>

      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>
    </div>
  );
}
