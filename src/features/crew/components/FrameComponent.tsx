import type { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center pt-4 pb-0 pl-6 pr-[60px] gap-2.5 text-left text-[22px] text-[#0a0e15] font-body-lg lg:pr-[30px] lg:box-border ${className}`}
    >
      <div className="self-stretch flex items-center justify-between">
        <div className="flex flex-col items-start gap-0.5">
          <div className="self-stretch flex flex-col items-start">
            <h3 className="m-0 relative text-[length:inherit] leading-7 font-medium font-[inherit] mq450:text-lg mq450:leading-[22px]">
              Welcome back, John
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start text-sm text-[#6b7280]">
            <div className="relative tracking-[0.25px] leading-5">
              Here's what's happening with your profile and job search.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
    </div>
  );
};

export default FrameComponent;
