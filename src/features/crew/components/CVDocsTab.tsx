import { type FunctionComponent, useState } from "react";
import ConfirmationModal from "../../../components/common/ConfirmationModal";
import { useToast } from "../../../hooks/useToast";

interface CVRowProps {
  fileName: string;
  uploadDate: string;
  fileSize: string;
  onDelete?: () => void | Promise<void>;
}

const CVRow: FunctionComponent<CVRowProps> = ({ fileName, uploadDate, fileSize, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = async () => {
    if (onDelete) {
      try {
        await onDelete();
        setShowDeleteConfirm(false);
        showSuccess(`"${fileName}" deleted successfully`);
      } catch (error) {
        showError("Failed to delete CV");
      }
    }
  };
  return (
    <div className="w-full flex items-center justify-between p-4 bg-white border border-[#f3f3f3] rounded-xl hover:shadow-md transition-all duration-300 animate-in slide-in-from-right-4">
      <div className="flex items-center gap-4">
        {/* File Icon */}
        <div className="w-12 h-12 rounded-lg bg-[#f4f3f9] flex items-center justify-center shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a364f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        
        {/* File Info */}
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-bold text-[#1a1a1a]">{fileName}</span>
          <span className="text-sm text-[#727272]">
            Uploaded {uploadDate} • {fileSize}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 py-2 px-4 bg-[#f4f3f9] border-none rounded-lg text-sm font-semibold text-[#3a364f] cursor-pointer hover:bg-[#e9e8f0] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          Preview
        </button>
        <button className="flex items-center gap-2 py-2 px-4 bg-[#f4f3f9] border-none rounded-lg text-sm font-semibold text-[#3a364f] cursor-pointer hover:bg-[#e9e8f0] transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download
        </button>
        <button className="p-2 border border-gray-100 rounded-lg text-[#727272] bg-white cursor-pointer hover:bg-gray-50 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
        </button>
        <button className="p-2 border-none bg-transparent cursor-pointer text-[#ef4444] hover:scale-110 transition-transform" onClick={handleDeleteClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Are you sure?"
        message={`Are you sure you want to delete "${fileName}"? Please note that this action is irreversible.`}
        confirmText="Confirm Deletion"
        cancelText="Cancel"
        isDangerous={true}
      />
    </div>
  );
};

const CVDocsTab: FunctionComponent = () => {
  const [cvFiles] = useState([
    {
      fileName: "John_Smith_CV_2024.pdf",
      uploadDate: "Dec 15, 2024",
      fileSize: "245 KB",
    },
    {
      fileName: "John_Smith_CoverLetter_2024.pdf",
      uploadDate: "Dec 10, 2024",
      fileSize: "120 KB",
    },
  ]);

  const handleDeleteCV = async (index: number) => {
    // Handle CV deletion logic here
    console.log(`Deleting CV at index ${index}`);
  };
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Tab Header */}
      <div className="w-full flex items-center justify-between p-6 gap-4">
        <div className="flex flex-col gap-0.5">
          <h2 className="m-0 text-xl font-semibold text-[#393939]">CV Management</h2>
          <div className="text-sm tracking-[0.25px] text-[#727272]">
            Manage your CV versions and professional documents
          </div>
        </div>
        <button className="cursor-pointer py-3 px-6 bg-white border border-blue-600 rounded-lg flex items-center gap-3 hover:bg-blue-50 transition-all text-blue-600 font-semibold shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V8M12 8L9 11M12 8L15 11M4 16.5V17.5C4 18.8807 5.11929 20 6.5 20H17.5C18.8807 20 20 18.8807 20 17.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Upload CV
        </button>
      </div>

      {/* Docs List */}
      <div className="flex flex-col gap-4 p-6 pt-2">
        {cvFiles.map((cv, index) => (
          <CVRow
            key={index}
            fileName={cv.fileName}
            uploadDate={cv.uploadDate}
            fileSize={cv.fileSize}
            onDelete={() => handleDeleteCV(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CVDocsTab;
