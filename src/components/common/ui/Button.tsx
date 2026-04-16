import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-primarysource text-white hover:bg-primary-600 focus:ring-primary-200 shadow-sm",
    secondary: "bg-neutral-100 text-neutralsource hover:bg-neutral-200 focus:ring-neutral-200",
    outline: "border border-border-100 bg-transparent text-neutralsource hover:bg-neutral-50 focus:ring-neutral-200",
    ghost: "bg-transparent text-neutralsource hover:bg-neutral-50 focus:ring-neutral-200",
    danger: "bg-texterror text-white hover:bg-red-700 focus:ring-red-200 shadow-sm",
  };
  
  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-[13px]",
    md: "px-4 py-2.5 text-[14px]",
    lg: "px-6 py-3.5 text-[16px]",
  };
  
  // Full width
  const widthStyles = fullWidth ? "w-full" : "";
  
  // Combined classes
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {!isLoading && leftIcon && (
        <span className="flex-shrink-0">{leftIcon}</span>
      )}
      
      <span>{children}</span>
      
      {!isLoading && rightIcon && (
        <span className="flex-shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};
