import React, { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      fullWidth = true,
      className = "",
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    // Base styles
    const baseStyles =
      "flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all duration-200 bg-white focus-within:ring-2 focus-within:ring-primary-100";

    // State styles
    const stateStyles = error
      ? "border-texterror focus-within:border-texterror focus-within:ring-red-100"
      : disabled
      ? "border-border-100 bg-neutral-50 cursor-not-allowed"
      : "border-border-100 hover:border-neutral-300 focus-within:border-primarysource";

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";

    const combinedClasses = `${baseStyles} ${stateStyles} ${widthStyles} ${className}`;

    return (
      <div className={`flex flex-col items-start gap-1.5 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-[14px] font-semibold text-textdark leading-[20px]"
          >
            {label}
          </label>
        )}

        <div className={combinedClasses}>
          {leftIcon && (
            <span className="flex-shrink-0 text-neutral-400">{leftIcon}</span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`flex-1 bg-transparent border-0 outline-none text-[14px] text-neutralsource placeholder:text-neutral-400 disabled:cursor-not-allowed ${
              leftIcon ? "" : "pl-0"
            } ${rightIcon ? "" : "pr-0"}`}
            disabled={disabled}
            {...props}
          />

          {rightIcon && (
            <span className="flex-shrink-0 text-neutral-400">{rightIcon}</span>
          )}
        </div>

        {(error || hint) && (
          <p
            className={`text-[12px] leading-[16px] ${
              error ? "text-texterror" : "text-neutral-500"
            }`}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
