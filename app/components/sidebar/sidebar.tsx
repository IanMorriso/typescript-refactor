interface Category {
  category: string;
  items: string[];
}

interface SidebarProps {
  title: string;
  categories: Category[];
  position?: 'left' | 'right';
}

export function Sidebar({ title, categories, position = 'left' }: SidebarProps) {
  const positionClasses = position === 'left' 
    ? 'left-0 border-r' 
    : 'right-0 border-l';

  return (
    <aside className={`fixed top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 ${positionClasses} border-gray-200 dark:border-gray-800 p-6 overflow-y-auto`}>
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.category}>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
              {category.category}
            </h3>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item} className="text-gray-700 dark:text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
} 