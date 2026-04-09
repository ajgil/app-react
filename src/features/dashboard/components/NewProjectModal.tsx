import React from "react";

interface NewProjectModalProps {
  show: boolean;
  onClose: () => void;
  projectName: string;
  setProjectName: (name: string) => void;
  projectType: string;
  setProjectType: (type: string) => void;
  onCreate: () => void;
}

export const NewProjectModal: React.FC<NewProjectModalProps> = ({
  show,
  onClose,
  projectName,
  setProjectName,
  projectType,
  setProjectType,
  onCreate,
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-[480px] overflow-hidden shadow-xxl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-100">
          <h2 className="text-[20px] font-semibold text-neutralsource">Create New Project</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-neutralsource">Project Name</label>
            <input
              type="text"
              placeholder="Enter project name..."
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-3 py-2.5 text-[14px] border border-border-200 rounded-lg focus:outline-none focus:border-primarysource focus:ring-2 focus:ring-primary-100"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-neutralsource">Project Type</label>
            <div className="grid grid-cols-3 gap-2">
              {["Web App", "Mobile App", "Landing Page"].map((type) => (
                <button
                  key={type}
                  onClick={() => setProjectType(type)}
                  className={`py-2.5 px-3 rounded-lg border text-[13px] font-medium transition-all ${
                    projectType === type
                      ? "border-primarysource bg-primary-50 text-primarysource"
                      : "border-border-200 text-neutral-600 hover:border-primary-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-medium text-neutralsource">
              Description <span className="text-neutral-400 font-normal">(optional)</span>
            </label>
            <textarea
              placeholder="Describe your project..."
              rows={3}
              className="w-full px-3 py-2.5 text-[14px] border border-border-200 rounded-lg focus:outline-none focus:border-primarysource focus:ring-2 focus:ring-primary-100 resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-100 bg-neutral-50">
          <button onClick={onClose} className="px-4 py-2 text-[14px] font-medium text-neutral-700 border border-border-200 rounded-lg hover:bg-white">
            Cancel
          </button>
          <button
            onClick={onCreate}
            disabled={!projectName.trim()}
            className={`px-4 py-2 text-[14px] font-medium text-white rounded-lg transition-colors ${
              projectName.trim() ? "bg-primarysource hover:bg-primary-600" : "bg-neutral-300 cursor-not-allowed"
            }`}
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};
