import { EllipsisVertical } from "lucide-react";

export default function TodoContainer() {
    return (
        <div className="">
            <div className="flex justify-between">
                <span>Tasks</span>
                <button className="px-1 rounded-md bg-white/10 hover:bg-white/20">
                    <EllipsisVertical size={20} />
                </button>
            </div>
        </div>
    );
}
