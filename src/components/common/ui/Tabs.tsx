import React from "react";

export type TabOption = {
  id: string;
  label: string;
};

export interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  variant?: "default" | "bordered" | "pills";
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = "default",
}) => {
  const getTabStyles = (isActive: boolean, isLast: boolean) => {
    const baseStyles = "px-3 py-2 text-[13px] font-medium transition-colors";
    
    if (variant === "bordered") {
      return `${baseStyles} border-b-2 -mb-px ${
        isActive
          ? "text-primarysource border-primarysource"
          : "text-neutral-500 border-transparent hover:text-neutralsource"
      }`;
    }
    
    if (variant === "pills") {
      return `${baseStyles} rounded-lg ${
        isActive
          ? "bg-primary-50 text-primarysource"
          : "text-neutral-500 hover:bg-neutral-50"
      }`;
    }
    
    // default - segmented control style
    return `${baseStyles} border-r border-[#e9eaeb] ${
      isActive
        ? "bg-[#f3f3f3] font-bold text-[#212121]"
        : "bg-white font-medium text-[#727272] hover:bg-gray-50"
    } ${isLast ? "border-r-0" : ""}`;
  };

  return (
    <div className="flex items-center justify-center py-4 px-4 bg-white">
      <div
        className={`shadow-sm rounded-lg border border-[#e9eaeb] overflow-hidden flex ${
          variant === "bordered" ? "border-b" : ""
        }`}
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isLast = index === tabs.length - 1;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`cursor-pointer py-2.5 px-6 text-sm transition-all border-none ${getTabStyles(
                isActive,
                isLast
              )}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
