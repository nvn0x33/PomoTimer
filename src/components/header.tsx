import { useContext } from "react";
import { SelectedTab } from "../contexts";

export default function Header() {
    const tab = useContext(SelectedTab);
    const accentVars: string[] = [
        "bg-accent1",
        "bg-accent2",
        "bg-accent3",
        "bg-accent4",
    ];

    const handleClick = (e) => {
        document.documentElement.style.setProperty(
            `--${tab.tabName}-accent`,
            `var(--color-${e.currentTarget.dataset.var})`
        );
    };

    return (
        <header>
            <nav className="flex justify-between px-4 py-2">
                <div className="flex justify-between">
                    {accentVars.map((accent: string, index: number) => (
                        <button
                            key={index + 1}
                            data-var={`accent${index + 1}`}
                            className={`p-4 ${accent}`}
                            onClick={handleClick}
                        ></button>
                    ))}
                </div>
            </nav>
        </header>
    );
}
