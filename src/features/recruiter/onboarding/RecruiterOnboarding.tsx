import React, { useState } from "react";
import { YachtSetup } from "./components/YachtSetup";
import { RecruiterDetails } from "./components/RecruiterDetails";

type OnboardingStep = "yacht-setup" | "recruiter-details" | "done";

export const RecruiterOnboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState<OnboardingStep>("yacht-setup");
  const [formData, setFormData] = useState({
    yacht: null,
    recruiter: null,
  });

  const handleYachtSetupComplete = (yachtData: any) => {
    setFormData((prev) => ({ ...prev, yacht: yachtData }));
    setStep("recruiter-details");
  };

  const handleRecruiterDetailsComplete = (recruiterData: any) => {
    const finalData = { ...formData, recruiter: recruiterData };
    console.log("Complete Recruiter Data:", finalData);
    setStep("done");
    onComplete();
  };

  const handleBack = () => {
    if (step === "recruiter-details") {
      setStep("yacht-setup");
    }
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
