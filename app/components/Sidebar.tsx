import AdContainer from './AdContainer';
import CategoryFilter from './CategoryFilter';
import TagCloud from './TagCloud';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      <div className="card p-6">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">카테고리</h3>
        <CategoryFilter />
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-bold mb-4 border-b pb-2">태그</h3>
        <TagCloud />
      </div>

      <div className="sticky top-24">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
          <AdContainer slot="SIDEBAR_SLOT_ID" format="rectangle" style={{ minHeight: '250px' }} />
        </div>
      </div>
    </aside>
  );
}
