import { type ReactNode } from "react";
import styles from "./Layout.module.css";
import Sidebar from "../components/Sidebar/Sidebar";

type LayoutProps = {
  children: ReactNode;
  selectedMenu: string;
  onMenuItemSelect: (id: string) => void;
};

function Layout({ children, selectedMenu, onMenuItemSelect }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar selectedMenu={selectedMenu} onMenuItemSelect={onMenuItemSelect} />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
