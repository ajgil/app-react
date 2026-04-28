import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, fullWidth = true, className = "", id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`flex flex-col items-start gap-1.5 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-[14px] font-semibold text-textdark leading-[20px]"
          >
            {label}
          </label>
        )}

        <div className="relative w-full">
          <select
            ref={ref}
            id={selectId}
            className={`
              appearance-none w-full bg-white border border-border-100 rounded-lg px-4 py-2.5 
              text-[14px] text-neutralsource focus:outline-none focus:ring-2 focus:ring-primary-100 
              hover:border-neutral-300 transition-all cursor-pointer
              ${error ? "border-texterror" : ""}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-400">
            <ChevronDown size={18} />
          </div>
        </div>

        {error && (
          <p className="text-[12px] leading-[16px] text-texterror">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
