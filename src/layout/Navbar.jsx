const navLinks = [

];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight hover:text-primary">
                MC<span>.</span>
            </a>

            {/* Desktop Nav */}
            <div className="flex items-center gap-1">
                <div className="glass rounded-full px-3 py-1 flex items-center gap-2">
                    {navLinks.map((link, index) => (
                        <a key={link.id} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
    );
}