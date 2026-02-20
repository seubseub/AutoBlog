import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">ToolVerdict</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            The AI Tool Review Platform. <br/>
            Discover, compare, and choose the best AI solutions for your business and creativity.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/posts" className="hover:text-white">All Reviews</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link></li>
            <li><Link href="/feed.xml" className="hover:text-white">RSS Feed</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ToolVerdict. All rights reserved.
      </div>
    </footer>
  );
}
