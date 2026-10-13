import { type User } from "./MessageBoard";
import "../App.css";

type UsersProps = {
  users: User[];
  selectedUserId: number;
  onSelect: (userId: number) => void;
};

export default function Users({ users, selectedUserId, onSelect }: UsersProps) {
  return (
    <div className="users-section">
      <h2>Select User</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li
            key={user.id}
            className={`user-item ${selectedUserId === user.id ? "selected" : ""}`}
            onClick={() => onSelect(user.id)}
          >
            <span className="user-avatar">{user.avatar}</span>
            <span className="user-name">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
