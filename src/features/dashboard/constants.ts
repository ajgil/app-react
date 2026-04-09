import type { NavItem, Project, Stat, Activity, ComponentItem } from "./types";

export const navItems: NavItem[] = [
  {
    label: "Dashboard",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    active: true,
  },
  {
    label: "Projects",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    active: false,
  },
  {
    label: "Components",
    icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
    active: false,
  },
  {
    label: "Assets",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    active: false,
  },
  {
    label: "Settings",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    active: false,
  },
];

export const recentProjects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Dashboard",
    lastEdited: "2 hours ago",
    status: "In Progress",
    thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
    components: 24,
    screens: 8,
  },
  {
    id: 2,
    name: "Mobile Banking App",
    lastEdited: "Yesterday",
    status: "Review",
    thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
    components: 18,
    screens: 12,
  },
  {
    id: 3,
    name: "SaaS Landing Page",
    lastEdited: "3 days ago",
    status: "Completed",
    thumbnail: "bg-gradient-to-br from-green-400 to-green-600",
    components: 31,
    screens: 5,
  },
  {
    id: 4,
    name: "Admin Panel",
    lastEdited: "1 week ago",
    status: "In Progress",
    thumbnail: "bg-gradient-to-br from-orange-400 to-orange-600",
    components: 42,
    screens: 15,
  },
  {
    id: 5,
    name: "Portfolio Website",
    lastEdited: "2 weeks ago",
    status: "Completed",
    thumbnail: "bg-gradient-to-br from-pink-400 to-pink-600",
    components: 15,
    screens: 6,
  },
  {
    id: 6,
    name: "Task Manager",
    lastEdited: "3 weeks ago",
    status: "Review",
    thumbnail: "bg-gradient-to-br from-teal-400 to-teal-600",
    components: 27,
    screens: 9,
  },
];

export const statsData: Stat[] = [
  {
    label: "Total Projects",
    value: "24",
    change: "+3 this month",
    positive: true,
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  },
  {
    label: "Components Built",
    value: "1,284",
    change: "+128 this week",
    positive: true,
    icon: "M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
  },
  {
    label: "Active Screens",
    value: "87",
    change: "-2 this week",
    positive: false,
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Team Members",
    value: "12",
    change: "+1 this month",
    positive: true,
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

export const activityFeed: Activity[] = [
  {
    id: 1,
    user: "Sarah K.",
    action: "created a new component",
    project: "E-Commerce Dashboard",
    time: "5 min ago",
    avatar: "SK",
    color: "bg-blue-500",
  },
  {
    id: 2,
    user: "Mike R.",
    action: "updated design for",
    project: "Mobile Banking App",
    time: "23 min ago",
    avatar: "MR",
    color: "bg-purple-500",
  },
  {
    id: 3,
    user: "Anna L.",
    action: "exported code from",
    project: "SaaS Landing Page",
    time: "1 hour ago",
    avatar: "AL",
    color: "bg-green-500",
  },
  {
    id: 4,
    user: "Tom B.",
    action: "added a new screen to",
    project: "Admin Panel",
    time: "2 hours ago",
    avatar: "TB",
    color: "bg-orange-500",
  },
  {
    id: 5,
    user: "Lisa M.",
    action: "reviewed changes in",
    project: "Portfolio Website",
    time: "3 hours ago",
    avatar: "LM",
    color: "bg-pink-500",
  },
];

export const componentLibrary: ComponentItem[] = [
  { name: "Button", count: 12, category: "Form" },
  { name: "Input Field", count: 8, category: "Form" },
  { name: "Card", count: 15, category: "Layout" },
  { name: "Modal", count: 6, category: "Overlay" },
  { name: "Navigation", count: 9, category: "Layout" },
  { name: "Table", count: 4, category: "Data" },
];

export const statusColors: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Review: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
};
