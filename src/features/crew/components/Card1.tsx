import type { FunctionComponent } from "react";

export type Card1Type = {
  className?: string;
  chiefStewardess?: string;
  mYSerenity?: string;
  match?: string;
  basillocationOutline?: string;
  monaco?: string;
  feb2026?: string;
  solarwalletOutline?: string;
  mo?: string;
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  chiefStewardess,
  mYSerenity,
  match,
  basillocationOutline,
  monaco,
  feb2026,
  solarwalletOutline,
  mo,
}) => {
  return (
    <div
      className={`self-stretch shadow-[2px_2px_8px_1px_rgba(33,_33,_33,_0.08)] rounded-xl bg-[#fff] border-[#f3f3f3] border-solid border-[1px] flex flex-col items-start py-[26px] px-[27px] text-left text-base text-[#393939] font-body-lg ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-4">
        <div className="self-stretch flex items-start justify-between gap-5 mq450:flex-wrap mq450:gap-5">
          <div className="flex flex-col items-start gap-0.5">
            <div className="self-stretch flex flex-col items-start">
              <div className="relative leading-[22px] font-semibold">
                {chiefStewardess}
              </div>
            </div>
            <div className="relative text-sm tracking-[0.25px] leading-5 text-[#727272]">
              {mYSerenity}
            </div>
          </div>
          <div className="rounded-[50px] bg-[rgba(225,167,19,0.12)] flex items-center justify-center py-1 px-2.5 gap-0.5 text-center text-xs text-[#e1a613]">
            <img
              className="w-[16px] relative max-h-full"
              loading="lazy"
              alt=""
              src="/game-icons-fire.svg"
            />
            <div className="relative tracking-[0.5px] leading-4 font-medium">
              {match}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-[#727272] mq450:flex-wrap">
          <div className="flex items-center gap-1.5">
            <img
              className="w-[16px] relative max-h-full"
              loading="lazy"
              alt=""
              src={basillocationOutline}
            />
            <div className="relative tracking-[0.25px] leading-5">{monaco}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <img
              className="w-[16px] relative max-h-full"
              loading="lazy"
              alt=""
              src="/basil-calendar-outline.svg"
            />
            <div className="relative tracking-[0.25px] leading-5">
              {feb2026}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <img
              className="w-[16px] relative max-h-full"
              loading="lazy"
              alt=""
              src={solarwalletOutline}
            />
            <div className="relative tracking-[0.25px] leading-5">{mo}</div>
          </div>
        </div>
        <div className="rounded-[50px] bg-[#fff] border-[#e6e6e6] border-solid border-[1px] flex flex-col items-center justify-center py-0.5 px-[9px] text-center text-xs text-[#212121]">
          <div className="relative tracking-[0.5px] leading-4 font-medium">
            Permanent
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
