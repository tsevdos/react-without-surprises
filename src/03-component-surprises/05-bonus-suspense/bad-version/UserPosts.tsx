import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api";
import Loader from "./Loader";

export default function UserPosts({ userId }: { userId: number }) {
  const { status, data: posts } = useQuery({
    queryKey: ["suspense-demo", "posts", userId],
    queryFn: () => fetchPosts(userId),
    retry: false,
  });

  return (
    <div className="widget">
      <h2>Posts</h2>
      <Loader status={status}>
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Loader>
    </div>
  );
}
