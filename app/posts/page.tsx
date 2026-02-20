import { getSortedPostsData } from '../lib/posts';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: '블로그 글 목록 | AutoBlog',
  description: '최신 기술 트렌드와 개발 팁을 확인하세요.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData().filter(p => p.published);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl font-bold mb-8">모든 포스트</h1>
        <PostList posts={allPosts} />
      </div>
      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>
    </div>
  );
}
