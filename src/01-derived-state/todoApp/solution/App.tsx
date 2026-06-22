import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodosList from "./ToDoList";
import Header from "../../../components/Header/Header";
import "../TodoApp.css";

const initialTodos = [
  { done: false, title: "Learn React", category: "work" },
  { done: false, title: "Do a presentation", category: "work" },
  { done: true, title: "Go out for a drink", category: "home" },
  { done: true, title: "Learn JavaScript", category: "work" },
  { done: false, title: "Learn TypeScript", category: "work" },
  { done: true, title: "Do the laundry", category: "home" },
  { done: false, title: "Prepare Christmas party", category: "home" },
];

export type Todo = {
  title: string;
  category: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const workTodos = todos.filter(({ category }) => category === "work");
  const homeTodos = todos.filter(({ category }) => category === "home");

  const toggleTodo = (title: string) => {
    const newTodos = todos.map(todo => todo.title === title ? { ...todo, done: !todo.done } : todo);
    setTodos(newTodos);
  };

  return (
    <>
      <Header
        sectionName="Derived State"
        title="Todo app — solution"
        tooltip="The application is working as expected, with derived state and improved performance."
      />
      <div className="todo-app-container">
        <h2>My ToDos</h2>
        <hr />
        <AddTodoForm todos={todos} setTodos={setTodos} />
        <hr />
        <div className="todo-sections">
          <TodosList title="All ToDos" todos={todos} toggleTodo={toggleTodo} />
          <TodosList title="Work ToDos" todos={workTodos} toggleTodo={toggleTodo} />
          <TodosList title="Home ToDos" todos={homeTodos} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  );
};