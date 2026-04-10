import { type FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";

export type SidebarOpenType = {
  className?: string;
};

const SidebarOpen: FunctionComponent<SidebarOpenType> = ({
  className = "",
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard/crew",
      icon: "/Icon-Home-simple-door.svg",
    },
    {
      name: "Profile",
      path: "/dashboard/crew/profile",
      icon: "/Icon-User-1.svg",
    },
    {
      name: "Jobs",
      path: "/dashboard/crew/jobs",
      icon: "/hugeicons-job-search.svg",
    },
    {
      name: "Map",
      path: "/dashboard/crew/map",
      icon: "/mynaui-map.svg",
    },
    {
      name: "Messages",
      path: "/dashboard/crew/messages",
      icon: "/iconoir-message.svg",
    },
  ];

  return (
    <section
      className={`w-[260px] bg-[#fff] border-[#ddd] border-solid border-r-[1px] box-border flex flex-col items-start pt-4 px-[23px] pb-6 gap-4 text-left text-[10px] text-[#727272] font-[Inter] mq1050:hidden ${className}`}
    >
      <div className="w-[197px] flex items-start py-[5.5px] px-0 box-border gap-4 text-2xl text-[#062046]">
        <Link to="/dashboard/crew" className="cursor-pointer [border:none] p-0 bg-transparent h-[33px] w-[26px] relative">
          <img
            className="absolute h-[99.7%] w-[59.62%] top-0 right-0 bottom-[0.3%] left-[40.38%] max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/Group-151.svg"
          />
          <div className="absolute h-full w-[38.46%] top-0 right-[61.54%] bottom-0 left-0 bg-[#2563eb]" />
        </Link>
        <div className="flex flex-col items-start pt-[3.3px] px-0 pb-0">
          <h3 className="m-0 w-[67px] h-[24px] relative text-2xl leading-7 font-bold text-[#062046] inline-block mq450:text-[19px] mq450:leading-[19px]">
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

          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`no-underline cursor-pointer [border:none] py-2.5 px-3 self-stretch rounded-lg flex items-center gap-3 transition-colors ${
                  isActive ? "bg-[#dbeafe]" : "bg-transparent hover:bg-[#f6f6f6]"
                }`}
              >
                <img
                  className={`h-[20px] w-[20px] relative ${isActive ? "" : "opacity-60"}`}
                  alt={item.name}
                  src={item.icon}
                />
                <div className={`flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-left ${
                  isActive ? "text-[#212121]" : "text-[#727272]"
                }`}>
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
      
      <div className="self-stretch flex-1 flex flex-col items-start gap-2">
        <div className="self-stretch flex items-start py-0 px-3">
          <div className="relative tracking-[0.4px] leading-3 uppercase font-medium">
            Settings
          </div>
        </div>
        <Link to="/dashboard/crew/settings" className="no-underline cursor-pointer py-2.5 px-3 bg-transparent self-stretch rounded-lg flex items-center gap-3 hover:bg-[#f6f6f6]">
          <img
            className="h-[20px] w-[20px] relative opacity-60"
            alt=""
            src="/Icon-Settings.svg"
          />
          <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#727272] text-left">
            Settings
          </div>
        </Link>
      </div>

      <div className="self-stretch rounded-lg [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] flex items-center py-2.5 px-3 gap-3 text-sm text-[#fff] shadow-sm">
        <img
          className="w-6 relative max-h-full"
          alt=""
          src="/si-ai-alt-1-line.svg"
        />
        <div className="flex-1 flex flex-col items-start">
          <div className="self-stretch relative tracking-[-0.02em] leading-5 font-medium">
            Ask Maria
          </div>
          <div className="relative text-xs leading-[14px] font-body-lg text-blue-100">
            AI Assistant
          </div>
        </div>
      </div>

      <div className="self-stretch h-[2px] relative rounded-sm bg-[#f3f3f3]" />
      
      <button className="cursor-pointer [border:none] py-2.5 px-3 bg-transparent self-stretch rounded-lg flex items-center gap-3 hover:bg-red-50 group">
        <img
          className="h-[20px] w-[20px] relative opacity-60 group-hover:opacity-100"
          alt=""
          src="/Icon-Log-out.svg"
        />
        <div className="flex-1 relative text-sm tracking-[-0.02em] leading-5 font-medium font-[Inter] text-[#ed131c] text-left">
          Logout Account
        </div>
      </button>
    </section>
  );
};

export default SidebarOpen;

