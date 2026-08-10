import { useRef, useState } from "react";
import { msToMins } from "../utils/unit";

export default function Timer() {
    const tabNames = [
        { name: "Pomodoro", timer: "25:00", ms: 1500000 },
        { name: "Short Break", timer: "5:00", ms: 300000 },
        { name: "Long Break", timer: "15:00", ms: 900000 },
    ];

    const [activeTab, setActiveTab] = useState(tabNames[0]);
    const intervalID = useRef(null);

    const startTimer = () => {
        intervalID.current = setInterval(() => {
            setActiveTab((prev) => {
                const temp = { ...prev };
                temp.ms -= 1000;

                return { ...temp };
            });
        }, 1000);
    };
    const stopTimer = () => {
        clearInterval(intervalID.current);
        intervalID.current = null;
    };

    return (
        <div className="flex flex-col gap-12 bg-white/10 rounded-md px-16 py-4 text-center">
            <div className="flex gap-4">
                {tabNames.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => {
                            setActiveTab(tab);
                        }}
                        className={`px-2 py-1 rounded-sm ${
                            activeTab.name === tab.name
                                ? "font-bold bg-black/20"
                                : ""
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <span className="font-extrabold text-8xl text-center">
                {msToMins(activeTab.ms)}
            </span>
            <div className="flex justify-between">
                <button
                    onClick={startTimer}
                    className="bg-white px-8 py-2 text-theme font-bold text-lg"
                >
                    START
                </button>
            </div>
        </div>
    );
}
