import React from "react";

export interface UpgradeCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onUpgrade?: () => void;
  gradientFrom?: string;
  gradientTo?: string;
}

export const UpgradeCard: React.FC<UpgradeCardProps> = ({
  title = "Upgrade to Pro",
  description = "Unlock unlimited projects, advanced AI features, and priority support.",
  buttonText = "Upgrade Now",
  onUpgrade,
  gradientFrom = "from-primarysource",
  gradientTo = "to-primary-700",
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-xl p-5 text-white shadow-md`}
    >
      <p className="text-[14px] font-semibold mb-1">{title}</p>
      <p className="text-[12px] text-white/80 mb-4">{description}</p>
      <button
        onClick={onUpgrade}
        className="w-full py-2 bg-white text-primarysource text-[13px] font-semibold rounded-lg hover:bg-primary-50 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default UpgradeCard;
