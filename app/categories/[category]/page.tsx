import { getPostsByCategory } from '../../lib/posts';
import PostList from '../../components/PostList';
import Sidebar from '../../components/Sidebar';

export function generateStaticParams() {
  return [{ category: 'AI' }, { category: 'Dev' }, { category: 'Marketing' }];
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = getPostsByCategory(category).filter(p => p.published);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl font-bold mb-2">카테고리: {category}</h1>
        <p className="text-gray-500 mb-8">총 {posts.length}개의 글이 있습니다.</p>
        <PostList posts={posts} />
      </div>
      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>
    </div>
  );
}
