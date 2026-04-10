import { type FunctionComponent } from "react";

export type ExperienceCardType = {
  shipIcon?: string;
  vesselName?: string;
  vesselType?: string;
  role?: string;
  duration?: string;
  days?: string;
  description?: string;
};

const ExperienceCard: FunctionComponent<ExperienceCardType> = ({
  shipIcon = "/lucide-ship.svg",
  vesselName,
  vesselType,
  role,
  duration,
  days,
  description,
}) => {
  return (
    <div className="self-stretch shadow-[2px_2px_12px_rgba(10,_13,_18,_0.04)] rounded-xl bg-white border border-[#f3f3f3] flex flex-col items-start p-6 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:border-blue-100 transition-colors">
      <div className="self-stretch flex items-start justify-between gap-4 mq750:flex-wrap">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#f4f3f9] flex items-center justify-center shrink-0">
            <img className="w-8 h-8" alt="" src={shipIcon} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h4 className="m-0 text-xl font-bold text-[#212121]">{vesselName}</h4>
              <span className="text-[10px] uppercase tracking-wider py-1 px-2 bg-blue-50 text-blue-600 rounded-md font-bold">
                {vesselType}
              </span>
            </div>
            <div className="text-base font-semibold text-[#393939]">{role}</div>
            <div className="flex items-center gap-2 text-sm text-[#727272]">
              <span className="tracking-[0.1px]">{duration}</span>
              <span className="text-gray-300">|</span>
              <span className="font-bold text-[#2563eb] text-xs">{days.toUpperCase()}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-100 bg-transparent cursor-pointer transition-all group">
            <img className="w-5 opacity-40 group-hover:opacity-100" src="/fluent-edit-24-regular.svg" alt="Edit" />
          </button>
          <button className="p-2 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-100 bg-transparent cursor-pointer transition-all group">
            <img className="w-5 opacity-40 group-hover:opacity-100" src="/Icon-Log-out.svg" style={{ filter: 'hue-rotate(150deg)' }} alt="Delete" />
          </button>
        </div>
      </div>
      <div className="self-stretch h-[1px] bg-gray-50" />
      <div className="self-stretch text-sm leading-relaxed text-[#727272] line-clamp-3">
        {description}
      </div>
    </div>
  );
};

export default ExperienceCard;
