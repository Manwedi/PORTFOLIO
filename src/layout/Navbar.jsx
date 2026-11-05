export const Navbar = () => {
  return (
    <header>
        <nav>
            <a>
                MC<span>.</span>
            </a>

            {/* Desktop Nav */}
            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <a key={link.id} href={link.href}>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    </header>
    );
}