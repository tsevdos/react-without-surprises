const BASE_URL = "https://dummyjson.com";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: { name: string; title: string };
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export const USER_OPTIONS = [
  { id: 1, label: "User 1" },
  { id: 2, label: "User 2" },
  { id: 3, label: "User 3" },
  { id: 0, label: "Non-existing user (error)" },
];

async function get<T>(path: string, delay: number): Promise<T> {
  // dummyjson's `delay` param makes each widget load at a different speed
  const response = await fetch(`${BASE_URL}${path}?delay=${delay}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export const fetchUser = (userId: number) => get<User>(`/users/${userId}`, 500);

export const fetchPosts = async (userId: number) => (await get<{ posts: Post[] }>(`/posts/user/${userId}`, 1500)).posts;

export const fetchTodos = async (userId: number) => (await get<{ todos: Todo[] }>(`/todos/user/${userId}`, 3000)).todos;
