import { type FunctionComponent } from "react";

export type ProfileTabType = "personal" | "experience" | "certificates" | "cv_docs";

interface ProfileTabsProps {
  activeTab: ProfileTabType;
  onTabChange: (tab: ProfileTabType) => void;
}

const ProfileTabs: FunctionComponent<ProfileTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "personal" as const, label: "Personal Info" },
    { id: "experience" as const, label: "Experience" },
    { id: "certificates" as const, label: "Certificates" },
    { id: "cv_docs" as const, label: "CV & Docs" },
  ];

  return (
    <div className="flex items-center justify-center py-4 px-4 bg-white">
      <div className="shadow-sm rounded-lg border border-[#e9eaeb] overflow-hidden flex">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isLast = index === tabs.length - 1;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`cursor-pointer py-2.5 px-6 text-sm transition-all border-none ${
                isActive 
                  ? "bg-[#f3f3f3] font-bold text-[#212121]" 
                  : "bg-white font-medium text-[#727272] hover:bg-gray-50"
              } ${!isLast ? "border-r border-[#e9eaeb]" : ""}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTabs;
