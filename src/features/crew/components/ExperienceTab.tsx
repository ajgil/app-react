import { type FunctionComponent } from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceTab: FunctionComponent = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-300">
      {/* Tab Header */}
      <div className="w-full flex items-center justify-between p-6 gap-4 border-b border-[#f3f3f3]">
        <div className="flex flex-col gap-0.5">
          <h2 className="m-0 text-xl font-semibold text-[#393939]">Sea Experience</h2>
          <div className="text-sm tracking-[0.25px] text-[#727272]">
            Total: <span className="font-bold text-[#212121]">600 sea days</span>
          </div>
        </div>
        <button className="cursor-pointer border-none py-3 px-6 bg-white shadow-sm rounded-lg flex items-center gap-4 hover:bg-gray-50 border border-[#e6e6e6]">
          <img className="w-5" src="/tdesign-add.svg" alt="" />
          <span className="text-base font-semibold text-transparent bg-clip-text [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Add Experience
          </span>
        </button>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-6 p-6 pt-2">
        <ExperienceCard
          vesselName="M/Y Aurora"
          vesselType="Motor Yacht"
          role="Deckhand"
          duration="Apr 2022 - Oct 2023"
          days="420 days"
          description="55m Feadship. Mediterranean and Caribbean seasons. Responsible for deck maintenance, tender operations, and guest services."
        />
        <ExperienceCard
          vesselName="S/Y Zephyr"
          vesselType="Sailing Yacht"
          role="Junior Deckhand"
          duration="Jun 2021 - Mar 2022"
          days="180 days"
          description="42m sailing yacht. Atlantic crossing and Mediterranean cruising. Learned sail handling and racing protocols."
        />
      </div>
    </div>
  );
};

export default ExperienceTab;
