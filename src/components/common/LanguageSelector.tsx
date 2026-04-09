import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LanguageOption {
  code: string;
  name: string;
  flagUrl: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English (US)", flagUrl: "https://flagcdn.com/w40/us.png" },
  { code: "es", name: "Español", flagUrl: "https://flagcdn.com/w40/es.png" },
  { code: "fr", name: "Français", flagUrl: "https://flagcdn.com/w40/fr.png" },
];

export const LanguageSelector: React.FC = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 items-center gap-3 px-4 py-2 relative bg-neutral-50 border border-neutral-100/50 hover:bg-neutral-100 rounded-xl transition-all group cursor-pointer"
      >
        <img
          className="w-5 h-3.5 rounded-[2px] object-cover shadow-sm"
          alt={`${selected.name} flag`}
          src={selected.flagUrl}
        />
        <div className="font-heading-xs text-textdark font-medium">
          {selected.name}
        </div>
        <ChevronDown 
          size={18} 
          className={`text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-[180px] bg-white border border-neutral-100 rounded-xl shadow-xl z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelected(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-primary-50 transition-colors ${
                  selected.code === lang.code ? "bg-primary-50/50 text-primary-600" : "text-textdark"
                }`}
              >
                <img
                  className="w-5 h-3.5 rounded-[2px] object-cover"
                  alt={`${lang.name} flag`}
                  src={lang.flagUrl}
                />
                <span className="font-body-md font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
