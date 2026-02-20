import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
          ToolVerdict
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/categories/Writing%20AI" className="text-gray-600 font-medium hover:text-primary transition">Writing AI</Link>
          <Link href="/categories/Image%20AI" className="text-gray-600 font-medium hover:text-primary transition">Image AI</Link>
          <Link href="/categories/Coding%20AI" className="text-gray-600 font-medium hover:text-primary transition">Coding AI</Link>
          <Link href="/categories/Productivity" className="text-gray-600 font-medium hover:text-primary transition">Productivity</Link>
          <Link href="/admin" className="text-gray-400 hover:text-red-500 transition text-sm">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
