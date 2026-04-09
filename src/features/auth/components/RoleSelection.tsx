import React, { useState } from "react";

// Nota: Asegúrate de que estos assets existan o usa iconos de librería
// import image from "./image.svg";
// import vector from "./vector.svg";

interface RoleSelectionProps {
  onRoleSelected: (role: "crew" | "employer") => void;
}

const options = [
  {
    id: "crew",
    title: "Crew Member",
    description: "Looking for yacht positions",
    // icon: vector,
    iconWidth: "w-[18px]",
    alt: "Crew icon",
  },
  {
    id: "employer",
    title: "Captain / Recruiter",
    description: "Hiring yacht crew",
    // icon: image,
    iconWidth: "w-[19.5px]",
    alt: "Employer icon",
  },
];

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelected }) => {
  const [selected, setSelected] = useState<"crew" | "employer" | null>(null);

  const handleContinue = () => {
    if (selected) {
      onRoleSelected(selected);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[520px] items-start gap-[52px] relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] font-heading-xxl font-bold text-textdark text-[length:var(--heading-xxl-font-size)] tracking-[var(--heading-xxl-letter-spacing)] leading-[var(--heading-xxl-line-height)] whitespace-nowrap">
            How will you use Maria?
          </h1>

          <p className="relative w-fit font-title-md font-medium text-neutral-500 text-[length:var(--title-md-font-size)] tracking-[var(--title-md-letter-spacing)] leading-[var(--title-md-line-height)] whitespace-nowrap">
            This will personalize your experience
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id as "crew" | "employer")}
              className={`relative self-stretch w-full h-[82px] bg-white rounded-xl overflow-hidden border border-solid cursor-pointer transition-all ${
                selected === option.id
                  ? "border-primarysource ring-1 ring-primary-100"
                  : "border-border-100 hover:border-neutral-300"
              }`}
            >
              <div className="inline-flex flex-col items-start gap-1 absolute top-[50%] -translate-y-1/2 left-[88px]">
                <div className="relative w-fit font-heading-sm font-bold text-textdark text-[length:var(--heading-sm-font-size)] tracking-[var(--heading-sm-letter-spacing)] leading-[var(--heading-sm-line-height)] whitespace-nowrap">
                  {option.title}
                </div>

                <div className="relative w-fit font-title-sm font-medium text-neutral-500 text-[length:var(--title-sm-font-size)] tracking-[var(--title-sm-letter-spacing)] leading-[var(--title-sm-line-height)] whitespace-nowrap">
                  {option.description}
                </div>
              </div>

              <div className="absolute top-[50%] -translate-y-1/2 left-[18px] w-[50px] h-[50px] flex items-center justify-center bg-neutral-100 rounded-md overflow-hidden aspect-[1]">
                <div className="h-6 w-6 flex items-center justify-center">
                  {/* <img
                    className={`flex-1 ${option.iconWidth}`}
                    alt={option.alt}
                    src={option.icon}
                  /> */}
                  <div className={`w-5 h-5 rounded-full border-2 ${selected === option.id ? 'border-primarysource bg-primary-50' : 'border-neutral-300'}`} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className={`flex items-center justify-center gap-4 py-3 relative self-stretch w-full rounded-lg shadow-sm transition-all font-bold ${
            selected
              ? "bg-primarysource hover:bg-primary-600 text-white cursor-pointer"
              : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
          }`}
        >
          <span className="relative w-fit text-[16px]">
            Continue
          </span>
        </button>
      </div>
    </div>
  );
};
