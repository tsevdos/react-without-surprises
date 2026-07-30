import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import TodoAppBad from "./01-state-management-surprises/01-todo-app/bad-version/App";
import TodoAppSolution from "./01-state-management-surprises/01-todo-app/solution/App";
import ProfileFormBad from "./01-state-management-surprises/02-profileForm/bad-version/App";
import ProfileFormSolution from "./01-state-management-surprises/02-profileForm/solution/App";
import AppLayoutBad from "./02-prop-drilling/app-layout/bad-example/App";
import AppLayoutSolution from "./02-prop-drilling/app-layout/solution/App";
import AppLayoutSolution2 from "./02-prop-drilling/app-layout/solution2/App";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("profile-bad");

  return (
    <Layout selectedMenu={selectedMenu} onMenuItemSelect={setSelectedMenu}>
      <div className="content">
        {selectedMenu === "todo-app-bad" && <TodoAppBad />}
        {selectedMenu === "todo-app-solution" && <TodoAppSolution />}
        {selectedMenu === "profile-bad" && <ProfileFormBad />}
        {selectedMenu === "profile-solution" && <ProfileFormSolution />}
        {selectedMenu === "app-layout-bad" && <AppLayoutBad />}
        {selectedMenu === "app-layout-solution" && <AppLayoutSolution />}
        {selectedMenu === "app-layout-solution-2" && <AppLayoutSolution2 />}
      </div>
    </Layout>
  );
}

export default App;
