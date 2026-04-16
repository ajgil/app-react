import React from "react";

export type ProjectStatus = "In Progress" | "Review" | "Completed";

export interface ProjectCardProps {
  id: string;
  name: string;
  status: ProjectStatus;
  thumbnail?: string;
  components?: number;
  screens?: number;
  lastEdited?: string;
  onClick?: () => void;
}

const statusColors: Record<ProjectStatus, string> = {
  "In Progress": "bg-blue-50 text-blue-600",
  "Review": "bg-yellow-50 text-yellow-600",
  "Completed": "bg-green-50 text-green-600",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  status,
  thumbnail = "bg-gradient-to-br from-purple-100 to-blue-100",
  components = 0,
  screens = 0,
  lastEdited = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="border border-border-100 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-md transition-all cursor-pointer group bg-white"
    >
      {/* Thumbnail */}
      <div className={`h-[120px] ${thumbnail} relative`}>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg px-3 py-1.5 text-[12px] font-medium text-neutralsource">
            Open
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[14px] font-medium truncate flex-1 mr-2">{name}</h3>
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[12px] text-neutral-500">
          <span>{components} components</span>
          <span>{screens} screens</span>
          <span className="ml-auto">{lastEdited}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
