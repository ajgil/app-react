import type { FC } from "react";
import { Bookmark, MapPin, Calendar, Wallet, ChevronRight } from "lucide-react";

interface JobCardProps {
  title: string;
  shipName: string;
  shipDetails: string;
  description: string;
  tags: string[];
  location: string;
  date: string;
  salary: string;
  matchPercentage?: number;
  isSaved?: boolean;
  isApplied?: boolean;
}

const JobCard: FC<JobCardProps> = ({
  title,
  shipName,
  shipDetails,
  description,
  tags,
  location,
  date,
  salary,
  matchPercentage,
  isSaved = false,
  isApplied = false,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#f3f3f3] shadow-sm p-6 flex flex-col gap-5">
      {/* Header section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          {/* Logo Placeholder */}
          <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center">
            <img className="w-6 h-6" src="/ph-ship-light.svg" alt="Ship" onError={(e) => {
              (e.target as HTMLImageElement).src = "https://api.iconify.design/ph:ship-light.svg?color=%231d4ed8";
            }} />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-[#212121] m-0">{title}</h3>
            <span className="text-sm text-[#727272]">{shipName} • {shipDetails}</span>
          </div>
        </div>

        {matchPercentage && (
          <div className="bg-[rgba(225,167,19,0.1)] text-[#e1a613] px-3 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
            <img className="w-3.5 h-3.5" src="/game-icons-fire.svg" alt="Match" onError={(e) => {
              (e.target as HTMLImageElement).src = "https://api.iconify.design/game-icons:fire.svg?color=%23e1a613";
            }} />
            {matchPercentage}% match
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[#5e5e5e] leading-relaxed m-0">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-[#f4f4f4] text-[#727272] text-[10px] font-bold tracking-wider rounded-full uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#f3f3f3] w-full" />

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6 text-sm text-[#727272]">
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-[#727272]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-[#727272]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wallet size={16} className="text-[#727272]" />
            <span>{salary}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-transparent border-none p-1 cursor-pointer">
            <Bookmark 
              size={24} 
              className={isSaved ? "fill-[#e1a613] text-[#e1a613]" : "text-[#727272]"} 
            />
          </button>
          
          <button 
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 border-none cursor-pointer transition-colors ${
              isApplied 
                ? "bg-[#eff6ff] text-[#3b82f6]" 
                : "bg-[#1d4ed8] text-white hover:bg-blue-700"
            }`}
            disabled={isApplied}
          >
            {isApplied ? "Applied" : (
              <>
                Apply <ChevronRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
