import { useRef, useState, useContext } from "react";
import { ActiveTask } from "../contexts";
import { msToMins } from "../utils/unit";
import type { Tab } from "../types/Tab.ts";

// Components
import TabBox from "./TabBox";
import ThemeButton from "./ThemeButton.tsx";

const TABS: Tab[] = [
    { name: "Pomodoro", defaultMs: 1500000, ms: 1500000 },
    { name: "Short Break", defaultMs: 300000, ms: 300000 },
    { name: "Long Break", defaultMs: 900000, ms: 900000 },
];

export default function Timer() {
    const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

    const [Task, _] = useContext(ActiveTask);
    const intervalID = useRef<number | null>(null);

    const startTimer = () => {
        let isZero: boolean = false;

        intervalID.current = setInterval(() => {
            setActiveTab((prev: Tab) => {
                isZero = prev.ms <= 1000;
                return { ...prev, ms: prev.ms - 1000 };
            });

            if (isZero) resetTimer();
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
        setActiveTab((prev) => ({ ...prev, ms: prev.defaultMs }));
    };

    const changeTab = (tab: Tab) => {
        if (tab.name === activeTab.name) return;

        stopTimer();
        setActiveTab(tab);
    };

    return (
        <div className="text-center">
            <div className="flex flex-col gap-12 bg-white/10 rounded-md px-16 py-4">
                <TabBox
                    tabs={TABS}
                    activeTab={activeTab}
                    onSelect={changeTab}
                />
                <span className="font-extrabold text-8xl">
                    {msToMins(activeTab.ms)}
                </span>
                <div className="flex justify-between">
                    <ThemeButton
                        text={isTimerRunning ? "PAUSE" : "START"}
                        handleClick={toggleTimer}
                    />
                    <ThemeButton text={"RESET"} handleClick={resetTimer} />
                </div>
            </div>
            <br />
            <span className="text-[1.1rem]">{Task}</span>
        </div>
    );
}
