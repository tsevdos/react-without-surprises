import { useState } from "react";
import AppHeader from "../../../components/Header/Header";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../App.css";

export type User = {
  JWT: string;
  username: string;
  name: string;
  admin: boolean;
  imgPath: string;
};

export type Theme = "light" | "dark";

const user: User = {
  JWT: "1234567890",
  username: "tsevdos",
  name: "John Tsevdos",
  admin: true,
  imgPath: "https://avatars1.githubusercontent.com/u/175707",
};

// Application configuration constants
const APPLICATION_TITLE = "DeliciousApp";
const VERSION = "1.0.0";
const COMPANY_NAME = "City.js workshop";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <>
      <AppHeader
        sectionName="State Management Surprises"
        title="App layout — bad example"
        tooltip="Passing shared data through components that do not use it couples unrelated parts of the tree and makes changes harder to follow."
      />
      <div className={`app-layout ${theme}`}>
        <Header
          user={user}
          applicationTitle={APPLICATION_TITLE}
          theme={theme}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
        />
        <div className="app-main-container">
          {!sidebarCollapsed && <Sidebar user={user} />}
          <main className="app-main-content">My main content</main>
        </div>
        <Footer user={user} applicationTitle={APPLICATION_TITLE} version={VERSION} companyName={COMPANY_NAME} />
      </div>
    </>
  );
}
