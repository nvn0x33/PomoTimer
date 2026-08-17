import { useState } from "react";
import { Storage } from "../DB/dbHandler";
import { genTaskID } from "../utils/taskID";
import type { Task } from "../types/Task";

import ThemeButton from "./ThemeButton";
import IconButton from "./IconButton";
import { Plus } from "lucide-react";

const todoDB = new Storage();

// Task = id: {text: "I am going insane", status: "pending" || "done"}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Task[]>(() => todoDB.loadList());

    const addTask = () => {
        const key: string = genTaskID();
        todoDB.addTask(key, { text: "TEST", status: "done", id: key });

        const newTodo: Task[] = todoDB.loadList();
        setTodoList(newTodo);
    };

    return (
        <div className="flex flex-col relative">
            <ul className="flex flex-col h-96 overflow-y-scroll">
                {todoList.map((task: Task) => (
                    <TaskBox
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        status={task.status}
                    />
                ))}
            </ul>
            <div className="absolute top-0 right-0 left-0">
                <input type="text" placeholder="What are you aiming for?" />
                <IconButton>
                    <Plus size={20} strokeWidth={3} />
                </IconButton>
            </div>
            <ThemeButton text="Add Task" handleClick={addTask} />
        </div>
    );
}

function TaskBox({ text, id, status }: Task) {
    return (
        <li>
            <button
                className={`p-4 ${status === "done" ? "line-through" : ""}`}
                data-id={id}
            >
                {text}
            </button>
        </li>
    );
}
