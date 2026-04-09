import React from "react";
import type { Activity, NavItem } from "../types";

interface HeaderProps {
  activeNav: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  notificationsOpen: boolean;
  setNotificationsOpen: (open: boolean) => void;
  profileOpen: boolean;
  setProfileOpen: (open: boolean) => void;
  setShowNewProjectModal: (show: boolean) => void;
  activityFeed: Activity[];
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  searchQuery,
  setSearchQuery,
  notificationsOpen,
  setNotificationsOpen,
  profileOpen,
  setProfileOpen,
  setShowNewProjectModal,
  activityFeed,
}) => {
  return (
    <header
      className="h-[64px] bg-white border-b border-border-100 flex items-center px-6 gap-4 flex-shrink-0"
      style={{ boxShadow: "var(--shadow-xs)" }}
    >
      <div className="flex-1">
        <h1
          className="text-[20px] font-semibold text-neutralsource leading-[24px] tracking-[0px]"
          style={{ fontFamily: "var(--heading-sm-font-family)" }}
        >
          {activeNav}
        </h1>
      </div>

      <div className="relative w-[280px]">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-[14px] bg-neutral-50 border border-border-100 rounded-lg text-neutralsource placeholder-neutral-400 focus:outline-none focus:border-primarysource focus:ring-2 focus:ring-primary-100 transition-colors"
          style={{ fontFamily: "var(--body-md-font-family)" }}
        />
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setNotificationsOpen(!notificationsOpen);
            setProfileOpen(false);
          }}
          className="relative p-2 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors"
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
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-texterror rounded-full"></span>
        </button>
        {notificationsOpen && (
          <div
            className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-xl border border-border-100 z-50 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 border-b border-border-100 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-neutralsource">Notifications</h3>
              <span className="text-[12px] text-primarysource font-medium cursor-pointer hover:underline">Mark all read</span>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {activityFeed.slice(0, 3).map((item) => (
                <div key={item.id} className="px-4 py-3 hover:bg-neutral-50 cursor-pointer border-b border-border-50 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-[11px] font-semibold">{item.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-neutralsource leading-[18px]">
                        <span className="font-medium">{item.user}</span> {item.action} <span className="text-primarysource">{item.project}</span>
                      </p>
                      <p className="text-[12px] text-neutral-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => {
            setProfileOpen(!profileOpen);
            setNotificationsOpen(false);
          }}
          className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primarysource flex items-center justify-center">
            <span className="text-white text-[12px] font-semibold">JD</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {profileOpen && (
          <div className="absolute right-0 top-full mt-2 w-[200px] bg-white rounded-xl border border-border-100 z-50 overflow-hidden shadow-lg">
            <div className="px-4 py-3 border-b border-border-100">
              <p className="text-[14px] font-medium text-neutralsource">John Doe</p>
              <p className="text-[12px] text-neutral-500">john@anima.app</p>
            </div>
            {["Profile", "Account Settings", "Help & Support", "Sign Out"].map((item) => (
              <button key={item} className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-neutral-50 transition-colors ${item === "Sign Out" ? "text-texterror border-t" : "text-neutralsource"}`}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setShowNewProjectModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-primarysource text-white rounded-lg text-[14px] font-medium hover:bg-primary-600 transition-colors flex-shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        New Project
      </button>
    </header>
  );
};
