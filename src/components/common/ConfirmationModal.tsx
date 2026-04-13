import { type FunctionComponent, type ReactNode } from "react";

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  message?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  isDangerous?: boolean;
}

const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "Please confirm this action.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  isDangerous = false,
}) => {
  if (!isOpen) return null;

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#727272]/60" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[540px] rounded-[24px] shadow-[0px_20px_48px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 border border-[#f0f2f5]">
        
        {/* Header with Icon */}
        <div className="flex items-center justify-center p-8 pb-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isDangerous ? "bg-red-100" : "bg-blue-100"
          }`}>
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isDangerous ? (
                // Alert icon (Material Design) for dangerous actions
                <path 
                  d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" 
                  fill={isDangerous ? "#DC2626" : "#3B82F6"}
                />
              ) : (
                // Help/Question icon (Material Design) for normal actions
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" 
                  fill="#3B82F6"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="px-8 flex flex-col items-center gap-3">
          <h2 className="m-0 text-2xl font-bold text-[#1a1a1a] text-center">{title}</h2>
        </div>

        {/* Message */}
        <div className="px-8 py-6 flex flex-col gap-4">
          <p className="m-0 text-center text-[#727272] text-base leading-relaxed">
            {message}
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="p-8 pt-6 flex items-center justify-center gap-3 border-t border-[#f0f2f5]">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-8 py-4 bg-white border border-[#e5e7eb] rounded-2xl text-base font-bold text-[#4b5563] cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className={`flex-1 px-8 py-4 rounded-2xl text-base font-bold text-white cursor-pointer transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
              isDangerous
                ? "bg-[#ef4444] hover:bg-red-600"
                : "bg-[#3b82f6] hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
