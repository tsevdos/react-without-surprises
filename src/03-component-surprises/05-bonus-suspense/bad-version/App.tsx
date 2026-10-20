import { useState } from "react";
import Header from "../../../components/Header/Header";
import { USER_OPTIONS } from "../api";
import UserProfile from "./UserProfile";
import UserPosts from "./UserPosts";
import UserTodos from "./UserTodos";
import "../App.css";

export default function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <Header
        sectionName="Component Surprises"
        title="User dashboard — bad example (custom Loader)"
        tooltip="Every widget calls useQuery and wraps its output in a custom <Loader status={status}> component, so each one deals with undefined data."
      />

      <div className="suspense-demo">
        <label className="user-picker">
          Select user:
          <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
            {USER_OPTIONS.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <div className="widgets">
          <UserProfile userId={userId} />
          <UserPosts userId={userId} />
          <UserTodos userId={userId} />
        </div>
      </div>
    </>
  );
}
