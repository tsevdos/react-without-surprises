import { useAppConfigStore } from "./stores/appConfigStore";
import Profile from "./Profile";

export default function HeaderActions() {
  const { theme, toggleTheme, toggleSidebar } = useAppConfigStore((state) => state);

  return (
    <div className="app-header-actions">
      <button className="app-toggle-button" onClick={toggleSidebar} title="Toggle Sidebar">
        ☰
      </button>
      <button className="app-toggle-button" onClick={toggleTheme} title="Toggle Theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <Profile />
    </div>
  );
}
