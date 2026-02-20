import { PostMeta } from '../lib/types';
import PostCard from './PostCard';
import AdContainer from './AdContainer';

export default function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <>
          <PostCard key={post.slug} post={post} />
          {index === 2 && (
            <div className="md:col-span-2 lg:col-span-3">
              <AdContainer slot="1234567890" format="auto" className="bg-gray-50 p-4 rounded-lg" />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
