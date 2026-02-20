import Link from 'next/link';

const tags = ['ChatGPT', 'Claude', 'Midjourney', 'GitHub-Copilot', 'Jasper', 'Runway', 'ComfyUI', 'Sora', 'Gemini'];

export default function TagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`} className="text-xs bg-gray-50 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors border border-gray-100">
          #{tag}
        </Link>
      ))}
    </div>
  );
}
