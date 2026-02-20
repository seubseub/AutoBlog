import { Post } from '../lib/types';
import AdContainer from './AdContainer';

export default function PostDetail({ post }: { post: Post }) {
  const insertAdAfterFirstH2 = (htmlContent: string) => {
    const h2Marker = '</h2>';
    const splitIndex = htmlContent.indexOf(h2Marker);

    if (splitIndex !== -1) {
      const before = htmlContent.substring(0, splitIndex + h2Marker.length);
      const after = htmlContent.substring(splitIndex + h2Marker.length);
      return { hasSplit: true, before, after };
    }
    return { hasSplit: false, before: htmlContent, after: '' };
  };

  const { hasSplit, before, after } = insertAdAfterFirstH2(post.content);

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
      <header className="mb-10 text-center">
        {post.category && (
          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
          <span>{post.date.substring(0, 10)}</span>
          <span>•</span>
          <span>By Admin</span>
        </div>
      </header>

      {post.image && (
        <div className="mb-10 relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Image: {post.image}
          </div>
        </div>
      )}

      <div className="prose prose-lg prose-blue mx-auto">
        {hasSplit ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: before }} />
            <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
              <p className="text-xs text-gray-400 mb-2">Sponsored</p>
              <AdContainer slot="CONTENT_SLOT_ID" format="auto" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: after }} />
          </>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-sm font-bold text-gray-700 mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
