import TodoList from "./TodoList";
import { EllipsisVertical } from "lucide-react";

export default function TodoContainer() {
    return (
        <div className=" w-md max-md:w-full p-4 ">
            <div className="flex justify-between">
                <span className="font-bold text-lg">Tasks</span>
                <button className="px-1 rounded-sm bg-white/10 hover:bg-white/20">
                    <EllipsisVertical size={20} strokeWidth={3} />
                </button>
            </div>
            <hr />
            <TodoList />
        </div>
    );
}
