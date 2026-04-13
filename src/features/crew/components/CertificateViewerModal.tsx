import { type FunctionComponent, useState } from "react";
import ConfirmationModal from "../../../components/common/ConfirmationModal";
import { useToast } from "../../../hooks/useToast";

export type CertificateData = {
  id: number;
  name: string;
  issuer: string;
  image: string;
  issuedDate: string;
  expiryDate: string;
};

interface CertificateViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: CertificateData | null;
  onNext?: () => void;
  onPrev?: () => void;
  onDelete?: (id: number) => void | Promise<void>;
}

const CertificateViewerModal: FunctionComponent<CertificateViewerModalProps> = ({
  isOpen,
  onClose,
  certificate,
  onNext,
  onPrev,
  onDelete,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (onDelete && certificate) {
      try {
        await onDelete(certificate.id);
        setShowDeleteConfirm(false);
        showSuccess(`Certificate "${certificate.name}" deleted successfully`);
        onClose();
      } catch (error) {
        showError("Failed to delete certificate");
      }
    }
  };

  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#727272]/60" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-4">
          <div className="flex flex-col gap-1">
            <h2 className="m-0 text-2xl font-bold text-[#1a1a1a]">{certificate.name}</h2>
            <span className="text-base text-[#727272] font-medium uppercase tracking-wide">{certificate.issuer}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex-1 flex items-center justify-center p-8 pt-2 min-h-[400px]">
          {/* Navigation Arrows */}
          <button 
            onClick={onPrev}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/90 shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="w-full h-full rounded-xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100">
            <img 
              src={certificate.image} 
              className="w-full h-full object-contain max-h-[60vh]" 
              alt={certificate.name} 
            />
          </div>

          <button 
            onClick={onNext}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/90 shadow-lg border border-gray-100 flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all z-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Footer Info & Actions */}
        <div className="flex items-center justify-between p-8 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-8 text-sm text-[#727272]">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Issued: <span className="font-semibold">{certificate.issuedDate}</span></span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Expires: <span className="font-semibold">{certificate.expiryDate}</span></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm group">
              <svg className="text-gray-600 group-hover:text-blue-600 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm group">
              <svg className="text-gray-600 group-hover:text-blue-600 transition-colors" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#ef4444] flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors shadow-lg hover:rotate-6" onClick={handleDeleteClick}>
              <svg className="text-white" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={showDeleteConfirm}
          onClose={() => setShowDeleteConfirm(false)}
          onConfirm={handleConfirmDelete}
          title="Are you sure?"
          message={`Are you sure you want to delete the certificate "${certificate.name}"? Please note that this action is irreversible.`}
          confirmText="Confirm Deletion"
          cancelText="Cancel"
          isDangerous={true}
        />
      </div>
    </div>
  );
};

export default CertificateViewerModal;
