import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Layout from "./layouts/Layout";
import TodoAppBad from "./01-state-management-surprises/01-todo-app/bad-version/App";
import TodoAppSolution from "./01-state-management-surprises/01-todo-app/solution/App";
import ProfileFormBad from "./01-state-management-surprises/02-profile-form/bad-version/App";
import ProfileFormSolution from "./01-state-management-surprises/02-profile-form/solution/App";
import UserCart from "./01-state-management-surprises/03-exercise/UserCart";
import AppLayoutBad from "./01-state-management-surprises/04-app-layout/bad-example/App";
import AppLayoutSolution from "./01-state-management-surprises/04-app-layout/solution/App";
import AppLayoutSolution2 from "./01-state-management-surprises/04-app-layout/solution2/App";
import AppointmentBooking from "./01-state-management-surprises/05-exercise/AppointmentBooking";
import MessageBoardBad from "./02-effects-surprises/01-message-board/bad-version/MessageBoard";
import MessageBoardSolution from "./02-effects-surprises/01-message-board/solution/MessageBoard";
import UserSearchBad from "./02-effects-surprises/02-data-fetching/bad-version/App";
import UserSearchSolution from "./02-effects-surprises/02-data-fetching/solution/App";
import UserSearchSolution2 from "./02-effects-surprises/02-data-fetching/solution2/App";
import TicketDesk from "./02-effects-surprises/03-exercise/TicketDesk";
import MemoBad from "./03-component-surprises/01-memoization/bad-version/App";
import MemoManual from "./03-component-surprises/01-memoization/manual-solution/App";
import MemoCompiler from "./03-component-surprises/01-memoization/compiler-solution/App";
import SuspenseBad from "./03-component-surprises/02-suspense/bad-version/App";
import SuspenseSolution from "./03-component-surprises/02-suspense/solution/App";

const queryClient = new QueryClient();

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState("user-search-solution");

  return (
    <QueryClientProvider client={queryClient}>
      <Layout selectedMenu={selectedMenu} onMenuItemSelect={setSelectedMenu}>
        <div className="content">
          {/* State Management Surprises */}
          {selectedMenu === "todo-app-bad" && <TodoAppBad />}
          {selectedMenu === "todo-app-solution" && <TodoAppSolution />}
          {selectedMenu === "profile-bad" && <ProfileFormBad />}
          {selectedMenu === "profile-solution" && <ProfileFormSolution />}
          {selectedMenu === "exercise-1" && <UserCart />}
          {selectedMenu === "app-layout-bad" && <AppLayoutBad />}
          {selectedMenu === "app-layout-solution" && <AppLayoutSolution />}
          {selectedMenu === "app-layout-solution-2" && <AppLayoutSolution2 />}
          {selectedMenu === "exercise-2" && <AppointmentBooking />}

          {/* Use Effect Surprises */}
          {selectedMenu === "comment-form-bad" && <MessageBoardBad />}
          {selectedMenu === "comment-form-solution" && <MessageBoardSolution />}
          {selectedMenu === "user-search-bad" && <UserSearchBad />}
          {selectedMenu === "user-search-solution" && <UserSearchSolution />}
          {selectedMenu === "user-search-solution-2" && <UserSearchSolution2 />}
          {selectedMenu === "exercise-3" && <TicketDesk />}

          {/* Component Surprises */}
          {selectedMenu === "memo-bad" && <MemoBad />}
          {selectedMenu === "memo-manual" && <MemoManual />}
          {selectedMenu === "memo-compiler" && <MemoCompiler />}
          {selectedMenu === "suspense-bad" && <SuspenseBad />}
          {selectedMenu === "suspense-solution" && <SuspenseSolution />}
        </div>
      </Layout>
    </QueryClientProvider>
  );
}
