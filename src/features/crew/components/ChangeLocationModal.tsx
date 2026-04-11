import { type FunctionComponent, useState } from "react";

interface ChangeLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (location: string) => void;
  currentLocation?: string;
  remainingChanges?: number;
}

const ChangeLocationModal: FunctionComponent<ChangeLocationModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  currentLocation = "",
  remainingChanges = 2,
}) => {
  const [location, setLocation] = useState(currentLocation);

  if (!isOpen) return null;

  const popularLocations = ["Antibes", "Monaco", "Palma", "Fort Lauderdale", "Genoa"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#727272]/60 animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[540px] rounded-[24px] shadow-[0px_20px_48px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-[#f0f2f5]">

        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 5V2" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="m-0 text-2xl font-bold text-[#1a1a1a] tracking-tight">Change Location</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300">
              <path d="M18 6L6 18M6 6L18 18" stroke="#717680" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 flex flex-col gap-6">
          <p className="m-0 text-[#727272] text-lg leading-relaxed">
            Update your current location. You have <span className="text-[#1a1a1a] font-semibold">{remainingChanges} free changes</span> left this month.
          </p>

          <div className="flex flex-col gap-2">
            <label className="text-base font-semibold text-[#1a1a1a]">New Location</label>
            <div className="relative group">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Palma de Mallorca"
                className="w-full px-5 py-4 bg-white border border-[#e5e7eb] rounded-2xl text-lg text-[#1a1a1a] placeholder:text-[#9ca3af] focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all shadow-sm group-hover:border-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Popular locations</span>
            <div className="flex flex-wrap gap-2">
              {popularLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-8 py-4 bg-white border border-[#e5e7eb] rounded-2xl text-base font-bold text-[#4b5563] cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={() => onUpdate(location)}
            className="px-8 py-4 bg-[#3b82f6] rounded-2xl text-base font-bold text-white cursor-pointer hover:bg-blue-600 transition-all shadow-[0px_8px_20px_rgba(59,130,246,0.3)] flex items-center gap-2 group active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Update Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeLocationModal;
