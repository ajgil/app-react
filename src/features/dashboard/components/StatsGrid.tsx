import React from "react";
import type { Stat } from "../types";

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl border border-border-100 p-5 shadow-xs"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primarysource">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={stat.icon} />
              </svg>
            </div>
            <span
              className={`text-[12px] font-medium px-2 py-0.5 rounded-full ${
                stat.positive ? "bg-green-50 text-textsuccess" : "bg-red-50 text-texterror"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <p className="text-[28px] font-semibold text-neutralsource leading-[32px] mb-1">
            {stat.value}
          </p>
          <p className="text-[14px] text-neutral-500 leading-[20px]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
