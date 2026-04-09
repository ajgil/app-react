import React, { useCallback, useRef, useState } from "react";

const UploadFileIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.667 2.5H5.833A1.667 1.667 0 0 0 4.167 4.167v11.666A1.667 1.667 0 0 0 5.833 17.5h8.334a1.667 1.667 0 0 0 1.666-1.667V7.5l-4.166-5Z"
      stroke="url(#upload-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.667 2.5v5h5"
      stroke="url(#upload-gradient2)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.167v-4.334M8.333 11.5 10 9.833l1.667 1.667"
      stroke="url(#upload-gradient3)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="upload-gradient"
        x1="4.167"
        y1="2.5"
        x2="16.667"
        y2="17.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgba(59,130,246,1)" />
        <stop offset="1" stopColor="rgba(29,78,216,1)" />
      </linearGradient>
      <linearGradient
        id="upload-gradient2"
        x1="11.667"
        y1="2.5"
        x2="16.667"
        y2="7.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgba(59,130,246,1)" />
        <stop offset="1" stopColor="rgba(29,78,216,1)" />
      </linearGradient>
      <linearGradient
        id="upload-gradient3"
        x1="8.333"
        y1="9.833"
        x2="11.667"
        y2="14.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="rgba(59,130,246,1)" />
        <stop offset="1" stopColor="rgba(29,78,216,1)" />
      </linearGradient>
    </defs>
  </svg>
);

const FolderUploadIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="transparent" />
    <path
      d="M8 16C8 13.791 9.791 12 12 12H20L24 16H36C38.209 16 40 17.791 40 20V34C40 36.209 38.209 38 36 38H12C9.791 38 8 36.209 8 34V16Z"
      fill="rgba(29,78,216,1)"
    />
    <path
      d="M8 20C8 17.791 9.791 16 12 16H36C38.209 16 40 17.791 40 20V34C40 36.209 38.209 38 36 38H12C9.791 38 8 36.209 8 34V20Z"
      fill="rgba(59,130,246,0.3)"
    />
    <path
      d="M8 20C8 17.791 9.791 16 12 16H36C38.209 16 40 17.791 40 20V34C40 36.209 38.209 38 36 38H12C9.791 38 8 36.209 8 34V20Z"
      fill="rgba(29,78,216,1)"
    />
    <circle cx="24" cy="28" r="7" fill="white" fillOpacity="0.15" />
    <path
      d="M24 32V24M21 27L24 24L27 27"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CVUploadProps {
  onContinue: (file: File) => void;
}

export const CVUpload: React.FC<CVUploadProps> = ({ onContinue }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setSelectedFile(files[0]);
      }
    },
    [],
  );

  const handleChooseFile = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleContinueClick = useCallback(() => {
    if (selectedFile) {
      onContinue(selectedFile);
    }
  }, [selectedFile, onContinue]);

  return (
    <div className="flex flex-col w-full max-w-[696px] items-center gap-10 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="inline-flex flex-col items-center gap-2 relative">
        <h1 className="relative self-stretch mt-[-1.00px] font-heading-xl font-bold text-textdark text-[length:var(--heading-xl-font-size)] text-center tracking-[var(--heading-xl-letter-spacing)] leading-[var(--heading-xl-line-height)]">
          Let&apos;s build your profile
        </h1>

        <p className="relative w-fit font-body-lg font-medium text-neutral-500 text-[length:var(--body-lg-font-size)] text-center tracking-[var(--body-lg-letter-spacing)] leading-[var(--body-lg-line-height)]">
          Upload your CV and Maria will extract your information automatically
        </p>
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-3 px-6 pt-12 pb-6 relative self-stretch w-full bg-white rounded-2xl border-2 border-dashed ${
          isDragOver 
            ? "border-primarysource bg-primary-50" 
            : "border-border-200 hover:border-neutral-300"
        } transition-all duration-200 cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleChooseFile}
        role="button"
        tabIndex={0}
        aria-label="Upload CV drop zone"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleChooseFile();
          }
        }}
      >
        <div className="relative w-12 h-12">
          <FolderUploadIcon />
        </div>

        <div className="items-center gap-4 flex flex-col relative self-stretch w-full">
          <div className="items-start gap-1 flex flex-col relative self-stretch w-full text-center">
            <div className="relative w-fit mx-auto font-heading-xs font-bold text-textdark text-[length:var(--heading-xs-font-size)]">
              {selectedFile ? selectedFile.name : "Upload your CV"}
            </div>

            <div className="relative w-fit mx-auto font-body-md font-medium text-neutral-400">
              {selectedFile
                ? `${(selectedFile.size / 1024).toFixed(1)} KB`
                : "Drag and drop your PDF file here, or click to browse"}
            </div>
          </div>

          <div className="flex w-[201px] items-center gap-4 relative">
            <div className="relative flex-1 h-px bg-neutral-100" />
            <div className="relative w-fit text-neutral-400 font-bold text-xs uppercase tracking-wider">
              OR
            </div>
            <div className="relative flex-1 h-px bg-neutral-100" />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleChooseFile();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 relative bg-white rounded-lg border border-primarysource/20 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group"
          >
            <UploadFileIcon className="relative w-5 h-5" />
            <span className="font-bold text-primarysource">
              Choose file
            </span>
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
          aria-label="File upload input"
        />
      </div>

      <div className="items-center gap-4 flex flex-col relative self-stretch w-full">
        <button
          type="button"
          onClick={handleContinueClick}
          disabled={!selectedFile}
          className={`flex items-center justify-center gap-4 py-3.5 relative self-stretch w-full rounded-lg shadow-sm font-bold transition-all ${
            selectedFile
              ? "bg-primarysource hover:bg-primary-600 text-white cursor-pointer"
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
          }`}
        >
          <span className="relative w-fit text-[16px]">
            Continue
          </span>
        </button>

        <p className="relative w-fit font-body-md font-medium text-neutral-400 text-center">
          Your CV is processed securely and never shared without permission
        </p>
      </div>
    </div>
  );
};
