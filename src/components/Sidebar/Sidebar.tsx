import styles from './Sidebar.module.css'

type MenuItem = {
    id: string;
    label: string;
}

const menuItems: MenuItem[] = [
    { id: 'profile-bad', label: 'Profile form — bad example' },
    { id: 'profile-solution', label: 'Profile form — solution' },
    { id: 'form-exercise', label: 'Form — exercise' },
    { id: 'leaderboard-bad', label: 'Leaderboard — bad example' },
    { id: 'leaderboard-solution', label: 'Leaderboard — solution' },
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
                        {menuItems.map((item) => (
                            <li key={item.id} className={styles.menuItem}>
                                <a
                                    className={`${styles.menuLink} ${selectedMenu === item.id ? styles.active : ''}`}
                                    onClick={(e) => handleClick(e, item.id)}
                                >
                                    {item.label}
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
