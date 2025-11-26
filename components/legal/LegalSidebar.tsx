"use client";

interface LegalSidebarProps {
  items: string[];
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const LegalSidebar = ({ items, activeItem, setActiveItem }: LegalSidebarProps) => {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-32 space-y-1">
        <h3 className="text-zinc-500 font-medium text-xs uppercase tracking-wider mb-4 px-3">
          Legal Documents
        </h3>
        {items.map((item) => {
          const isActive = item === activeItem;
          return (
            <button
              key={item}
              className={`w-full cursor-pointer text-left px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "text-yellow-300 bg-yellow-300/10 rounded-lg border border-yellow-300/20"
                  : "text-zinc-400 hover:text-white"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
