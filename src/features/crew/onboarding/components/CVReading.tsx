import React, { useEffect, useState } from "react";

// Nota: Puedes usar un icon o un Lottie similar si no tienes la imagen
// import scanFile from "./scan-file-igfugozm5t.png";

interface CVReadingProps {
  file: File;
  onComplete: () => void;
}

export const CVReading: React.FC<CVReadingProps> = ({ file, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Reading professional experience...");

  useEffect(() => {
    console.log(`Processing file: ${file.name}`);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Pequeña pausa antes de completar
          return 100;
        }
        
        // Cambiar el mensaje según el progreso
        if (prev > 70) setStatus("Analyzing certifications...");
        else if (prev > 40) setStatus("Extracting contact info...");
        
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col w-full max-w-[424px] items-center gap-8 relative animate-in zoom-in-95 duration-500">
      {/* Icon/Animation Placeholder */}
      <div className="relative w-[100px] h-[100px] bg-primary-50 rounded-full flex items-center justify-center overflow-hidden border-2 border-primary-100">
        <div className="absolute inset-0 bg-gradient-to-b from-primarysource/10 to-transparent animate-pulse" />
        <svg 
          className="w-12 h-12 text-primarysource animate-bounce" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-10 relative self-stretch w-full">
        <div className="flex flex-col items-center gap-4 relative self-stretch w-full">
          <h1 className="relative self-stretch font-heading-xl font-bold text-textdark text-[length:var(--heading-xl-font-size)] text-center tracking-[var(--heading-xl-letter-spacing)] leading-[var(--heading-xl-line-height)]">
            Maria is reading your CV
          </h1>

          <div className="relative h-7 min-w-[250px]">
            <p className="font-title-lg font-semibold text-primarysource text-center animate-pulse">
              {status}
            </p>
          </div>
        </div>

        <div className="flex flex-col h-10 items-center gap-3 relative self-stretch w-full">
          {/* Progress Bar Container */}
          <div className="relative self-stretch w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
            {/* Animated Progress Bar */}
            <div 
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative flex-1 self-stretch font-label-lg font-bold text-neutral-400 text-center uppercase tracking-widest text-sm">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};
