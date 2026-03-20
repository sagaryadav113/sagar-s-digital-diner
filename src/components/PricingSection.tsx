import { useScrollReveal } from "./useScrollReveal";

const features = [
  "One-page modern website",
  "Mobile-friendly design",
  "Menu section",
  "Photo gallery",
  "Opening hours",
  "Google Maps integration",
  "Call & WhatsApp buttons",
  "Customer feedback form",
  '"Rate us on Google" feature',
  "Custom domain (1st year included)",
  "Hosting included",
  "7 days free minor edits",
];

const updates = [
  { item: "Menu changes", price: "₹200" },
  { item: "Add photo", price: "₹200" },
  { item: "Text edits", price: "₹200" },
  { item: "New section", price: "₹500" },
  { item: "Major redesign", price: "₹1,000+" },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package card */}
          <div
            className={`relative bg-background border-2 border-primary rounded-2xl p-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="absolute -top-3.5 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <p className="text-sm text-muted-foreground font-medium">Restaurant Website Package</p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">₹5,000</span>
              <span className="text-muted-foreground text-sm">one-time</span>
            </div>
            <ul className="mt-6 space-y-2.5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8.5l3.5 3.5 6.5-7" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 block text-center bg-primary text-primary-foreground font-medium py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Get Started
            </a>
          </div>

          {/* Update charges */}
          <div
            className={`bg-background border border-border rounded-2xl p-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s" }}
          >
            <p className="text-sm text-muted-foreground font-medium">After Launch</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight">Update Charges</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Need changes after your site goes live? Here's what it costs.
            </p>
            <div className="mt-6 space-y-0 divide-y divide-border">
              {updates.map((u) => (
                <div key={u.item} className="flex items-center justify-between py-3.5">
                  <span className="text-sm">{u.item}</span>
                  <span className="text-sm font-semibold font-mono">{u.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              * First 7 days of minor edits are free with every package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
