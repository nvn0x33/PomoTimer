import { useState } from "react";
import { Storage } from "../DB/dbHandler";
import type { Task } from "../types/Task";

const todoDB = new Storage();

// Task = {text: "I am going insane", status: "pending" || "done", id: id}

export default function TodoList() {
    const [todoList, setTodoList] = useState(() => todoDB.loadList());

    return (
        <div className="flex flex-col">
            {todoList.map((task: Task) => (
                <TaskBox text={task.text} id={task.id} />
            ))}
        </div>
    );
}

function TaskBox({ text, id }: { text: string; id: string }) {
    return (
        <button className="p-4" data-id={id}>
            {text}
        </button>
    );
}
