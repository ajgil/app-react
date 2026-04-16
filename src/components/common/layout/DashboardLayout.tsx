import React from "react";

export interface DashboardLayoutProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
  sidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebar,
  header,
  children,
}) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-50 text-neutralsource">
      {sidebar && sidebar}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {header && header}
        
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

// Sidebar component for dashboard
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
}) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden animate-in fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[240px] bg-white border-r border-border-100 transform transition-transform duration-300 ease-in-out lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${className}`}
      >
        {children}
      </aside>
    </>
  );
};

// Header component for dashboard
export interface DashboardHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  onMenuClick,
  children,
  className = "",
}) => {
  return (
    <header
      className={`h-[64px] bg-white border-b border-border-100 flex items-center px-6 gap-4 flex-shrink-0 ${className}`}
    >
      {onMenuClick && (
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-50"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      )}
      
      {title && (
        <h1 className="text-[20px] font-semibold text-neutralsource leading-[24px]">
          {title}
        </h1>
      )}
      
      {children && <div className="flex-1">{children}</div>}
    </header>
  );
};

// Quick Action Button
export interface QuickActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  color?: string;
  className?: string;
}

export const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  label,
  icon,
  onClick,
  color = "text-primarysource bg-primary-50",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border-100 hover:border-primary-200 hover:bg-neutral-50 transition-all text-left group w-full ${className}`}
    >
      <div
        className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <span className="text-[13px] font-medium group-hover:text-primarysource">
        {label}
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
  );
};

// Activity Feed Item
export interface ActivityItemProps {
  avatar: React.ReactNode;
  user: string;
  action: string;
  target?: string;
  time: string;
  className?: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  avatar,
  user,
  action,
  target,
  time,
  className = "",
}) => {
  return (
    <div
      className={`px-5 py-3 hover:bg-neutral-50 transition-colors ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0 mt-0.5">
          {avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px]">
            <span className="font-medium">{user}</span>{" "}
            <span className="text-neutral-500">{action}</span>{" "}
            {target && <span className="text-primarysource font-medium">{target}</span>}
          </p>
          <p className="text-[11px] text-neutral-400 mt-0.5">{time}</p>
        </div>
      </div>
    </div>
  );
};

// Empty State component
export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 py-12 px-6 text-center ${className}`}
    >
      {icon && (
        <div className="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
          {icon}
        </div>
      )}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[16px] font-semibold text-textdark">{title}</h3>
        {description && (
          <p className="text-[14px] text-neutral-500 max-w-[300px]">
            {description}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
