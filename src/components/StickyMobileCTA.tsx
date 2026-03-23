export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
      <div className="dark-surface border border-border rounded-xl p-2 grid grid-cols-3 gap-2 shadow-[0_14px_30px_rgba(0,0,0,0.38)]">
        <a href="tel:+918957043967" className="text-center text-xs font-semibold py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
          Call
        </a>
        <a
          href="https://wa.me/918957043967"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-xs font-semibold py-2 rounded-lg bg-[hsl(142,70%,42%)] text-white hover:opacity-90 transition-opacity"
        >
          WhatsApp
        </a>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-xs font-semibold py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Book Call
        </a>
      </div>
    </div>
  );
}
