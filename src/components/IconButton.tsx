export default function IconButton({ children, ...props }) {
    return (
        <button
            className="p-1 rounded-sm bg-white/10 hover:bg-white/20 self-center focus:outline-none focus:ring-2 focus:ring-white/40 shadow-black"
            {...props}
        >
            {children}
        </button>
    );
}
