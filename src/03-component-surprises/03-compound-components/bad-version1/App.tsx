import Header from "../../../components/Header/Header";
import Tabs from "./Tabs";
import "../App.css";

type TabEntry = {
  tabTitle: string;
  title: string;
  content: string;
};

const tabsEntries: TabEntry[] = [
  {
    tabTitle: "Tab 1",
    title: "First Tab",
    content: "My first tab content",
  },
  {
    tabTitle: "Tab 2",
    title: "Second Tab",
    content: "My second tab content",
  },
  {
    tabTitle: "Tab 3",
    title: "Third Tab",
    content: "My third tab content",
  },
];

const App = () => (
  <>
    <Header
      sectionName="Component Surprises"
      title="Compound components — starting point"
      tooltip="A fixed component API can limit how consumers arrange, customize, and compose the interface."
    />
    <Tabs tabs={tabsEntries} />
  </>
);

export default App;
