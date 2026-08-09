import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const accentVars: string[] = ["accent1", "accent2", "accent3", "accent4"];
export default function Header() {
    const [activeAccent, setActiveAccent] = useState<string>(accentVars[0]);

    const handleClick = (accent: string) => {
        document.documentElement.style.setProperty(
            `--color-theme`,
            `var(--color-${accent})`
        );
        setActiveAccent(accent);
    };

    return (
        <header className="w-1/2 m-auto max-md:w-full p-2">
            <nav className="flex justify-between p-4 rounded-md bg-white/10">
                <ThemeSwitcher
                    accentVars={accentVars}
                    activeAccent={activeAccent}
                    handleClick={handleClick}
                />
                {/* It will do something, not sure yet */}
                <button className="bg-white/20 px-2">Settings</button>
            </nav>
        </header>
    );
}
