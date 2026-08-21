import { useUserStore } from "./stores/userStore";

export default function Profile() {
  const { username, imgPath } = useUserStore((state) => state);

  return (
    <div className="app-profile">
      <img src={imgPath} width="50px" height="50px" alt={username} />
      <span>{username}</span>
    </div>
  );
}
