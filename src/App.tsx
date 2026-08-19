import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import TodoAppBad from "./01-state-management-surprises/01-todo-app/bad-version/App";
import TodoAppSolution from "./01-state-management-surprises/01-todo-app/solution/App";
import ProfileFormBad from "./01-state-management-surprises/02-profileForm/bad-version/App";
import ProfileFormSolution from "./01-state-management-surprises/02-profileForm/solution/App";
import UserCart from "./01-state-management-surprises/exercise/UserCart";
import AppLayoutBad from "./02-prop-drilling/app-layout/bad-example/App";
import AppLayoutSolution from "./02-prop-drilling/app-layout/solution/App";
import AppLayoutSolution2 from "./02-prop-drilling/app-layout/solution2/App";
import MessageBoardBad from "./02-effects-surprises/01-message-board/bad-version/MessageBoard";
import MessageBoardSolution from "./02-effects-surprises/01-message-board/solution/MessageBoard";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("comment-form-solution");

  return (
    <Layout selectedMenu={selectedMenu} onMenuItemSelect={setSelectedMenu}>
      <div className="content">
        {/* State Management Surprises */}
        {selectedMenu === "todo-app-bad" && <TodoAppBad />}
        {selectedMenu === "todo-app-solution" && <TodoAppSolution />}
        {selectedMenu === "profile-bad" && <ProfileFormBad />}
        {selectedMenu === "profile-solution" && <ProfileFormSolution />}
        {selectedMenu === "exercise-1" && <UserCart />}

        {/* Prop Drilling */}
        {selectedMenu === "app-layout-bad" && <AppLayoutBad />}
        {selectedMenu === "app-layout-solution" && <AppLayoutSolution />}
        {selectedMenu === "app-layout-solution-2" && <AppLayoutSolution2 />}

        {/* Use Effect Surprises */}
        {selectedMenu === "comment-form-bad" && <MessageBoardBad />}
        {selectedMenu === "comment-form-solution" && <MessageBoardSolution />}
      </div>
    </Layout>
  );
}

export default App;
