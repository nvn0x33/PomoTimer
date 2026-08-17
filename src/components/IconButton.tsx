export default function IconButton({ children, ...props }) {
    return (
        <button
            className="px-1 py-1 rounded-sm bg-white/10 hover:bg-white/20 self-center"
            {...props}
        >
            {children}
        </button>
    );
}
