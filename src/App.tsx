import { useState } from "react";
import { SelectedTab } from "./contexts";

import Header from "./components/header";

function App() {
    const [tabName, setTabName] = useState("pomodoro");
    return (
        <>
            <SelectedTab value={{ tabName, setTabName }}>
                <Header />
            </SelectedTab>
        </>
    );
}

export default App;
