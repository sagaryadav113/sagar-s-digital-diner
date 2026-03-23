import { useScrollReveal } from "./useScrollReveal";

const steps = [
  {
    title: "Discovery",
    desc: "Quick 15-minute call to understand your business, audience, and goals.",
  },
  {
    title: "Design",
    desc: "I create a modern layout focused on trust, speed, and conversions.",
  },
  {
    title: "Build",
    desc: "You get a mobile-first site with WhatsApp, Maps, SEO basics, and lead capture.",
  },
  {
    title: "Launch",
    desc: "Domain, hosting, analytics, and go-live support included.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-20 md:py-28">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">A simple 4-step process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`dark-surface border border-border rounded-2xl p-5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.12 + i * 0.08}s` }}
            >
              <p className="text-xs font-semibold text-primary tracking-wider">STEP {i + 1}</p>
              <h3 className="mt-2 font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
