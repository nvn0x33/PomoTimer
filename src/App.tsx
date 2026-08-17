// Utils?
import { useState } from "react";
import { ActiveTask } from "./contexts";

// Components
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoContainer from "./components/TodoContainer";

function App() {
    const [activeTask, setActiveTask] = useState("Time to act!");
    return (
        <>
            <Header />
            <ActiveTask value={[activeTask, setActiveTask]}>
                <main className="flex items-center justify-center gap-4 mt-8 max-md:flex-col max-md:text-sm">
                    <Timer />
                    <TodoContainer />
                </main>
            </ActiveTask>
        </>
    );
}

export default App;
