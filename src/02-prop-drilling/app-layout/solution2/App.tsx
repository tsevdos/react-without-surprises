import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import AppHeader from "../../../components/Header/Header";
import { useAppConfigStore } from "./stores/appConfigStore";
import "../App.css";

export default function App() {
  const theme = useAppConfigStore((state) => state.theme);
  const sidebarCollapsed = useAppConfigStore((state) => state.sidebarCollapsed);

  return (
    <>
      <AppHeader
        sectionName="Prop Drilling"
        title="App layout — Zustand solution"
        tooltip="The application uses Zustand stores to manage global state without prop drilling."
      />
      <div className={`app-layout ${theme}`}>
        <Header />
        <div className="app-main-container">
          {!sidebarCollapsed && <Sidebar />}
          <main className="app-main-content">My main content</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
