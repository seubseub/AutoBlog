import Link from 'next/link';

export default function RelatedPosts() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">관련 포스트</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <Link href="#" className="font-bold hover:text-blue-600">다른 흥미로운 글 제목 1</Link>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <Link href="#" className="font-bold hover:text-blue-600">다른 흥미로운 글 제목 2</Link>
        </div>
      </div>
    </div>
  );
}
