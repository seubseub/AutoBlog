import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <span className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            ToolVerdict
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          <Link href="/categories/Writing%20AI" className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">✍️ Writing AI</Link>
          <Link href="/categories/Image%20AI" className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all">🎨 Image AI</Link>
          <Link href="/categories/Coding%20AI" className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">💻 Coding AI</Link>
          <Link href="/categories/Productivity" className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all">⚡ Productivity</Link>
          <Link href="/posts" className="ml-2 px-4 py-1.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all">
            All Reviews
          </Link>
        </nav>
      </div>
    </header>
  );
}
