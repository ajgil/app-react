import { type FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const location = useLocation();
  const isProfile = location.pathname.includes("/profile");

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center pt-4 pb-0 px-6 gap-2.5 text-left text-[22px] text-[#0a0e15] font-body-lg lg:box-border ${className}`}
    >
      <div className="self-stretch flex items-center justify-between">
        <div className="flex flex-col items-start gap-0.5">
          <div className="self-stretch flex flex-col items-start">
            <h3 className="m-0 relative text-2xl leading-7 font-medium mq450:text-lg mq450:leading-[22px]">
              {isProfile ? "Profile Overview" : "Welcome back, John"}
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start text-sm text-[#6b7280]">
            <div className="relative tracking-[0.25px] leading-5">
              {isProfile 
                ? "Manage your professional information and documents" 
                : "Here's what's happening with your profile and job search."}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
    </div>
  );
};

export default FrameComponent;
