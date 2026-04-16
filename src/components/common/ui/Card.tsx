import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  hoverable = false,
  padding = "md",
}) => {
  // Base styles
  const baseStyles =
    "bg-white rounded-xl border border-border-100 overflow-hidden";

  // Hover styles
  const hoverStyles = hoverable
    ? "hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
    : "shadow-xs";

  // Padding styles
  const paddingStyles = {
    none: "",
    sm: "p-3",
    md: "p-5",
    lg: "p-6",
  };

  const combinedClasses = `${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`;

  return onClick ? (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  ) : (
    <div className={combinedClasses}>{children}</div>
  );
};

// Card Header sub-component
export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}> = ({ children, className = "", action }) => {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 border-b border-border-100 ${className}`}
    >
      <div className="flex items-center gap-3">{children}</div>
      {action && <div>{action}</div>}
    </div>
  );
};

// Card Title sub-component
export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-[16px] font-semibold ${className}`}>{children}</h2>
  );
};

// Card Content sub-component
export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={`p-5 ${className}`}>{children}</div>;
};

// Card Footer sub-component
export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 px-5 py-4 border-t border-border-100 bg-neutral-50 ${className}`}>
      {children}
    </div>
  );
};
