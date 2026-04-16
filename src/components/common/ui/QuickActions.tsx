import React from "react";

export interface QuickAction {
  label: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

export interface QuickActionsProps {
  actions?: QuickAction[];
  title?: string;
}

const defaultActions: QuickAction[] = [
  {
    label: "Import from Figma",
    icon: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M12 8v8M8 12h8",
    color: "text-purple-600 bg-purple-50",
  },
  {
    label: "Create New Screen",
    icon: "M12 5v14M5 12h14",
    color: "text-primarysource bg-primary-50",
  },
  {
    label: "Export to Code",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "text-green-600 bg-green-50",
  },
];

export const QuickActions: React.FC<QuickActionsProps> = ({
  actions = defaultActions,
  title = "Quick Actions",
}) => {
  const renderIcon = (iconPath: string) => {
    if (iconPath.includes(" ")) {
      return iconPath.split(" ").map((d, i) => <path key={i} d={d} />);
    }
    return <path d={iconPath} />;
  };

  return (
    <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs p-4 flex flex-col gap-2">
      <h2 className="text-[16px] font-semibold mb-2 px-1">{title}</h2>
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border-100 hover:border-primary-200 hover:bg-neutral-50 transition-all text-left group"
        >
          <div
            className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center flex-shrink-0`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {renderIcon(action.icon)}
            </svg>
          </div>
          <span className="text-[13px] font-medium group-hover:text-primarysource">
            {action.label}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-auto text-neutral-400 group-hover:text-primarysource"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
