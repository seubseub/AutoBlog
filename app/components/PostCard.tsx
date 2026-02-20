import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '../lib/types';

function getCategoryStyle(category: string | undefined) {
  switch (category) {
    case 'Writing AI':
      return {
        thumbnail: 'bg-gradient-to-br from-blue-500 to-purple-600',
        emoji: '✍️',
        badge: 'bg-blue-50 text-blue-700 border border-blue-100',
      };
    case 'Image AI':
      return {
        thumbnail: 'bg-gradient-to-br from-pink-500 to-orange-500',
        emoji: '🎨',
        badge: 'bg-pink-50 text-pink-700 border border-pink-100',
      };
    case 'Coding AI':
      return {
        thumbnail: 'bg-gradient-to-br from-green-500 to-teal-600',
        emoji: '💻',
        badge: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
      };
    case 'Productivity':
      return {
        thumbnail: 'bg-gradient-to-br from-yellow-500 to-orange-500',
        emoji: '⚡',
        badge: 'bg-amber-50 text-amber-700 border border-amber-100',
      };
    case 'AI Comparison':
      return {
        thumbnail: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        emoji: '⚖️',
        badge: 'bg-purple-50 text-purple-700 border border-purple-100',
      };
    default:
      return {
        thumbnail: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        emoji: '🤖',
        badge: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
      };
  }
}

export default function PostCard({ post }: { post: PostMeta }) {
  const style = getCategoryStyle(post.category);
  const hasValidImage = post.image && (post.image.startsWith('/') || post.image.startsWith('http'));

  return (
    <article className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* 이미지 영역 */}
      <Link href={`/posts/${post.slug}`} className="relative h-52 w-full overflow-hidden block">
        {hasValidImage ? (
          <Image
            src={post.image!}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110 ${style.thumbnail}`}>
            <span className="drop-shadow-lg">{style.emoji}</span>
          </div>
        )}
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        {/* 메타 정보 */}
        <div className="flex items-center justify-between mb-4">
          {post.category && (
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${style.badge}`}>
              {post.category}
            </span>
          )}
          <time className="text-xs text-gray-400 font-medium">
            {post.date.substring(0, 10)}
          </time>
        </div>

        {/* 제목 */}
        <Link href={`/posts/${post.slug}`} className="block mb-3">
          <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h2>
        </Link>

        {/* 본문 요약 */}
        <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
          {post.description}
        </p>

        {/* 하단 영역: 태그 및 Read More */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-50">
          <div className="flex flex-wrap gap-1.5">
            {post.tags?.slice(0, 2).map(tag => (
              <span key={tag} className="text-[11px] text-gray-400 font-medium">
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/posts/${post.slug}`}
            className="text-sm font-bold text-gray-900 flex items-center gap-1 group/btn transition-colors hover:text-indigo-600"
          >
            <span>Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
