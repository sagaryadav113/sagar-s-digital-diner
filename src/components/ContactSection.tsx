import { useState, type FormEvent } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Let's build your website
          </h2>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 max-w-4xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          {/* Info */}
          <div className="space-y-6 dark-surface border border-border rounded-2xl p-6 sm:p-8 shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <a href="tel:+918957043967" className="font-medium hover:text-primary transition-colors">
                +91 8957043967
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
              <a
                href="https://wa.me/918957043967?text=Hi%20Sagar%2C%20I%20need%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,42%)] text-white font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.11 1.519 5.838L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.78 9.78 0 01-5.202-1.49l-.373-.222-3.862 1.01 1.032-3.77-.244-.387A9.78 9.78 0 012.18 12c0-5.413 4.407-9.82 9.82-9.82S21.82 6.587 21.82 12 17.413 21.82 12 21.82z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Availability</p>
              <p className="font-medium">Mon – Sat, 10 AM – 8 PM IST</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Book a quick call</p>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Book 15-Minute Call
              </a>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="flex items-center justify-center dark-surface rounded-xl p-8 border border-border shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
              <div className="text-center">
                <span className="text-4xl">✅</span>
                <p className="mt-3 font-semibold text-lg">Message sent!</p>
                <p className="text-sm text-muted-foreground mt-1">I'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dark-surface rounded-xl p-6 border border-border space-y-4 shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
              <div>
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  required
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  required
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={3}
                  required
                  className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Tell me about your business..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
