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
      tooltip="The tabs are built as a single component that accepts data and renders both navigation and content."
    />
    <Tabs tabs={tabsEntries} />
  </>
);

export default App;
