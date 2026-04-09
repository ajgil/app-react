import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { StatsGrid } from "./components/StatsGrid";
import { NewProjectModal } from "./components/NewProjectModal";
import {
  recentProjects,
  statsData,
  activityFeed,
  componentLibrary,
  statusColors,
} from "./constants";

export const DashboardScreen: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectType, setNewProjectType] = useState("Web App");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const tabs = ["All", "In Progress", "Review", "Completed"];

  const filteredProjects = recentProjects.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || p.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-50 text-neutralsource">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          activeNav={activeNav}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          notificationsOpen={notificationsOpen}
          setNotificationsOpen={setNotificationsOpen}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          setShowNewProjectModal={setShowNewProjectModal}
          activityFeed={activityFeed}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <StatsGrid stats={statsData} />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs">
                <div className="flex items-center justify-between px-5 py-4 border-b border-border-100">
                  <h2 className="text-[16px] font-semibold">Recent Projects</h2>
                  <button className="text-[14px] text-primarysource font-medium hover:underline">View All</button>
                </div>
                <div className="flex items-center gap-1 px-5 border-b border-border-100">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-2 text-[13px] font-medium border-b-2 -mb-px transition-colors ${
                        activeTab === tab ? "text-primarysource border-primarysource" : "text-neutral-500 border-transparent hover:text-neutralsource"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    {filteredProjects.map((project) => (
                      <div key={project.id} className="border border-border-100 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-md transition-all cursor-pointer group bg-white">
                        <div className={`h-[120px] ${project.thumbnail} relative`}>
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-lg px-3 py-1.5 text-[12px] font-medium text-neutralsource">Open</div>
                           </div>
                        </div>
                        <div className="p-3">
                          <div className="flex items-start justify-between mb-2">
                             <h3 className="text-[14px] font-medium truncate flex-1 mr-2">{project.name}</h3>
                             <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[project.status]}`}>{project.status}</span>
                          </div>
                          <div className="flex items-center gap-3 text-[12px] text-neutral-500">
                             <span>{project.components} components</span>
                             <span>{project.screens} screens</span>
                             <span className="ml-auto">{project.lastEdited}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

               <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs">
                 <div className="flex items-center justify-between px-5 py-4 border-b border-border-100">
                   <h2 className="text-[16px] font-semibold">Component Library</h2>
                   <button className="text-[14px] text-primarysource font-medium hover:underline">Browse All</button>
                 </div>
                 <div className="p-5">
                   <div className="grid grid-cols-3 gap-3">
                     {componentLibrary.map((comp) => (
                       <div key={comp.name} className="border border-border-100 rounded-lg p-3 hover:border-primary-300 hover:bg-primary-50 transition-all cursor-pointer group">
                         <div className="w-8 h-8 rounded-lg bg-neutral-50 group-hover:bg-white flex items-center justify-center mb-2 text-neutral-500 group-hover:text-primarysource transition-colors">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/></svg>
                         </div>
                         <p className="text-[13px] font-medium mb-0.5">{comp.name}</p>
                         <p className="text-[11px] text-neutral-400">{comp.count} variants · {comp.category}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>

            <div className="flex flex-col gap-4">
               <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs">
                 <div className="flex items-center justify-between px-5 py-4 border-b border-border-100">
                   <h2 className="text-[16px] font-semibold">Activity</h2>
                   <button className="text-[14px] text-primarysource font-medium hover:underline">See All</button>
                 </div>
                 <div className="divide-y divide-border-50">
                    {activityFeed.map((item) => (
                      <div key={item.id} className="px-5 py-3 hover:bg-neutral-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0 mt-0.5`}>{item.avatar}</div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13px]"><span className="font-medium">{item.user}</span> <span className="text-neutral-500">{item.action}</span> <span className="text-primarysource font-medium">{item.project}</span></p>
                            <p className="text-[11px] text-neutral-400 mt-0.5">{item.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs p-4 flex flex-col gap-2">
                  <h2 className="text-[16px] font-semibold mb-2 px-1">Quick Actions</h2>
                  {[
                    { label: "Import from Figma", icon: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M12 8v8M8 12h8", color: "text-purple-600 bg-purple-50" },
                    { label: "Create New Screen", icon: "M12 5v14M5 12h14", color: "text-primarysource bg-primary-50" },
                    { label: "Export to Code", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", color: "text-green-600 bg-green-50" }
                  ].map(action => (
                    <button key={action.label} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border-100 hover:border-primary-200 hover:bg-neutral-50 transition-all text-left group">
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center flex-shrink-0`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {action.icon.includes(" ") ? action.icon.split(" ").map((d,i)=><path key={i} d={d}/>) : <path d={action.icon}/>}
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium group-hover:text-primarysource">{action.label}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-neutral-400 group-hover:text-primarysource"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  ))}
               </div>

               <div className="bg-gradient-to-br from-primarysource to-primary-700 rounded-xl p-5 text-white shadow-md">
                  <p className="text-[14px] font-semibold mb-1">Upgrade to Pro</p>
                  <p className="text-[12px] text-white/80 mb-4">Unlock unlimited projects, advanced AI features, and priority support.</p>
                  <button className="w-full py-2 bg-white text-primarysource text-[13px] font-semibold rounded-lg hover:bg-primary-50 transition-colors">Upgrade Now</button>
               </div>
            </div>
          </div>
        </main>
      </div>

      <NewProjectModal
        show={showNewProjectModal}
        onClose={() => setShowNewProjectModal(false)}
        projectName={newProjectName}
        setProjectName={setNewProjectName}
        projectType={newProjectType}
        setProjectType={setNewProjectType}
        onCreate={() => setShowNewProjectModal(false)}
      />

      {(notificationsOpen || profileOpen) && (
        <div className="fixed inset-0 z-40" onClick={() => { setNotificationsOpen(false); setProfileOpen(false); }} />
      )}
    </div>
  );
};
