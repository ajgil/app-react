import { type FunctionComponent } from "react";

export type SidebarOpenType = {
  className?: string;
};

const SidebarOpen: FunctionComponent<SidebarOpenType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[260px] bg-[#fff] border-[#ddd] border-solid border-r-[1px] box-border flex flex-col items-start pt-4 px-[23px] pb-6 gap-4 text-left text-[10px] text-[#727272] font-[Inter] mq1050:hidden ${className}`}
    >
      <div className="w-[197px] flex items-start py-[5.5px] px-0 box-border gap-4 text-2xl text-[#062046]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[33px] w-[26px] relative">
          <img
            className="absolute h-[99.7%] w-[59.62%] top-[0%] right-[0%] bottom-[0.3%] left-[40.38%] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/Group-151.svg"
          />
          <div className="absolute h-full w-[38.46%] top-[0%] right-[61.54%] bottom-[0%] left-[0%] bg-[#2563eb]" />
        </button>
        <div className="flex flex-col items-start pt-[3.3px] px-0 pb-0">
          <h3 className="m-0 w-[67px] h-[24px] relative text-[length:inherit] leading-6 font-bold font-[inherit] inline-block mq450:text-[19px] mq450:leading-[19px]">
            Maria
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start gap-6">
        <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
        <div className="self-stretch flex flex-col items-start gap-2">
          <div className="self-stretch flex items-start py-0 px-[11px]">
            <div className="relative tracking-[0.4px] leading-3 uppercase font-medium">
              Main
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[#dbeafe] self-stretch rounded-lg flex items-center gap-3 hover:bg-[#c2d1e6]">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-[20px] w-[20px] relative"
              alt=""
              src="/Icon-Home-simple-door.svg"
            />
            <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#212121] text-left">
              Dashboard
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] h-[20px] w-[20px] relative"
              alt=""
              src="/Icon-User-1.svg"
            />
            <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
              Profile
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[20px] relative max-h-full"
              alt=""
              src="/hugeicons-job-search.svg"
            />
            <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
              Jobs
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[20px] relative max-h-full"
              alt=""
              src="/mynaui-map.svg"
            />
            <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
              Map
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
            <img
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[20px] relative max-h-full"
              alt=""
              src="/iconoir-message.svg"
            />
            <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
              Messages
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
      <div className="self-stretch flex-1 flex flex-col items-start gap-2">
        <div className="self-stretch flex items-start py-0 px-3">
          <div className="relative tracking-[0.4px] leading-3 uppercase font-medium">
            Settings
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] h-[20px] w-[20px] relative"
            alt=""
            src="/Icon-Settings.svg"
          />
          <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
            Settings
          </div>
        </button>
      </div>
      <div className="self-stretch rounded-lg [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] flex items-center py-2.5 px-3 gap-3 text-sm text-[#fff]">
        <img
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[24px] relative max-h-full"
          alt=""
          src="/si-ai-alt-1-line.svg"
        />
        <div className="flex-1 flex flex-col items-start">
          <div className="self-stretch relative tracking-[-0.02em] leading-5 font-medium">
            Ask Maria
          </div>
          <div className="relative text-xs leading-[14px] font-body-lg text-[#ddd]">
            AI Assistant
          </div>
        </div>
      </div>
      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
      <div className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-start">
        <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] self-stretch rounded-lg flex items-center gap-3">
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] h-[20px] w-[20px] relative"
            alt=""
            src="/Icon-Log-out.svg"
          />
          <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#ed131c] text-left">
            Logout Account
          </div>
        </button>
      </div>
    </section>
  );
};

export default SidebarOpen;
