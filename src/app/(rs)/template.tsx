export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-in">
            {children}
        </div>
    );
}
