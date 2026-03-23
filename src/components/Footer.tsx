export default function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-[hsl(var(--section-alt))]">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 WebwithSagar. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="tel:+918957043967" className="hover:text-foreground transition-colors">Phone</a>
          <a
            href="https://wa.me/918957043967"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="container mt-4 text-center text-xs text-muted-foreground">
        WebwithSagar — Freelance Web Development
      </div>
    </footer>
  );
}
