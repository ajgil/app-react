import React, { useState } from "react";
import { Ship, Ruler, Flag as FlagIcon, Globe, ChevronDown, CheckCircle } from "lucide-react";
import yachtIllustration from "../../../../assets/yacht_illustration.png";
import type { YachtData } from "../../../../types/recruiter";

const flagOptions = [
  "United States", "United Kingdom", "France", "Germany", "Italy", "Spain",
  "Netherlands", "Norway", "Sweden", "Denmark", "Australia", "New Zealand",
  "Canada", "Japan", "Singapore", "Panama", "Cayman Islands",
  "Marshall Islands", "Bahamas", "Malta",
];

interface YachtSetupProps {
  onContinue: (data: YachtData) => void;
}

export const YachtSetup: React.FC<YachtSetupProps> = ({ onContinue }) => {
  const [yachtName, setYachtName] = useState("");
  const [yachtSize, setYachtSize] = useState("");
  const [flag, setFlag] = useState("");
  const [website, setWebsite] = useState("");
  const [flagOpen, setFlagOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (yachtName && yachtSize && flag) {
      onContinue({ yachtName, yachtSize, flag, website });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[628px] items-center gap-8 relative animate-fade-up">
      <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
        <div className="relative w-24 h-24 bg-primary-50 rounded-2xl overflow-hidden shadow-sm border border-primary-100 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            alt="Yacht Illustration"
            src={yachtIllustration}
          />
        </div>

        <div className="flex flex-col items-center gap-3 relative self-stretch w-full text-center">
          <h1 className="font-heading-xl text-textdark tracking-tight">
            Welcome, Captain
          </h1>
          <p className="font-body-lg text-texthint max-w-md">
            Tell us about your yacht to start finding the perfect crew
          </p>
        </div>
      </div>

      <div className="relative self-stretch w-full bg-white rounded-2xl shadow-xl p-10 border border-neutral-100/50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-6">
            {/* Yacht Name Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Yacht Name <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Ship size={20} />
                </div>
                <input
                  type="text"
                  value={yachtName}
                  onChange={(e) => setYachtName(e.target.value)}
                  placeholder="e.g. Serenity"
                  required
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>

            {/* Yacht Size Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Yacht Size (meters) <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Ruler size={20} />
                </div>
                <input
                  type="number"
                  value={yachtSize}
                  onChange={(e) => setYachtSize(e.target.value)}
                  placeholder="e.g. 45"
                  required
                  min="0"
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>

            {/* Flag Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Flag State <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFlagOpen(!flagOpen)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 bg-neutral-50 border rounded-xl transition-all text-left ${flagOpen ? "border-primary-500 ring-2 ring-primary-500/10" : "border-neutral-200"
                    }`}
                >
                  <FlagIcon size={20} className={flag ? "text-primary-500" : "text-neutral-400"} />
                  <span className={`font-body-lg flex-1 ${flag ? "text-textdark" : "text-neutral-300"}`}>
                    {flag || "Select flag state"}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-neutral-400 transition-transform ${flagOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {flagOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setFlagOpen(false)} />
                    <ul className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-neutral-100 rounded-xl shadow-2xl max-h-60 overflow-y-auto p-1 animate-in fade-in zoom-in-95 duration-200">
                      {flagOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setFlag(option);
                            setFlagOpen(false);
                          }}
                          className={`font-body-lg flex items-center justify-between px-4 py-2.5 rounded-lg cursor-pointer transition-colors ${flag === option ? "bg-primary-50 text-primary-700 font-medium" : "text-textdark hover:bg-neutral-50"
                            }`}
                        >
                          {option}
                          {flag === option && <CheckCircle size={16} />}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Website Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 uppercase tracking-wider">
                Website <span className="font-body-sm text-neutral-400 font-normal ml-1 lowercase tracking-normal">(Optional)</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Globe size={20} />
                </div>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://www.yacht.com"
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="font-heading-xs mt-4 w-full py-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            Confirm & Continue
            <ChevronDown size={20} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>

      <p className="font-body-sm text-texthint text-center">
        You can update these details anytime in your settings
      </p>
    </div>
  );
};
