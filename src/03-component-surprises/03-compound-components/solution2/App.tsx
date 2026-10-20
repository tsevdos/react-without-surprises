import Header from "../../../components/Header/Header";
import Tabs from "./Tabs";
import "../App.css";

const App = () => {
  const onSelectTab = (tabIndex: number) => {
    console.log(`do something with the selected tab index: ${tabIndex}`);
  };

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="Compound components — initial selection and callback"
        tooltip="This version adds a default selected tab and a selection change callback while retaining the declarative Tabs and Tab structure."
      />
      <Tabs defaultSelectedTab={1} onSelectTab={onSelectTab}>
        <Tabs.Tab title="Tab 1">
          <h2>First Tab</h2>
          <p>My first tab content</p>
        </Tabs.Tab>
        <Tabs.Tab title="Tab 2">
          <h2>Second Tab</h2>
          <p>My second tab content</p>
        </Tabs.Tab>
        <Tabs.Tab title="Tab 3">
          <h2>Third Tab</h2>
          <p>My third tab content</p>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default App;
