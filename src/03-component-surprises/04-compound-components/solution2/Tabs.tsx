import { Children, isValidElement, useState, type ReactElement, type ReactNode } from "react";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";

type TabProps = {
  title: string;
  children: ReactNode;
};

type TabsProps = {
  defaultSelectedTab?: number;
  onSelectTab?: (index: number) => void;
  children: ReactNode;
};

type CompoundTabs = ((props: TabsProps) => ReactElement) & {
  Tab: (props: TabProps) => null;
};

const Tab = (_props: TabProps) => null;

const Tabs: CompoundTabs = ({ defaultSelectedTab = 0, onSelectTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultSelectedTab);
  const tabs = Children.toArray(children).map((child, index) => {
    if (!isValidElement<TabProps>(child) || child.type !== Tab) {
      throw new Error("Tabs only accepts <Tabs.Tab> as direct children.");
    }

    return { index, title: child.props.title, content: child.props.children };
  });
  const handleSelectTab = (index: number) => {
    if (index === activeTab) return;

    setActiveTab(index);
    onSelectTab?.(index);
  };

  return (
    <div className="compound-demo">
      <section className="tabs">
        <nav className="tab-nav">
          {tabs.map(({ index, title }) => (
            <TabsNavItem
              key={index}
              index={index}
              title={title}
              isActive={activeTab === index}
              onSelectTab={handleSelectTab}
            />
          ))}
        </nav>
        <section className="tabs-content">
          {tabs.map(({ index, content }) => (
            <TabsContent key={index} content={content} isVisible={activeTab === index} />
          ))}
        </section>
      </section>
    </div>
  );
};

Tabs.Tab = Tab;

export default Tabs;
