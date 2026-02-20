import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button className="btn-primary">새 글 작성</button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목 / Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allPosts.map((post) => (
              <tr key={post.slug}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{post.title}</div>
                  <div className="text-xs text-gray-500">/{post.slug}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {post.published ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Published
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.date.substring(0, 10)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:text-blue-900 mr-4">보기</Link>
                  <button className="text-indigo-600 hover:text-indigo-900">수정</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center">
        * 실제 발행 승인 기능은 파일 시스템 쓰기 권한이 필요하므로, 로컬 환경에서 fs.writeFile 등을 이용한 API Route 구현이 필요합니다.
      </p>
    </div>
  );
}
