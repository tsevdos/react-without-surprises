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
        title="User dashboard — solution (Suspense)"
        tooltip="Widgets use useSuspenseQuery, so data is always defined. Loading is handled by <Suspense> and errors by an error boundary."
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
          <UserProfile key={`profile-${userId}`} userId={userId} />
          <UserPosts key={`posts-${userId}`} userId={userId} />
          <UserTodos key={`todos-${userId}`} userId={userId} />
        </div>
      </div>
    </>
  );
}
