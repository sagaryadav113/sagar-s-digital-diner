import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg tracking-tight">
          Sagar<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
