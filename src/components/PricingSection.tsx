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

const packages = [
  {
    name: "Starter",
    price: "₹5,000",
    bestFor: "Best for: New local businesses",
    points: ["One-page website", "WhatsApp + Call buttons", "Google Maps integration"],
  },
  {
    name: "Growth",
    price: "₹9,000",
    bestFor: "Best for: Restaurants scaling orders",
    points: ["Multi-section conversion layout", "Menu + gallery + lead form", "Basic local SEO setup"],
    highlight: true,
  },
  {
    name: "Pro",
    price: "₹15,000",
    bestFor: "Best for: Competitive local brands",
    points: ["Custom pages and content strategy", "Performance and analytics setup", "Priority post-launch support"],
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();
  const receiptSampleImage = `${import.meta.env.BASE_URL}images/payment-receipt-sample.png`;

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative dark-surface border rounded-2xl p-6 ${
                pkg.highlight ? "border-primary shadow-[0_20px_38px_rgba(0,0,0,0.35)]" : "border-border"
              } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.08 + index * 0.08}s` }}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-5 text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
                  Popular Choice
                </span>
              )}
              <p className="font-semibold text-lg">{pkg.name}</p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight">{pkg.price}</p>
              <p className="mt-2 text-xs text-primary font-medium">{pkg.bestFor}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {pkg.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline underline-offset-4">
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package card */}
          <div
            className={`relative dark-surface border-2 border-primary rounded-2xl p-8 shadow-[0_18px_36px_rgba(0,0,0,0.3)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
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
              className="mt-8 block text-center bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Get Started
            </a>
          </div>

          {/* Update charges */}
          <div
            className={`dark-surface border border-border rounded-2xl p-8 shadow-[0_18px_36px_rgba(0,0,0,0.28)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
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

        <div
          className={`mt-8 max-w-4xl mx-auto dark-surface border border-border rounded-2xl p-6 md:p-8 shadow-[0_18px_36px_rgba(0,0,0,0.28)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.32s" }}
        >
          <p className="text-sm text-muted-foreground font-medium">Transparent Billing</p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight">Sample Payment Receipt</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            After payment, you receive a clear confirmation receipt with transaction details and project reference.
          </p>
          <div className="mt-6 grid md:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
            <img
              src={receiptSampleImage}
              alt="Sample payment receipt"
              className="w-full max-w-md rounded-xl border border-border/70 shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
            />
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>• Receipt shared immediately after payment.</li>
              <li>• Includes amount, date, payment mode, and project reference.</li>
              <li>• Delivered on WhatsApp and email for easy record keeping.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
