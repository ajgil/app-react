import React from "react";
import { Outlet } from "react-router-dom";
import { LanguageSelector } from "../../components/common/LanguageSelector";

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col lg:flex-row bg-[#F9FAFB] relative overflow-hidden">
      {/* Top Controls - Fixed over everything */}
      <div className="fixed top-8 left-8 z-[60]">
        <LanguageSelector />
      </div>

      {/* Left Side: Content */}
      <div className="relative flex-1 flex items-center justify-center p-6 lg:p-12 z-10">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#062046_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="w-full max-w-[520px] flex justify-center">
          <Outlet />
        </div>
      </div>

      {/* Right Side: Solid Blue Background */}
      <div className="hidden lg:flex flex-1 bg-[#3B82F6] relative overflow-hidden" />
    </div>
  );
};
