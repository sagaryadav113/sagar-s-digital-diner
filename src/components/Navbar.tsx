import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/70 shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg tracking-tight">
          WebwithSagar<span className="text-primary">.</span>
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
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Book Call
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
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
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
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-center"
            >
              Book Call
            </a>
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="text-sm font-medium border border-border px-4 py-2.5 rounded-lg text-center hover:bg-secondary transition-colors"
              >
                {isDark ? "Switch to Light" : "Switch to Dark"}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
