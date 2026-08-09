import { useState } from "react";

export default function Header() {
    const accentVars: string[] = ["accent1", "accent2", "accent3", "accent4"];

    const [activeAccent, setActiveAccent] = useState(accentVars[0]);

    const handleClick = (e) => {
        document.documentElement.style.setProperty(
            `--color-theme`,
            `var(--color-${e.currentTarget.dataset.var})`
        );
        setActiveAccent(e.currentTarget.dataset.var);
    };

    return (
        <header className="w-1/2 m-auto max-md:w-full p-2">
            <nav className="flex justify-between p-4 rounded-md bg-white/10">
                <div className="flex justify-between">
                    {accentVars.map((accent: string, index: number) => {
                        const bgClass: string = `bg-${accent}`;
                        const activeClass: string =
                            activeAccent === accent
                                ? "active-theme-button"
                                : "";

                        return (
                            <button
                                key={index + 1}
                                data-var={accent}
                                className={`p-4 ${bgClass} ${activeClass}`}
                                onClick={handleClick}
                            ></button>
                        );
                    })}
                </div>
                {/* It will do something, not sure yet */}
                <button className="bg-white/20 px-2">Settings</button>
            </nav>
        </header>
    );
}
