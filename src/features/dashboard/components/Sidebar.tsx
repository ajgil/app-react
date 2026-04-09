import React from "react";
import type { NavItem } from "../types";
import { navItems } from "../constants";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  activeNav,
  setActiveNav,
}) => {
  return (
    <aside
      className={`${sidebarOpen ? "w-[240px]" : "w-[64px]"} flex flex-col bg-white border-r border-border-100 transition-all duration-300 flex-shrink-0`}
      style={{ boxShadow: "var(--shadow-xs)" }}
    >
      <div className="flex items-center h-[64px] px-4 border-b border-border-100 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primarysource flex items-center justify-center flex-shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          {sidebarOpen && (
            <span
              className="text-neutralsource font-semibold text-[18px] leading-[24px] tracking-[0px]"
              style={{ fontFamily: "var(--heading-xs-font-family)" }}
            >
              Anima
            </span>
          )}
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-auto p-1 rounded-md hover:bg-neutral-50 text-neutral-500 transition-colors"
          aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
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
            <path d={sidebarOpen ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
          </svg>
        </button>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveNav(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                  activeNav === item.label
                    ? "bg-primary-50 text-primarysource"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
                title={!sidebarOpen ? item.label : undefined}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d={item.icon} />
                </svg>
                {sidebarOpen && (
                  <span
                    className="text-[14px] font-medium leading-[20px] tracking-[0.1px]"
                    style={{ fontFamily: "var(--label-lg-font-family)" }}
                  >
                    {item.label}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-border-100 p-3 flex-shrink-0">
        <div
          className={`flex items-center gap-3 ${!sidebarOpen ? "justify-center" : ""}`}
        >
          <div className="w-8 h-8 rounded-full bg-primarysource flex items-center justify-center flex-shrink-0">
            <span
              className="text-white text-[12px] font-semibold"
              style={{ fontFamily: "var(--label-md-font-family)" }}
            >
              JD
            </span>
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p
                className="text-[14px] font-medium text-neutralsource leading-[20px] truncate"
                style={{ fontFamily: "var(--title-sm-font-family)" }}
              >
                John Doe
              </p>
              <p
                className="text-[12px] text-neutral-500 leading-[16px] truncate"
                style={{ fontFamily: "var(--body-sm-font-family)" }}
              >
                john@anima.app
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
