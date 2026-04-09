import React, { useState } from "react";
import { CVUpload } from "./components/CVUpload";
import { CVReading } from "./components/CVReading";
import { CVReview } from "./components/CVReview";

export const CrewOnboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState<"upload" | "reading" | "review">("upload");
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleCVUpload = (file: File) => {
    setCvFile(file);
    setStep("reading");
  };

  const handleReadingComplete = () => {
    setStep("review");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[696px] mx-auto min-h-[400px]">
      {step === "upload" && (
        <CVUpload onContinue={handleCVUpload} />
      )}
      
      {step === "reading" && (
        <CVReading onComplete={handleReadingComplete} />
      )}

      {step === "review" && (
        <CVReview onConfirm={onComplete} />
      )}
    </div>
  );
};
