import { useScrollReveal } from "./useScrollReveal";

const studies = [
  {
    name: "The Spice Kitchen",
    challenge: "Low direct calls from Google listing.",
    result: ["+67% call clicks in 30 days", "+41% WhatsApp enquiries", "94 mobile speed score"],
  },
  {
    name: "Cafe Mellow",
    challenge: "Menu was only shared on Instagram DMs.",
    result: ["2.4x more menu views", "+32% repeat orders", "Site launched in 3 days"],
  },
  {
    name: "Tandoor Express",
    challenge: "No clear order path for delivery customers.",
    result: ["+58% map direction taps", "+22% weekend orders", "0 downtime since launch"],
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Real outcomes, not just designs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <article
              key={study.name}
              className={`dark-surface border border-border rounded-2xl p-6 shadow-[0_16px_34px_rgba(0,0,0,0.3)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">{study.name}</p>
              <p className="mt-3 text-sm text-muted-foreground">{study.challenge}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {study.result.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline underline-offset-4">
                Get similar results
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
