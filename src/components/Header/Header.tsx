import styles from "./Header.module.css";

type HeaderProps = {
  sectionName: string;
  title: string;
  tooltip?: string;
};

function Header({ sectionName, title, tooltip }: HeaderProps) {
  return (
    <header className={styles.header}>
      <span className={styles.sectionName}>{sectionName}</span>
      <h1 className={styles.title}>{title}</h1>
      {tooltip && <p className={styles.tooltip}>{tooltip}</p>}
    </header>
  );
}

export default Header;
