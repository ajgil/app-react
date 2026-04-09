import type { FunctionComponent } from "react";

export type CardType = {
  className?: string;
  prop?: string;
  icon?: string;
  newMatches?: string;
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  prop,
  icon,
  newMatches,
}) => {
  return (
    <div
      className={`flex-1 shadow-[0px_2px_12px_rgba(33,_33,_33,_0.02),_0px_1px_11px_1px_rgba(33,_33,_33,_0.04)] rounded-xl bg-[#fff] border-[#ddd] border-solid border-[0.5px] box-border flex flex-col items-start p-[23px] min-w-[105px] text-left text-[32px] text-[#212121] font-body-lg ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-1">
        <div className="self-stretch flex items-center justify-between gap-5">
          <h1 className="m-0 relative text-[length:inherit] leading-10 font-semibold font-[inherit] mq1050:text-[26px] mq1050:leading-8 mq450:text-[19px] mq450:leading-6">
            {prop}
          </h1>
          <img
            className="cursor-pointer [border:none] p-0 bg-[transparent] h-[40px] w-[40px] relative rounded-lg"
            alt=""
            src={icon}
          />
        </div>
        <div className="self-stretch relative text-sm tracking-[0.25px] leading-5 text-[#3a364f]">
          {newMatches}
        </div>
      </div>
    </div>
  );
};

export default Card;
