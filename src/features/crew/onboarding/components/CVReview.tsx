import React from "react";

// Placeholder icons
const MailIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const RoleIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface CVReviewProps {
  data?: any;
  onConfirm: () => void;
}

export const CVReview: React.FC<CVReviewProps> = ({ onConfirm }) => {
  return (
    <div className="flex flex-col w-full max-w-[628px] items-center gap-10 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="inline-flex flex-col items-center gap-5 relative">
        {/* Success Icon */}
        <div className="relative w-16 h-16 bg-success-50 rounded-2xl flex items-center justify-center">
           <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
        </div>

        <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
          <h1 className="relative self-stretch font-heading-xl font-bold text-textdark text-[length:var(--heading-xl-font-size)] text-center tracking-[var(--heading-xl-letter-spacing)] leading-[var(--heading-xl-line-height)]">
            Review your information
          </h1>
          <p className="relative w-fit font-body-lg font-medium text-neutral-500 text-[length:var(--body-lg-font-size)] text-center">
            Tap any field to edit. Make sure everything looks correct.
          </p>
        </div>
      </div>

      <div className="relative self-stretch w-full bg-white rounded-2xl shadow-xl border border-border-100 p-8 flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-bold text-primarysource text-sm tracking-widest uppercase underline decoration-2 underline-offset-8">
            PRIMARY INFORMATION
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            {/* First Name */}
            <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                First Name <span className="text-error-500">*</span>
              </label>
              <div className="font-semibold text-textdark">John</div>
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Last Name <span className="text-error-500">*</span>
              </label>
              <div className="font-semibold text-textdark">Smith</div>
            </div>

            {/* Email */}
            <div className="col-span-2 flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Email <span className="text-error-500">*</span>
              </label>
              <div className="flex items-center gap-3 font-semibold text-textdark">
                <MailIcon />
                <span>john.smith@email.com</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="col-span-2 flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Phone Number <span className="text-error-500">*</span>
              </label>
              <div className="flex items-center gap-3 font-semibold text-textdark">
                <PhoneIcon />
                <span>+44 7700 900000</span>
              </div>
            </div>

            {/* Current Location */}
            <div className="col-span-2 flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Current Location
              </label>
              <div className="flex items-center gap-3 font-semibold text-textdark">
                <LocationIcon />
                <span>Antibes, France</span>
              </div>
            </div>

            {/* Primary Role */}
            <div className="col-span-2 flex flex-col gap-1 px-4 py-3 rounded-lg border border-solid border-border-100 bg-neutral-50/50 hover:border-primarysource/30 cursor-pointer transition-all">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                Primary Role
              </label>
              <div className="flex items-center gap-3 font-semibold text-textdark">
                <RoleIcon />
                <span>Deckhand</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onConfirm}
        className="flex items-center justify-center gap-4 py-4 relative self-stretch w-full rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold hover:shadow-xl hover:scale-[1.01] transition-all active:scale-[0.99] cursor-pointer"
      >
        <span className="text-lg">Confirm &amp; Continue</span>
      </button>
    </div>
  );
};
