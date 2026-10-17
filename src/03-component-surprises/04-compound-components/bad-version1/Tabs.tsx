import { useState } from "react";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";

type TabEntry = {
  tabTitle: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: TabEntry[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const onSelectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="compound-demo">
      <section className="tabs">
        <nav className="tab-nav">
          {tabs.map(({ tabTitle }, index) => (
            <TabsNavItem
              key={index}
              index={index}
              title={tabTitle}
              isActive={activeTab === index}
              onSelectTab={onSelectTab}
            />
          ))}
        </nav>
        <section className="tabs-content">
          {tabs.map(({ title, content }, index) => (
            <TabsContent key={index} title={title} content={content} isVisible={activeTab === index} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Tabs;
