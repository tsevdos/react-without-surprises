import styles from './Sidebar.module.css'

type MenuItem = {
    id: string;
    label: string;
}

const menuItems: MenuItem[] = [
    { id: 'profile-bad', label: 'Profile form — bad example' },
    { id: 'profile-solution', label: 'Profile form — solution' },
    { id: 'todo-app-bad', label: 'Todo app — bad example' },
    { id: 'todo-app-solution', label: 'Todo app — solution' }
]

type SidebarProps = {
    selectedMenu: string
    onMenuItemSelect: (id: string) => void
}

function Sidebar({ selectedMenu, onMenuItemSelect }: SidebarProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        onMenuItemSelect(id)
    }

    return (
        <div className={styles.sidebar}>
            <header className={styles.header}>
                <h1 className={styles.title}>React Without Surprises</h1>
            </header>

            <nav className={styles.nav}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Derived State</h2>
                    <ul className={styles.menuList}>
                        {menuItems.map(({ id, label }) => (
                            <li key={id} className={styles.menuItem}>
                                <a
                                    className={`${styles.menuLink} ${selectedMenu === id ? styles.active : ''}`}
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
    )
}

export default Sidebar
