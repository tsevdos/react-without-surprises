import { useState, type ChangeEvent, type SubmitEvent, type Dispatch, type SetStateAction } from "react";
import { type Todo } from "./App";

const todoCategories = [
    {
        title: "Work",
        value: "work",
    },
    {
        title: "Home",
        value: "home",
    },
];

type AddTodoFormProps = {
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export default function AddTodoForm({ todos, setTodos }: AddTodoFormProps) {
    const [toDoInput, setToDoInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("work");

    const updateCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
        setToDoInput(e.target.value);
    };

    const addToDo = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newToDo = { title: toDoInput, done: false, category: selectedCategory };
        setToDoInput("");
        setTodos([...todos, newToDo]);
    };

    return (
        <form onSubmit={addToDo} className="task-form">
            <label>Add ToDo:</label>
            <input type="text" value={toDoInput} onChange={updateInput} className="task-input" />
            <select name="category" value={selectedCategory} onChange={updateCategory} className="task-input">
                {todoCategories.map(({ title, value }) => (
                    <option key={value} value={value}>
                        {title}
                    </option>
                ))}
            </select>
            <button type="submit" className="task-button">Add ToDo</button>
        </form>
    );
};
