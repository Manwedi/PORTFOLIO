export const Button = ({ className, size, children }) => {
    const baseClass = "bg-primary text-primary-foreground hover:bg-primary/90";
    return (
        <button className={className} >
            <span className={`text-sm font-medium ${size === "small" ? "px-4 py-2" : "px-6 py-3"} rounded-full`}>
                {children}
                </span>
        </button>
    );
}