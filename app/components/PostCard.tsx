import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '../lib/types';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="card flex flex-col h-full group">
      {post.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
            {post.image}
          </div>
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          {post.category && (
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {post.category}
            </span>
          )}
          <span className="text-xs text-gray-500">{post.date.substring(0, 10)}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {post.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
