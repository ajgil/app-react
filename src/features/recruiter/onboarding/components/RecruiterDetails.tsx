import React, { useState } from "react";
import { User, Briefcase, Phone, Mail, ChevronDown, UserCircle } from "lucide-react";
import type { RecruiterData } from "../../../../types/recruiter";

interface RecruiterDetailsProps {
  onContinue: (data: RecruiterData) => void;
  onBack: () => void;
}

export const RecruiterDetails: React.FC<RecruiterDetailsProps> = ({ onContinue, onBack }) => {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && role && phone && email) {
      onContinue({ fullName, role, phone, email });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[628px] items-center gap-8 relative animate-fade-up">
      <div className="flex flex-col items-center gap-6 relative flex-[0_0_auto] w-full">
        <div className="relative w-24 h-24 bg-primary-50 rounded-full overflow-hidden shadow-sm border border-primary-100 flex items-center justify-center text-primary-500">
          <UserCircle size={64} strokeWidth={1.5} />
        </div>

        <div className="flex flex-col items-center gap-3 relative self-stretch w-full text-center">
          <h1 className="font-heading-xl text-textdark tracking-tight">
            About You
          </h1>
          <p className="font-body-lg text-texthint max-w-md">
            Help crew members know who they are talking to
          </p>
        </div>
      </div>

      <div className="relative self-stretch w-full bg-white rounded-2xl shadow-xl p-10 border border-neutral-100/50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="space-y-6">
            {/* Full Name Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Capt. James Hook"
                  required
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>

            {/* Role Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Your Role <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Briefcase size={20} />
                </div>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Captain, Chief Stew, Manager"
                  required
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. captain@serenity-yacht.com"
                  required
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-1.5 font-label-md">
              <label className="text-texthint ml-1 flex items-center gap-1 uppercase tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 234 567 890"
                  required
                  className="font-body-lg w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-textdark placeholder:text-neutral-300"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onBack}
              className="font-heading-xs px-6 py-4 border border-neutral-200 hover:bg-neutral-50 text-textdark rounded-xl transition-all"
            >
              Back
            </button>
            <button
              type="submit"
              className="font-heading-xs flex-1 py-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-xl shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              Finalize Onboarding
              <ChevronDown size={20} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
