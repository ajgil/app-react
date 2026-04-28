import type { FC } from "react";
import { useState } from "react";
import SidebarOpen from "../components/SidebarOpen";
import JobCard from "../../../components/common/ui/JobCard";
import { JobFilterCard } from "../../../components/common/ui";
import { Search, ListFilter, Briefcase, Bookmark, Send } from "lucide-react";

const CrewJobsMainView: FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Deckhand",
      shipName: "M/Y Oceanus",
      shipDetails: "65m Motor Yacht",
      description: "Seeking experienced deckhand for busy charter season. Strong water sports skills preferred.",
      tags: ["STCW", "ENG1", "2+ YOE"],
      location: "Monaco",
      date: "Feb 2026",
      salary: "€5,500/mo",
      matchPercentage: 88,
      isSaved: true,
      isApplied: false,
    },
    {
      id: 2,
      title: "Bosun",
      shipName: "M/Y Neptune",
      shipDetails: "72m Motor Yacht",
      description: "Luxury charter yacht seeking experienced Bosun to lead deck team of 4.",
      tags: ["STCW", "ENG1", "5+ YOE"],
      location: "Monaco",
      date: "Feb 2026",
      salary: "€5,500/mo",
      matchPercentage: 88,
      isSaved: false,
      isApplied: true,
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fff] flex overflow-x-hidden leading-[normal] tracking-[normal] text-left text-base text-[#1849d6] font-[Inter]">
      {/* Sidebar: MASTER RULES - Fixed & 260px */}
      <SidebarOpen className="fixed left-0 top-0 h-full z-50" />

      {/* Content Wrapper: MASTER RULES - Margin 260px */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen">


        <main className="flex-1 p-6">
          <div className="w-full flex flex-col gap-[22px]">
            {/* Page Header */}
            <div className="flex items-center justify-between gap-4 mq1050:flex-wrap">
              <div className="flex flex-col gap-0.5">
                <div className="text-lg font-semibold text-[#393939]">Jobs</div>
                <div className="text-sm text-[#727272]">Find your next position</div>
              </div>

            </div>

            {/* Search and Filter */}
            <div className="flex gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#727272]" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#e6e6e6] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#e6e6e6] text-sm font-semibold transition-all cursor-pointer ${showFilters ? "bg-[#f4f4f4] text-[#1849d6] border-[#1849d6]" : "bg-white text-[#212121] hover:bg-gray-50"
                  }`}
              >
                <ListFilter size={20} />
                Filter
              </button>
            </div>

            {/* Filter Card */}
            {showFilters && (
              <JobFilterCard
                onApply={(filters) => {
                  console.log("Applied filters:", filters);
                  // setShowFilters(false);
                }}
                onClear={() => {
                  console.log("Cleared filters");
                }}
              />
            )}

            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border-none ${activeTab === "all" ? "bg-[#f4f4f4] text-[#212121]" : "bg-transparent text-[#727272] hover:bg-gray-50"
                  }`}
              >
                <Briefcase size={18} className={activeTab === "all" ? "text-[#212121]" : "text-[#727272]"} />
                All Jobs <span className="text-xs opacity-60">8</span>
              </button>
              <button
                onClick={() => setActiveTab("saved")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border-none ${activeTab === "saved" ? "bg-[#f4f4f4] text-[#212121]" : "bg-transparent text-[#727272] hover:bg-gray-50"
                  }`}
              >
                <Bookmark size={18} className={activeTab === "saved" ? "text-[#212121]" : "text-[#727272]"} />
                Saved <span className="text-xs opacity-60">2</span>
              </button>
              <button
                onClick={() => setActiveTab("applied")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer border-none ${activeTab === "applied" ? "bg-[#f4f4f4] text-[#212121]" : "bg-transparent text-[#727272] hover:bg-gray-50"
                  }`}
              >
                <Send size={18} className={activeTab === "applied" ? "text-[#212121]" : "text-[#727272]"} />
                Applied <span className="text-xs opacity-60">3</span>
              </button>
            </div>

            {/* Job List */}
            <div className="flex flex-col gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CrewJobsMainView;
