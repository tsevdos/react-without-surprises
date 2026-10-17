type TabsNavItemProps = {
  index: number;
  title: string;
  isActive: boolean;
  onSelectTab: (index: number) => void;
};

const TabsNavItem = ({ index, title, isActive, onSelectTab }: TabsNavItemProps) => {
  const onClick = () => {
    onSelectTab(index);
  };

  return (
    <button type="button" className={`tab-nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default TabsNavItem;
