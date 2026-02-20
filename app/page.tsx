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
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white mb-12 -mx-4 px-4 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-16 text-8xl">🤖</div>
          <div className="absolute top-16 right-24 text-6xl">✍️</div>
          <div className="absolute bottom-8 left-1/3 text-7xl">💻</div>
          <div className="absolute bottom-16 right-12 text-5xl">🎨</div>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Updated Daily with AI
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            The Best AI Tool<br />
            <span className="text-yellow-300">Reviews & Comparisons</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Honest, in-depth reviews of the latest AI tools. Find the right tool for your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Writing AI', 'Image AI', 'Coding AI', 'Productivity'].map((cat) => (
              <Link
                key={cat}
                href={`/categories/${encodeURIComponent(cat)}`}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold transition-all hover:scale-105"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          {/* Ad Banner */}
          <section className="mb-8 text-center">
            <p className="text-xs text-gray-400 mb-1">Sponsor</p>
            <AdContainer slot="TOP_BANNER_SLOT" format="auto" className="bg-gray-100 rounded-lg min-h-[100px]" />
          </section>

          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">⭐ Featured Review</span>
              </div>
              <Link href={`/posts/${featuredPost.slug}`}>
                <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 p-1 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300">
                  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-[calc(1.5rem-4px)] p-8 md:p-12 text-white">
                    <div className="flex items-start gap-6">
                      <div className="text-7xl hidden md:block">⚖️</div>
                      <div className="flex-1">
                        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                          {featuredPost.category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-yellow-300 transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-white/70 text-base md:text-lg line-clamp-2 mb-6">
                          {featuredPost.description}
                        </p>
                        <span className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold text-sm px-5 py-2.5 rounded-full group-hover:bg-yellow-300 group-hover:text-gray-900 transition-all">
                          Read Full Review
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* Latest Reviews */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-gray-900">Latest Reviews</h2>
              <Link href="/posts" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <PostList posts={recentPosts} />
          </section>
        </div>

        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
