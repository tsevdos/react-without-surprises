import { create } from "zustand";

export type Theme = "light" | "dark";

type AppConfigState = {
  // Static configuration
  applicationTitle: string;
  version: string;
  companyName: string;
  // Dynamic settings
  theme: Theme;
  sidebarCollapsed: boolean;
};

type AppConfigActions = {
  toggleTheme: () => void;
  toggleSidebar: () => void;
};

type AppConfigStore = AppConfigState & AppConfigActions;

export const useAppConfigStore = create<AppConfigStore>((set) => ({
  // Static configuration
  applicationTitle: "DeliciousApp",
  version: "1.0.0",
  companyName: "City.js 🇬🇷 workshop",
  // Dynamic settings
  theme: "dark",
  sidebarCollapsed: false,
  // Actions
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}));
