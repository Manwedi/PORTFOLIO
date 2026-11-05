const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
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
                        <a 
                        href={link.href} 
                        key={index} 
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full" >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/*CTA Button */}

            <div>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium rounded-full">
                    Get Started
                </button>
            </div>
        </nav>
    </header>
    );
}