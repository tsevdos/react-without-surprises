import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api";
import Loader from "./Loader";

export default function UserProfile({ userId }: { userId: number }) {
  const { status, data: user } = useQuery({
    queryKey: ["suspense-demo", "user", userId],
    queryFn: () => fetchUser(userId),
    retry: false,
  });

  // JSX children are evaluated before <Loader> runs, so `user` is possibly undefined here
  return (
    <div className="widget">
      <h2>Profile</h2>
      <Loader status={status}>
        <div className="profile">
          <img src={user?.image} alt="" />
          <div>
            <strong>
              {user?.firstName} {user?.lastName}
            </strong>
            <p>{user?.email}</p>
            <p>
              {user?.company.title} @ {user?.company.name}
            </p>
          </div>
        </div>
      </Loader>
    </div>
  );
}
