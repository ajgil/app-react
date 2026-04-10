import type { FC } from "react";
import SidebarOpen from "../components/SidebarOpen";
import FrameComponent from "../components/FrameComponent";
import Cards from "../components/Cards";
import Card1 from "../components/Card1";

const CrewDashboardAvailableNow: FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#fff] flex overflow-x-hidden leading-[normal] tracking-[normal] text-left text-base text-[#1849d6] font-[Inter]">
      <SidebarOpen className="fixed left-0 top-0 h-full z-50" />
      
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <FrameComponent />
        
        <main className="flex-1 p-6">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Row 1: Statistics Cards */}
            <Cards />

            {/* Row 2: Grid 9 / 3 */}
            <div className="grid grid-cols-12 gap-8 w-full">
              {/* Main Content Column - 9 Columns (75%) */}
              <div className="col-span-9 flex flex-col gap-8 mq1050:col-span-12">
                {/* Available Now Card */}
                <div className="self-stretch rounded-xl bg-[rgba(41,163,122,0.08)] border-[rgba(41,163,122,0.5)] border-solid border-[1px] flex flex-col py-[26px] px-[27px]">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-5 text-lg">
                      <div className="flex items-center gap-4">
                        <img className="w-[48px] h-[48px] rounded-lg" alt="" src="/gg-check-o.svg" />
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold text-[#393939]">Available Now</div>
                          <div className="flex items-center gap-1 text-sm text-[#29a37a]">
                            <img className="w-4" src="/proicons-clock.svg" />
                            <span className="tracking-[0.25px]">Expires in 15 days</span>
                          </div>
                        </div>
                      </div>
                      <img className="w-10" src="/ion-switch.svg" />
                    </div>
                    <div className="text-sm font-body-lg text-[#727272] tracking-[0.25px]">
                      You're visible to recruiters and captains. Status will auto-hide on 3 Feb 2026.
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-[rgba(41,163,122,0.12)] py-2 px-3 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#29a37a]" />
                        <span className="text-sm font-medium text-[#29a37a]">Status: Visible</span>
                      </div>
                      <div className="rounded-full bg-[#fff] border border-[#f3f3f3] py-2 px-3 flex items-center gap-2">
                        <img className="w-4" src="/basil-location-outline.svg" />
                        <span className="text-sm font-medium text-[#212121]">Mediterranean</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI-Suggested Jobs Section */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img className="w-6" src="/si-ai-alt-1-line.svg" />
                      <h3 className="m-0 text-xl font-semibold text-[#212121]">AI-Suggested Jobs</h3>
                    </div>
                    <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer">
                      <span className="text-sm text-[#3a364f]">View All</span>
                      <img className="w-4 rotate-180" src="/ic-twotone-arrow-back.svg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Card1 chiefStewardess="Chief Stewardess" mYSerenity="M/Y Serenity" match="95% match" basillocationOutline="/basil-location-outline.svg" monaco="Monaco" feb2026="Feb 2026" solarwalletOutline="/solar-wallet-outline.svg" mo="€5,500/mo" />
                    <Card1 chiefStewardess="Deckhand" mYSerenity="S/Y Ocean Spirit" match="88% match" basillocationOutline="/basil-location-outline.svg" monaco="Palma de Mallorca" feb2026="Mar 2026" solarwalletOutline="/solar-wallet-outline.svg" mo="€3,200/mo" />
                  </div>
                </div>
              </div>

              {/* Right Side Column - 3 Columns (25%) */}
              <div className="col-span-3 flex flex-col gap-7 mq1050:col-span-12">
                {/* 1. Profile Completion */}
                <div className="shadow-md rounded-xl bg-white border border-[#f3f3f3] p-6 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#393939]">Profile Completion</span>
                      <span className="text-lg font-semibold text-[#1d4ed8]">60%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#f4f3f9] overflow-hidden">
                      <div className="h-full w-[60%] [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-[#5e5e5e]">
                    <div className="flex items-center gap-2"><img className="w-4" src="/mdi-tick-circle.svg" />Basic Info</div>
                    <div className="flex items-center gap-2"><img className="w-4" src="/mdi-tick-circle.svg" />Experience</div>
                    <div className="flex items-center gap-2"><img className="w-4" src="/mdi-tick-circle.svg" />Certificates</div>
                    <div className="flex items-center gap-2"><img className="w-4" src="/material-symbols-light-circle-outline.svg" />Documents</div>
                    <div className="flex items-center gap-2"><img className="w-4" src="/material-symbols-light-circle-outline.svg" />CV Review</div>
                  </div>
                </div>

                {/* 2. Maria AI Advisor */}
                <div className="shadow-md rounded-xl [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] p-6 flex flex-col gap-5 text-white">
                  <div className="flex items-center gap-3">
                    <img className="w-8 rounded-lg" src="/si-ai-alt-1-line.svg" />
                    <div>
                      <div className="text-sm font-semibold">Maria AI</div>
                      <div className="text-[10px] text-blue-100">AI Advisor</div>
                    </div>
                  </div>
                  <p className="m-0 text-xs leading-4">I've reviewed your profile and have some suggestions for you...</p>
                  <button className="w-full py-2 bg-[#1e40af] text-white text-xs font-semibold rounded-lg border-none cursor-pointer hover:bg-blue-900">Chat with Maria</button>
                </div>

                {/* 3. Upcoming */}
                <div className="shadow-md rounded-xl bg-white border border-[#f3f3f3] p-6 flex flex-col gap-4">
                  <span className="text-sm font-semibold text-[#393939]">Upcoming</span>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#f4f3f9] flex items-center justify-center">
                      <img className="w-5" src="/Frame-1321318549.svg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Interview</span>
                      <span className="text-[10px] text-[#727272]">Tomorrow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrewDashboardAvailableNow;
