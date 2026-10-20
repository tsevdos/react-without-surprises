import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api";
import AsyncBoundary from "./AsyncBoundary";

function UserPostsContent({ userId }: { userId: number }) {
  const { data: posts } = useSuspenseQuery({
    queryKey: ["suspense-demo", "posts", userId],
    queryFn: () => fetchPosts(userId),
    retry: false,
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function UserPosts({ userId }: { userId: number }) {
  return (
    <section className="widget">
      <h2>Posts</h2>
      <AsyncBoundary>
        <UserPostsContent userId={userId} />
      </AsyncBoundary>
    </section>
  );
}
