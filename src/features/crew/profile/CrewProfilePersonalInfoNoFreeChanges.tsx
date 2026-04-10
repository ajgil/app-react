import { type FunctionComponent, useState } from "react";
import SidebarOpen from "../components/SidebarOpen";
import InputField from "../components/InputField";
import FrameComponent from "../components/FrameComponent";
import ProfileTabs, { type ProfileTabType } from "../components/ProfileTabs";
import ExperienceTab from "../components/ExperienceTab";

const CrewProfilePersonalInfoNoFreeChanges: FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabType>("personal");

  return (
    <div className="w-full min-h-screen bg-[#fff] flex overflow-x-hidden leading-[normal] tracking-[normal] text-left text-base text-[#1849d6] font-[Inter]">
      {/* Sidebar: MASTER RULES - Fixed & 260px */}
      <SidebarOpen className="fixed left-0 top-0 h-full z-50" />

      {/* Content Wrapper: MASTER RULES - Margin 260px */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
        <FrameComponent />

        <main className="flex-1 p-6">
          <div className="w-full flex flex-col gap-[22px]">

            {/* Profile Hero Card (Common to all tabs) */}
            <section className="self-stretch flex items-start box-border max-w-full text-left text-xl text-[#252b37] font-body-lg">
              <div className="flex-1 shadow-[2px_2px_12px_rgba(10,_20,_57,_0.04)] rounded-2xl bg-[#fff] border-[#e6e6e6] border-solid border-[1px] box-border flex items-start flex-wrap content-start py-[26px] pl-[27px] pr-[22px] gap-6 min-h-[120px] max-w-full">
                <div className="flex items-start justify-end pt-8 pb-0 pl-8 pr-0 relative isolate">
                  <img
                    className="w-full absolute !m-0 h-full top-0 right-0 bottom-0 left-0 shadow-[0px_12px_16px_-4px_rgba(10,_13,_18,_0.08),_0px_4px_6px_-2px_rgba(10,_13,_18,_0.03)] rounded-[200px] max-w-full overflow-hidden max-h-full object-cover shrink-0"
                    alt=""
                    src="/Avatar-profile-photo@2x.png"
                  />
                  <img
                    className="cursor-pointer [border:none] p-0 bg-transparent h-8 w-8 rounded-full z-[1] shrink-0"
                    alt=""
                    src="/Frame-1321318590.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start pt-1 px-0 pb-0 box-border min-w-[300px] max-w-full">
                  <div className="self-stretch flex items-start justify-between gap-5 mq750:flex-wrap">
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="m-0 relative text-xl leading-6 font-semibold text-[#212121] mq450:text-base mq450:leading-[19px]">
                        Jane Smith
                      </h3>
                      <nav className="m-0 flex items-center gap-[11.5px] text-left text-base text-[#717680] font-body-lg">
                        <div className="relative tracking-[0.15px] leading-6 font-medium">Deckhand</div>
                        <div className="relative text-lg tracking-[0.3px]">•</div>
                        <div className="relative tracking-[0.15px] leading-6 font-medium">3 years experience</div>
                      </nav>
                    </div>
                    <div className="flex items-center gap-2 mq450:flex-wrap">
                      <div className="py-1 px-3 bg-[#f4f3f9] rounded-2xl flex items-center gap-1">
                        <img className="w-4" src="/Anchor.svg" />
                        <span className="text-sm font-medium text-[#746d96]">600 Sea Days</span>
                      </div>
                      <div className="py-1 px-3 bg-[#eff6ff] rounded-2xl flex items-center gap-1">
                        <img className="w-4" src="/basil-location-outline.svg" />
                        <span className="text-sm font-medium text-[#2563eb]">Antibes, France</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tabs & Content Area */}
            <section className="self-stretch flex flex-col gap-6 max-w-full">
              <div className="shadow-sm rounded-xl bg-white border border-[#e0f2fe] overflow-hidden flex flex-col min-h-[500px]">
                
                {/* Reusable Tabs Component */}
                <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Tab Content Rendering */}
                <div className="flex-1">
                  {activeTab === "personal" && (
                    <div className="p-6 flex flex-col gap-8 bg-white animate-in fade-in duration-300">
                      <div className="flex items-center justify-between gap-4 mq1050:flex-wrap">
                        <div className="flex flex-col gap-0.5">
                          <div className="text-lg font-semibold text-[#393939]">Personal Information</div>
                          <div className="text-sm text-[#727272]">Update your personal details and contact information</div>
                        </div>
                        <button className="py-3 px-6 bg-white border border-[#3b82f6] shadow-sm rounded-lg flex items-center gap-3 cursor-pointer hover:bg-blue-50">
                          <img className="w-5" src="/fluent-edit-24-regular.svg" />
                          <span className="text-base font-semibold text-transparent bg-clip-text [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Edit Profile</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mq750:grid-cols-1">
                        <InputField label="First Name" placeholder="Jane" />
                        <InputField label="Last Name" placeholder="Smith" />
                        
                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Email Address</label>
                          <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px]">
                            <input className="w-full bg-transparent border-none outline-none text-[#868686]" defaultValue="jane.smith@certcheck.in" readOnly />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Phone Number</label>
                          <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px]">
                            <input className="w-full bg-transparent border-none outline-none text-[#868686]" defaultValue="+1 (555) 123-4567" readOnly />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Nationality</label>
                          <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px]">
                            <input className="w-full bg-transparent border-none outline-none text-[#868686]" defaultValue="British" readOnly />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Date of Birth</label>
                          <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px]">
                            <input className="w-full bg-transparent border-none outline-none text-[#868686]" defaultValue="15-06-1990" readOnly />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Current Location</label>
                          <div className="flex flex-col gap-1">
                            <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px] flex items-center justify-between gap-2">
                              <span className="text-[#868686]">Antibes, France</span>
                              <button className="py-1 px-3 bg-[#dbeafe] text-[#2563eb] text-sm font-medium rounded-md border-none cursor-pointer">Change</button>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-[#e1a613]">
                              <img className="w-4" src="/material-symbols-light-crown-outline.svg" />
                              <span>Upgrade to change location</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5 overflow-hidden">
                          <label className="text-sm font-medium text-[#212121]">Preferred Position</label>
                          <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] py-2 px-[13px]">
                            <input className="w-full bg-transparent border-none outline-none text-[#868686]" defaultValue="Deckhand" readOnly />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 pt-4">
                        <div className="text-lg font-semibold text-[#393939]">Professional Summary</div>
                        <div className="shadow-sm rounded-lg bg-[#fafafa] border border-[#f3f3f3] p-4 text-sm text-[#868686] leading-6">
                          Passionate and dedicated deckhand with 3+ years experience on motor and sailing yachts. Strong work ethic, excellent team player, and committed to delivering exceptional guest experiences. Currently seeking a permanent position on a 50m+ yacht.
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "experience" && <ExperienceTab />}

                  {activeTab !== "personal" && activeTab !== "experience" && (
                    <div className="p-20 flex flex-col items-center justify-center text-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                        <img className="w-8 opacity-40" src="/Icon-User-1.svg" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="m-0 text-xl font-semibold text-[#212121]">Section: {activeTab.toUpperCase()}</h3>
                        <p className="m-0 text-sm text-[#727272]">Waiting for component code...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrewProfilePersonalInfoNoFreeChanges;
