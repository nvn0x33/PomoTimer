import { useState } from "react";
import { Storage } from "../DB/dbHandler";
import { genTaskID } from "../utils/taskID";
import type { Task } from "../types/Task";

import ThemeButton from "./ThemeButton";

const todoDB = new Storage();

// Task = id: {text: "I am going insane", status: "pending" || "done"}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Task[]>(() => todoDB.loadList());

    const addTask = () => {
        const key: string = genTaskID();
        todoDB.addTask(key, { text: "TEST", status: "pending", id: key });

        const newTodo: Task[] = todoDB.loadList();
        setTodoList(newTodo);
    };

    return (
        <div className="flex flex-col">
            <ul className="flex flex-col w-md">
                {todoList.map((task: Task) => (
                    <TaskBox
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        status={task.status}
                    />
                ))}
            </ul>
            <ThemeButton text="Add Task" handleClick={addTask} />
        </div>
    );
}

function TaskBox({ text, id, status }: Task) {
    return (
        <li>
            <button className="p-4" data-id={id}>
                {text}
            </button>
        </li>
    );
}
