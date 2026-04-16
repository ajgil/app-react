import React from "react";

export interface ActivityItem {
  id: string;
  user: string;
  avatar: string;
  action: string;
  project: string;
  time: string;
  color: string;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
  onSeeAll?: () => void;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ items, onSeeAll }) => {
  return (
    <div className="bg-white rounded-xl border border-border-100 overflow-hidden shadow-xs">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border-100">
        <h2 className="text-[16px] font-semibold">Activity</h2>
        <button
          onClick={onSeeAll}
          className="text-[14px] text-primarysource font-medium hover:underline"
        >
          See All
        </button>
      </div>
      <div className="divide-y divide-border-50">
        {items.map((item) => (
          <div
            key={item.id}
            className="px-5 py-3 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0 mt-0.5`}
              >
                {item.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px]">
                  <span className="font-medium">{item.user}</span>{" "}
                  <span className="text-neutral-500">{item.action}</span>{" "}
                  <span className="text-primarysource font-medium">{item.project}</span>
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
