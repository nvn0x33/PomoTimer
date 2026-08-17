import TodoList from "./TodoList";
import { EllipsisVertical } from "lucide-react";
import IconButton from "./IconButton";

export default function TodoContainer() {
    return (
        <div className=" w-md max-md:w-full p-4 ">
            <div className="flex justify-between">
                <span className="font-bold text-lg">Tasks</span>
                <IconButton>
                    <EllipsisVertical size={20} strokeWidth={3} />
                </IconButton>
            </div>
            <hr />
            <TodoList />
        </div>
    );
}
