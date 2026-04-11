import { type FunctionComponent } from "react";

interface UpgradePremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const UpgradePremiumModal: FunctionComponent<UpgradePremiumModalProps> = ({
  isOpen,
  onClose,
  onUpgrade,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#727272]/60 animate-in fade-in duration-300" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[640px] rounded-[24px] shadow-[0px_20px_48px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-[#f0f2f5]">
        
        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" stroke="#E1A613" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="19" r="1.5" fill="#E1A613"/>
              </svg>
            </div>
            <h2 className="m-0 text-2xl font-bold text-[#1a1a1a] tracking-tight">Upgrade to Premium</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300">
              <path d="M18 6L6 18M6 6L18 18" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 flex flex-col gap-6">
          <p className="m-0 text-[#727272] text-lg leading-relaxed whitespace-nowrap">
            You have used your free location changes for this month.
          </p>

          <div className="p-8 rounded-[32px] bg-[#E1A613]/[0.16] border border-[#E1A613] shadow-sm flex flex-col items-center gap-6 relative overflow-hidden">
            {/* Subtle Gradient background for the box */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="w-20 h-20 rounded-full bg-[#E1A613]/[0.50] flex items-center justify-center relative z-10">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="flex flex-col items-center gap-2 text-center relative z-10">
              <h3 className="m-0 text-xl font-bold text-[#1a1a1a]">Unlimited Location Changes</h3>
              <p className="m-0 text-[#727272] text-center max-w-[340px] leading-relaxed">
                Upgrade to Maria Premium to change your location anytime, or wait until next month for your free changes.
              </p>
            </div>

            <ul className="m-0 p-0 list-none flex flex-col gap-3 relative z-10">
              {[
                "Unlimited location updates",
                "Priority in search results",
                "Advanced AI recommendations"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-[#4b5563] font-medium">
                  <span className="text-emerald-400 font-bold text-lg">~</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-8 flex items-center justify-center gap-3">
          <button 
            onClick={onClose}
            className="flex-1 px-6 py-4 bg-white border border-[#e5e7eb] rounded-2xl text-base font-bold text-[#4b5563] cursor-pointer hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Wait Until Next Month
          </button>
          <button 
            onClick={onUpgrade}
            className="flex-1 px-6 py-4 rounded-2xl text-base font-bold text-white cursor-pointer transition-all shadow-[0px_8px_20px_rgba(24,73,214,0.3)] flex items-center justify-center gap-2 group active:scale-95 [background:linear-gradient(90deg,_#FBBC05,_#1849D6)] hover:brightness-110"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePremiumModal;
