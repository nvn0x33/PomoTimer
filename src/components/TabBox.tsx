import type { Tab } from "../types/Tab.ts";

export default function TabBox({
    tabs,
    activeTab,
    onSelect,
}: {
    tabs: Tab[];
    activeTab: Tab;
    onSelect: (tab: Tab) => void;
}) {
    return (
        <div className="flex gap-4 max-sm:gap-0">
            {tabs.map((tab: Tab) => (
                <button
                    key={tab.name}
                    onClick={() => {
                        onSelect(tab);
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
    );
}
