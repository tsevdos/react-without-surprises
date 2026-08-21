import styles from "./Sidebar.module.css";

type MenuItem = {
  id: string;
  label: string;
};

const stateManagementSurprisesMenuItems: MenuItem[] = [
  { id: "todo-app-bad", label: "Todo app — bad example" },
  { id: "todo-app-solution", label: "Todo app — solution" },
  { id: "profile-bad", label: "Profile form — bad example" },
  { id: "profile-solution", label: "Profile form — solution" },
  { id: "exercise-1", label: "User cart — exercise 1" },
  { id: "app-layout-bad", label: "App layout — bad example" },
  { id: "app-layout-solution", label: "App layout — Context API solution" },
  { id: "app-layout-solution-2", label: "App layout — Global state solution" },
];

const useEffectSurprisesMenuItems: MenuItem[] = [
  { id: "comment-form-bad", label: "Comment form — bad example" },
  { id: "comment-form-solution", label: "Comment form — solution" },
  { id: "user-search-bad", label: "User search — bad example" },
  { id: "user-search-solution", label: "User search — solution" },
];

type SidebarProps = {
  selectedMenu: string;
  onMenuItemSelect: (id: string) => void;
};

function Sidebar({ selectedMenu, onMenuItemSelect }: SidebarProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onMenuItemSelect(id);
  };

  return (
    <div className={styles.sidebar}>
      <header className={styles.header}>
        <h1 className={styles.title}>React Without Surprises</h1>
      </header>

      <nav className={styles.nav}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>State Management Surprises</h2>
          <ul className={styles.menuList}>
            {stateManagementSurprisesMenuItems.map(({ id, label }) => (
              <li key={id} className={styles.menuItem}>
                <a
                  className={`${styles.menuLink} ${selectedMenu === id ? styles.active : ""}`}
                  onClick={(e) => handleClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Effects Surprises</h2>
          <ul className={styles.menuList}>
            {useEffectSurprisesMenuItems.map(({ id, label }) => (
              <li key={id} className={styles.menuItem}>
                <a
                  className={`${styles.menuLink} ${selectedMenu === id ? styles.active : ""}`}
                  onClick={(e) => handleClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
