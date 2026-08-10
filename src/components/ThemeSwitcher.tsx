export default function ThemeSwitcher({
    accentVars,
    activeAccent,
    handleClick,
}) {
    return (
        <div className="flex justify-between">
            {accentVars.map((accent: string) => (
                <button
                    key={accent}
                    style={{
                        backgroundColor: `var(--color-${accent})`,
                    }}
                    className={`p-4 ${
                        activeAccent === accent ? "active-theme-button" : ""
                    }`}
                    onClick={() => handleClick(accent)}
                ></button>
            ))}
        </div>
    );
}
