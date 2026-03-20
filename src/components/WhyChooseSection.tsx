import { useScrollReveal } from "./useScrollReveal";

const reasons = [
  { icon: "💰", title: "Affordable Pricing", desc: "Quality websites starting at just ₹5,000 — no hidden costs." },
  { icon: "⚡", title: "Fast Delivery", desc: "Your website ready in 2–3 days, not weeks." },
  { icon: "🎯", title: "Simple & Effective", desc: "Clean designs that help customers find what they need." },
  { icon: "🏪", title: "Local Business Focus", desc: "I understand what small businesses need to succeed online." },
];

export default function WhyChooseSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Why Choose Me</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Built different, on purpose
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`flex gap-4 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className="text-2xl shrink-0">{r.icon}</span>
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
