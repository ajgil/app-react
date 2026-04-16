import React from "react";

export interface ComponentLibraryItem {
  name: string;
  count: number;
  category: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface ComponentLibraryProps {
  items: ComponentLibraryItem[];
  title?: string;
  onBrowseAll?: () => void;
}

export const ComponentLibrary: React.FC<ComponentLibraryProps> = ({
  items,
  title = "Component Library",
  onBrowseAll,
}) => {
  const defaultIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-100">
        <h2 className="text-[16px] font-semibold">{title}</h2>
        <button
          onClick={onBrowseAll}
          className="text-[14px] text-primarysource font-medium hover:underline"
        >
          Browse All
        </button>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {items.map((comp) => (
            <div
              key={comp.name}
              onClick={comp.onClick}
              className="border border-border-100 rounded-lg p-3 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-50 group-hover:bg-white flex items-center justify-center mb-2 text-neutral-500 group-hover:text-primarysource transition-colors">
                {comp.icon || defaultIcon}
              </div>
              <p className="text-[13px] font-medium mb-0.5">{comp.name}</p>
              <p className="text-[11px] text-neutral-400">
                {comp.count} variants · {comp.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
