// Utils?
import { useState } from "react";
import { ActiveTask } from "./contexts";

// Components
import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
    const [activeTask, setActiveTask] = useState("Time to act!");
    return (
        <>
            <Header />
            <ActiveTask value={[activeTask, setActiveTask]}>
                <main className="flex items-center justify-center">
                    <Timer />
                </main>
            </ActiveTask>
        </>
    );
}

export default App;
