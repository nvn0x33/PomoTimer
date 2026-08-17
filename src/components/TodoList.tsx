import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import { useContext } from "react";

import { Storage } from "../DB/dbHandler";
import { genTaskID } from "../utils/taskID";
import { ActiveTask } from "../contexts";

import type { Task } from "../types/Task";

import ThemeButton from "./ThemeButton";
import IconButton from "./IconButton";

const todoDB = new Storage();

// Task = id: {text: "I am going insane", status: "pending" || "done"}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Task[]>(() => todoDB.loadList());
    const inputTask = useRef(null);

    const addTask = () => {
        const key: string = genTaskID();
        todoDB.addTask(key, {
            text: inputTask.current.value,
            status: "pending",
            id: key,
        });

        const newTodo: Task[] = todoDB.loadList();
        setTodoList(newTodo);

        inputTask.current.value = "";
    };

    return (
        <div className="flex flex-col">
            <div className="">
                <input
                    ref={inputTask}
                    type="text"
                    placeholder="What are you aiming for?"
                />
                <IconButton onClick={addTask}>
                    <Plus size={20} strokeWidth={3} />
                </IconButton>
            </div>
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
            <ThemeButton text="Add Task" handleClick={() => {}} />
        </div>
    );
}

function TaskBox({ text, id, status }: Task) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setActiveTask] = useContext(ActiveTask);

    const handleClick = () => {
        setActiveTask(text);
    };
    return (
        <li>
            <button
                className={`p-4 ${status === "done" ? "line-through" : ""}`}
                data-id={id}
                onClick={handleClick}
            >
                {text}
            </button>
        </li>
    );
}
