import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import ProfileFormBad from "./01-derived-state/profileForm/bad-example/App";
import ProfileFormSolution from "./01-derived-state/profileForm/solution/App";
import TodoAppBad from "./01-derived-state/todoApp/bad-example/App";
import TodoAppSolution from "./01-derived-state/todoApp/solution/App";
import AppLayoutBad from "./02-prop-drilling/app-layout/bad-example/App";
import AppLayoutSolution from "./02-prop-drilling/app-layout/solution/App";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("profile-bad");

  return (
    <Layout selectedMenu={selectedMenu} onMenuItemSelect={setSelectedMenu}>
      <div className="content">
        {selectedMenu === "profile-bad" && <ProfileFormBad />}
        {selectedMenu === "profile-solution" && <ProfileFormSolution />}
        {selectedMenu === "todo-app-bad" && <TodoAppBad />}
        {selectedMenu === "todo-app-solution" && <TodoAppSolution />}
        {selectedMenu === "app-layout-bad" && <AppLayoutBad />}
        {selectedMenu === "app-layout-solution" && <AppLayoutSolution />}
      </div>
    </Layout>
  );
}

export default App;
