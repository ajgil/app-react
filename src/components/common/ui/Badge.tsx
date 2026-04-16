import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "neutral";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full whitespace-nowrap";

  // Variant styles
  const variantStyles = {
    default: "bg-neutral-100 text-neutral-700",
    primary: "bg-primary-50 text-primarysource",
    success: "bg-green-50 text-green-700",
    warning: "bg-yellow-50 text-yellow-700",
    danger: "bg-red-50 text-texterror",
    neutral: "bg-neutral-50 text-neutral-600",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-[12px]",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return <span className={combinedClasses}>{children}</span>;
};

// Status Badge with predefined statuses
export interface StatusBadgeProps {
  status: "In Progress" | "Review" | "Completed" | "Pending" | string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = "" }) => {
  const getStatusVariant = (): BadgeProps["variant"] => {
    switch (status) {
      case "In Progress":
        return "primary";
      case "Review":
        return "warning";
      case "Completed":
        return "success";
      case "Pending":
        return "neutral";
      default:
        return "default";
    }
  };

  return (
    <Badge variant={getStatusVariant()} size="sm" className={className}>
      {status}
    </Badge>
  );
};
