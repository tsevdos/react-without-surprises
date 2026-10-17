import Header from "../../../components/Header/Header";
import Tabs from "./Tabs";
import "../App.css";

const App = () => (
  <>
    <Header
      sectionName="Component Surprises"
      title="Compound components — solution"
      tooltip="A shared Tabs parent and its Tab subcomponent provide a declarative API for composing the tabs."
    />
    <Tabs>
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

export default App;
