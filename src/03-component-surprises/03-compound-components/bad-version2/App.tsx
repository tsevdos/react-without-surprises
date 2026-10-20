import { useState } from "react";
import Header from "../../../components/Header/Header";
import Tabs from "./Tabs";
import TabHeader from "./TabHeader";
import TabContainer from "./TabContainer";
import TabsNavItem from "./TabsNavItem";
import TabsContent from "./TabsContent";
import "../App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(2);
  const onSelectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Compound components — composition"
        tooltip="Composition gives consumers control over structure, but coordination becomes cumbersome when every part must be wired together manually."
      />
      <Tabs>
        <TabHeader>
          <TabsNavItem index={1} title="Tab 1" isActive={activeTab === 1} onSelectTab={onSelectTab} />
          <TabsNavItem index={2} title="Tab 2" isActive={activeTab === 2} onSelectTab={onSelectTab} />
          <TabsNavItem index={3} title="Tab 3" isActive={activeTab === 3} onSelectTab={onSelectTab} />
        </TabHeader>
        <TabContainer>
          <TabsContent isVisible={activeTab === 1}>
            <h2>First Tab</h2>
            <p>My first tab content</p>
          </TabsContent>
          <TabsContent isVisible={activeTab === 2}>
            <h2>Second Tab</h2>
            <p>My second tab content</p>
          </TabsContent>
          <TabsContent isVisible={activeTab === 3}>
            <h2>Third Tab</h2>
            <p>My third tab content</p>
          </TabsContent>
        </TabContainer>
      </Tabs>
    </>
  );
};

export default App;
