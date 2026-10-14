import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api";
import AsyncBoundary from "./AsyncBoundary";

function UserTodosContent({ userId }: { userId: number }) {
  const { data: todos } = useSuspenseQuery({
    queryKey: ["suspense-demo", "todos", userId],
    queryFn: () => fetchTodos(userId),
    retry: false,
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "done" : ""}>
          {todo.todo}
        </li>
      ))}
    </ul>
  );
}

export default function UserTodos({ userId }: { userId: number }) {
  return (
    <section className="widget">
      <h2>Todos</h2>
      <AsyncBoundary>
        <UserTodosContent userId={userId} />
      </AsyncBoundary>
    </section>
  );
}
