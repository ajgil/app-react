import type { FC } from "react";
import SidebarOpen from "../components/SidebarOpen";
import FrameComponent from "../components/FrameComponent";
import Cards from "../components/Cards";
import Card1 from "../components/Card1";

const CrewDashboardAvailableNow: FC = () => {
  return (
    <div className="w-full relative bg-[#fff] overflow-hidden flex items-start leading-[normal] tracking-[normal] text-left text-base text-[#1849d6] font-[Inter] lg:pl-5 lg:pr-5 lg:box-border">
      <div className="h-[24px] hidden items-center gap-1.5">
        <div className="relative leading-[22px] hidden">Text link</div>
        <div className="relative leading-[22px] font-semibold text-[#1c1c1c] hidden">
          Value
        </div>
        <div className="h-[24px] w-[24px] relative overflow-hidden shrink-0 hidden">
          <img
            className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/Vector.svg"
          />
        </div>
        <div className="relative overflow-hidden">
          <img
            className="absolute h-[55%] w-[30%] top-[22.5%] right-[57.73%] bottom-[22.5%] left-[12.27%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/Vector1.svg"
          />
        </div>
        <div className="hidden items-center justify-center text-center text-xs">
          <div className="bg-[#e7ecfc] flex items-center justify-center py-0.5 px-1.5 gap-0.5">
            <div className="h-[16px] w-[16px] relative overflow-hidden shrink-0 hidden">
              <img
                className="absolute h-[83.13%] w-[83.13%] top-[8.13%] right-[8.75%] bottom-[8.75%] left-[8.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/Vector2.svg"
              />
            </div>
            <div className="relative leading-[18px] font-semibold shrink-0">
              Badges
            </div>
            <div className="h-[16px] w-[16px] relative overflow-hidden shrink-0 hidden">
              <img
                className="absolute h-[83.13%] w-[83.13%] top-[8.13%] right-[8.75%] bottom-[8.75%] left-[8.13%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/Vector2.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[20px] w-[33.3px] relative hidden">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/Background.svg"
          />
          <img
            className="absolute h-[86.5%] w-[51.95%] top-[6.5%] right-[3.9%] bottom-[7%] left-[44.14%] shadow-[0px_3px_12px_rgba(33,_33,_33,_0.04),_0px_3px_15px_rgba(33,_33,_33,_0.1)] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/Knob.svg"
          />
        </div>
      </div>
      <div className="h-[1px] w-[673px] relative hidden max-w-full">
        <div className="absolute w-full top-[100%] right-[0%] left-[0%] border-[#efefef] border-solid border-t-[1px] box-border h-0" />
      </div>
      <SidebarOpen />
      <main className="flex-1 flex flex-col items-start gap-[26px] max-w-[calc(100%_-_260px)] lg:max-w-full">
        <FrameComponent />
        <section className="w-[1144px] flex items-start py-0 px-6 box-border max-w-full">
          <Cards />
        </section>
        <section className="w-[1144px] flex items-start py-0 px-6 box-border max-w-full">
          <div className="flex-1 flex items-start gap-6 max-w-full lg:flex-wrap">
            <section className="flex-1 flex flex-col items-start gap-8 min-w-[494px] max-w-full text-left text-sm text-[#393939] font-body-lg sm:gap-4 sm:min-w-full">
              <div className="self-stretch h-[200px] rounded-xl bg-[rgba(41,163,122,0.08)] border-[rgba(41,163,122,0.5)] border-solid border-[1px] box-border flex flex-col items-start py-[26px] px-[27px]">
                <div className="self-stretch flex flex-col items-start gap-5">
                  <div className="self-stretch flex items-center justify-between gap-5 text-lg sm:flex-wrap sm:gap-5">
                    <div className="flex items-center gap-4">
                      <img
                        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[48px] relative rounded-lg max-h-full"
                        alt=""
                        src="/gg-check-o.svg"
                      />
                      <div className="flex flex-col items-start gap-0.5">
                        <div className="self-stretch flex flex-col items-start">
                          <div className="relative leading-6 font-semibold">
                            Available Now
                          </div>
                        </div>
                        <div className="self-stretch flex items-center gap-1 text-sm text-[#29a37a]">
                          <img
                            className="w-[16px] relative max-h-full"
                            alt=""
                            src="/proicons-clock.svg"
                          />
                          <div className="relative tracking-[0.25px] leading-5">
                            Expires in 15 days
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[40px] relative max-h-full"
                      alt=""
                      src="/ion-switch.svg"
                    />
                  </div>
                  <div className="self-stretch relative tracking-[0.25px] leading-5 text-[#727272]">
                    You're visible to recruiters and captains. Status will
                    auto-hide on 3 Feb 2026.
                  </div>
                  <div className="flex items-center gap-3 text-center text-[#29a37a] sm:flex-wrap">
                    <div className="rounded-[50px] bg-[rgba(41,163,122,0.12)] flex flex-col items-center justify-center py-2 px-3">
                      <div className="w-full flex items-center gap-2 max-w-full">
                        <div className="h-[8px] w-[8px] relative rounded-[50%] bg-[#29a37a]" />
                        <div className="relative tracking-[0.1px] leading-5 font-medium">
                          Status: Visible
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-2 px-3 bg-[#fff] rounded-[50px] flex flex-col items-center justify-center">
                      <div className="w-full flex items-center gap-2 max-w-full">
                        <img
                          className="w-[16px] relative max-h-full"
                          alt=""
                          src="/basil-location-outline.svg"
                        />
                        <div className="relative text-sm tracking-[0.1px] leading-5 font-medium font-body-lg text-[#212121] text-center">
                          Mediterranean
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start gap-4 text-xl text-[#212121]">
                <div className="self-stretch flex items-center justify-between gap-5 sm:flex-wrap sm:gap-5">
                  <div className="flex items-center gap-[11px]">
                    <img
                      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[24px] relative max-h-full"
                      alt=""
                      src="/si-ai-alt-1-line.svg"
                    />
                    <h3 className="m-0 relative text-[length:inherit] leading-6 font-semibold font-[inherit] sm:text-base sm:leading-[19px]">
                      AI-Suggested Jobs
                    </h3>
                  </div>
                  <button className="cursor-pointer [border:none] py-1.5 px-3 bg-[transparent] rounded-lg flex items-center gap-2">
                    <div className="relative text-sm tracking-[0.25px] leading-5 font-body-lg text-[#3a364f] text-left">
                      View All
                    </div>
                    <img
                      className="w-[16px] relative max-h-full object-contain"
                      alt=""
                      src="/ic-twotone-arrow-back.svg"
                    />
                  </button>
                </div>
                <div className="self-stretch flex flex-col items-start gap-4">
                  <Card1
                    chiefStewardess="Chief Stewardess"
                    mYSerenity="M/Y Serenity"
                    match="95% match"
                    basillocationOutline="/basil-location-outline.svg"
                    monaco="Monaco"
                    feb2026="Feb 2026"
                    solarwalletOutline="/solar-wallet-outline.svg"
                    mo="€5,500/mo"
                  />
                  <Card1
                    chiefStewardess="Deckhand"
                    mYSerenity="S/Y Ocean Spirit"
                    match="88% match"
                    basillocationOutline="/basil-location-outline.svg"
                    monaco="Palma de Mallorca"
                    feb2026="Mar 2026"
                    solarwalletOutline="/solar-wallet-outline.svg"
                    mo="€3,200/mo"
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col items-start gap-7 text-left text-lg text-[#393939] font-body-lg lg:flex-1">
              <div className="self-stretch h-[306px] shadow-[2px_2px_8px_1px_rgba(33,_33,_33,_0.08)] rounded-xl bg-[#fff] border-[#f3f3f3] border-solid border-[1px] box-border flex flex-col items-start py-[26px] px-[27px] gap-6">
                <div className="w-[256px] flex items-center justify-between gap-5">
                  <div className="relative leading-6 font-semibold">
                    Profile Completion
                  </div>
                  <h3 className="m-0 relative text-2xl leading-7 font-semibold font-[inherit] sm:text-[19px] sm:leading-[22px]">
                    60%
                  </h3>
                </div>
                <div className="w-[256px] rounded-[99px] bg-[#f4f3f9] overflow-hidden flex items-start">
                  <div className="h-[6px] w-[163px] relative [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)]" />
                </div>
                <div className="w-[116px] flex flex-col items-start gap-3 text-base text-[#5e5e5e]">
                  <div className="flex items-center gap-[7px]">
                    <img
                      className="w-[20px] relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/mdi-tick-circle.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-6">
                      Basic Info
                    </div>
                  </div>
                  <div className="self-stretch flex items-center gap-2">
                    <img
                      className="w-[20px] relative max-h-full"
                      loading="lazy"
                      alt=""
                      src="/mdi-tick-circle.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-6">
                      Experience
                    </div>
                  </div>
                  <div className="self-stretch flex items-center gap-[7px]">
                    <img
                      className="w-[20px] relative max-h-full shrink-0"
                      loading="lazy"
                      alt=""
                      src="/mdi-tick-circle.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-6 shrink-0">
                      Certificates
                    </div>
                  </div>
                  <div className="self-stretch flex items-center gap-2">
                    <img
                      className="w-[20px] relative max-h-full shrink-0"
                      loading="lazy"
                      alt=""
                      src="/material-symbols-light-circle-outline.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-6 shrink-0">
                      Documents
                    </div>
                  </div>
                  <div className="self-stretch flex items-center gap-2">
                    <img
                      className="w-[20px] relative max-h-full"
                      alt=""
                      src="/material-symbols-light-circle-outline.svg"
                    />
                    <div className="relative tracking-[0.5px] leading-6">
                      CV Review
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[228px] shadow-[2px_2px_8px_1px_rgba(33,_33,_33,_0.08)] rounded-xl [background:linear-gradient(91.66deg,_#3b82f6,_#1d4ed8)] border-[#f3f3f3] border-solid border-[1px] box-border flex flex-col items-start py-[22px] px-[23px] gap-5 text-[#fff]">
                <div className="flex items-center gap-3">
                  <img
                    className="w-[40px] relative rounded-lg max-h-full"
                    loading="lazy"
                    alt=""
                    src="/si-ai-alt-1-line.svg"
                  />
                  <div className="flex flex-col items-start">
                    <div className="self-stretch flex flex-col items-start">
                      <div className="relative leading-6 font-semibold">
                        Maria AI Advisor
                      </div>
                    </div>
                    <div className="relative text-xs tracking-[0.4px] leading-4 text-[#dedbec]">
                      Get personalized guidance
                    </div>
                  </div>
                </div>
                <div className="w-[264px] h-[60px] relative text-sm tracking-[0.25px] leading-5 text-[#f3f3f3] flex items-center">
                  I've reviewed your profile and have some suggestions to
                  increase your match rate by 15%.
                </div>
                <button className="cursor-pointer [border:none] py-2.5 px-10 bg-[#1e40af] w-[264px] shadow-[0px_8px_16px_rgba(143,_149,_178,_0.15)] rounded-lg flex items-center justify-center box-border hover:bg-[#4566d6]">
                  <div className="relative text-sm tracking-[0.1px] leading-5 font-medium font-body-lg text-[#fff] text-left">
                    Chat with Maria
                  </div>
                </button>
              </div>
              <div className="self-stretch h-[196px] shadow-[2px_2px_8px_1px_rgba(33,_33,_33,_0.08)] rounded-xl bg-[#fff] border-[#f3f3f3] border-solid border-[1px] box-border flex items-start py-[26px] px-7">
                <div className="w-[240px] flex flex-col items-start gap-5">
                  <div className="self-stretch relative leading-6 font-semibold">
                    Upcoming
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-4 text-sm">
                    <div className="self-stretch flex items-center gap-3">
                      <img
                        className="w-[40px] relative rounded-lg max-h-full"
                        loading="lazy"
                        alt=""
                        src="/Frame-1321318549.svg"
                      />
                      <div className="flex flex-col items-start gap-0.5">
                        <div className="self-stretch flex flex-col items-start">
                          <div className="relative tracking-[0.1px] leading-5 font-medium">
                            Interview with M/Y Serenity
                          </div>
                        </div>
                        <div className="relative text-xs tracking-[0.4px] leading-4 text-[#727272]">
                          Tomorrow, 2:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40px] relative rounded-lg max-h-full"
                        loading="lazy"
                        alt=""
                        src="/Frame-1321318549.svg"
                      />
                      <div className="flex flex-col items-start gap-0.5">
                        <div className="self-stretch flex flex-col items-start">
                          <div className="relative tracking-[0.1px] leading-5 font-medium">
                            STCW expires soon
                          </div>
                        </div>
                        <div className="relative text-xs tracking-[0.4px] leading-4 text-[#727272]">
                          Renew by Feb 28, 2026
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CrewDashboardAvailableNow;
