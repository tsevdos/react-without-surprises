import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUser } from "../api";
import AsyncBoundary from "./AsyncBoundary";

// useSuspenseQuery suspends this component, so <Suspense> must live in a parent
function UserProfileContent({ userId }: { userId: number }) {
  const { data: user } = useSuspenseQuery({
    queryKey: ["suspense-demo", "user", userId],
    queryFn: () => fetchUser(userId),
    retry: false,
  });

  return (
    <div className="profile">
      <img src={user.image} alt="" />
      <div>
        <strong>
          {user.firstName} {user.lastName}
        </strong>
        <p>{user.email}</p>
        <p>
          {user.company.title} @ {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default function UserProfile({ userId }: { userId: number }) {
  return (
    <section className="widget">
      <h2>Profile</h2>
      <AsyncBoundary>
        <UserProfileContent userId={userId} />
      </AsyncBoundary>
    </section>
  );
}
