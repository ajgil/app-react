export interface NavItem {
  label: string;
  icon: string;
  active: boolean;
}

export interface Project {
  id: number;
  name: string;
  lastEdited: string;
  status: "In Progress" | "Review" | "Completed";
  thumbnail: string;
  components: number;
  screens: number;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  project: string;
  time: string;
  avatar: string;
  color: string;
}

export interface ComponentItem {
  name: string;
  count: number;
  category: string;
}
