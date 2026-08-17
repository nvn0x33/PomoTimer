export default function ThemeButton({
    text,
    handleClick,
}: {
    text: string;
    handleClick: () => void;
}) {
    return (
        <button
            onClick={handleClick}
            className="bg-white px-8 py-2 text-theme font-bold text-lg self-center"
        >
            {text}
        </button>
    );
}
