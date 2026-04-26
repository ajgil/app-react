import React, { useState } from "react";
import { YachtSetup } from "./components/YachtSetup";
import { RecruiterDetails } from "./components/RecruiterDetails";
import type { OnboardingFormData, YachtData, RecruiterData } from "../../types/recruiter";

export const RecruiterOnboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [formData, setFormData] = useState<OnboardingFormData>({
    yacht: null,
    recruiter: null,
  });

  const handleYachtSetupComplete = (yachtData: YachtData) => {
    setFormData((prev) => ({ ...prev, yacht: yachtData }));
  };

  const handleRecruiterDetailsComplete = (recruiterData: RecruiterData) => {
    const finalData = { ...formData, recruiter: recruiterData };
    setFormData(finalData);
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto py-10 px-4">
      {/* Progress Bar */}
      <div className="w-full max-w-[400px] mb-12 flex items-center gap-2">
        <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
          step === "yacht-setup" ? "bg-primary-500" : "bg-primary-500"
        }`} />
        <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
          step === "recruiter-details" || step === "done" ? "bg-primary-500" : "bg-neutral-200"
        }`} />
      </div>

      <div className="w-full flex justify-center h-full">
        {step === "yacht-setup" && (
          <YachtSetup onContinue={handleYachtSetupComplete} />
        )}

        {step === "recruiter-details" && (
          <RecruiterDetails 
            onContinue={handleRecruiterDetailsComplete} 
            onBack={handleBack} 
          />
        )}
      </div>
    </div>
  );
};
