import { useUserStore } from "./stores/userStore";

export default function UserInfo() {
  const { name, username, admin } = useUserStore((state) => state);

  return (
    <div className="app-user-info">
      <p>{name}</p>
      <p>
        ({username} {admin && "- admin"})
      </p>
    </div>
  );
}
