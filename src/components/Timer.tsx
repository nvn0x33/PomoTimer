import { useRef, useState, useContext } from "react";
import { ActiveTask } from "../contexts";
import { msToMins } from "../utils/unit";

const TABS = [
    { name: "Pomodoro", defaultMs: 1500000, ms: 1500000 },
    { name: "Short Break", defaultMs: 300000, ms: 300000 },
    { name: "Long Break", defaultMs: 900000, ms: 900000 },
];
export default function Timer() {
    const [activeTab, setActiveTab] = useState(TABS[0]);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const Task: string = useContext(ActiveTask);
    const intervalID = useRef(null);

    const startTimer = () => {
        intervalID.current = setInterval(() => {
            setActiveTab((prev) => {
                const temp = { ...prev };
                temp.ms -= 1000;

                return { ...temp };
            });
        }, 1000);
        setIsTimerRunning(true);
    };
    const stopTimer = () => {
        clearInterval(intervalID.current);
        intervalID.current = null;
        setIsTimerRunning(false);
    };

    const toggleTimer = () => {
        if (isTimerRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    };

    const resetTimer = () => {
        stopTimer();
        setActiveTab((prev) => {
            const temp = { ...prev };
            temp.ms = temp.defaultMs;

            return { ...temp };
        });
    };

    return (
        <div className="flex flex-col gap-12 bg-white/10 rounded-md px-16 py-4 text-center">
            <div className="flex gap-4">
                {TABS.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => {
                            if (tab.name === activeTab.name) return;

                            stopTimer();
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

            <span className="font-extrabold text-8xl">
                {msToMins(activeTab.ms)}
            </span>
            <div className="flex justify-between">
                <Button
                    text={isTimerRunning ? "PAUSE" : "START"}
                    handleClick={toggleTimer}
                />
                <Button text={"RESET"} handleClick={resetTimer} />
            </div>
        </div>
    );
}

function Button({ text, handleClick }) {
    return (
        <button
            onClick={handleClick}
            className="bg-white px-8 py-2 text-theme font-bold text-lg"
        >
            {text}
        </button>
    );
}
