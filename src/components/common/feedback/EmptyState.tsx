import React from "react";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: "default" | "compact";
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = "default",
}) => {
  const defaultIcon = (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-neutral-300"
    >
      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
      <path d="M14 2v6h6" />
    </svg>
  );

  if (variant === "compact") {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        {icon || defaultIcon}
        <h3 className="mt-3 text-[14px] font-medium text-neutralsource">{title}</h3>
        {description && (
          <p className="mt-1 text-[12px] text-neutral-500 max-w-[280px]">{description}</p>
        )}
        {actionLabel && onAction && (
          <button
            onClick={onAction}
            className="mt-4 text-[13px] font-medium text-primarysource hover:underline"
          >
            {actionLabel}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-neutral-50 flex items-center justify-center mb-4">
        {icon || defaultIcon}
      </div>
      <h3 className="text-[16px] font-semibold text-neutralsource mb-2">{title}</h3>
      {description && (
        <p className="text-[14px] text-neutral-500 max-w-[400px] mb-6">{description}</p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-primarysource text-white text-[14px] font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
