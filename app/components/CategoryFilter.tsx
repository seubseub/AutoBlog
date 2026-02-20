import Link from 'next/link';

const categories = [
  { name: 'Writing AI', count: 12 },
  { name: 'Image AI', count: 8 },
  { name: 'Coding AI', count: 5 },
  { name: 'Productivity AI', count: 7 },
  { name: 'AI Comparison', count: 4 },
];

export default function CategoryFilter() {
  return (
    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat.name}>
          <Link href={`/categories/${encodeURIComponent(cat.name)}`} className="flex justify-between items-center text-gray-600 hover:text-primary group">
            <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
            <span className="bg-gray-100 text-xs px-2 py-0.5 rounded-full text-gray-500">{cat.count}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
