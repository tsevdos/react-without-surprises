import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";
import Loader from "./Loader";

export default function UserTodos({ userId }: { userId: number }) {
  const { status, data: todos } = useQuery({
    queryKey: ["suspense-demo", "todos", userId],
    queryFn: () => fetchTodos(userId),
    retry: false,
  });

  return (
    <div className="widget">
      <h2>Todos</h2>
      <Loader status={status}>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id} className={todo.completed ? "done" : ""}>
              {todo.todo}
            </li>
          ))}
        </ul>
      </Loader>
    </div>
  );
}
