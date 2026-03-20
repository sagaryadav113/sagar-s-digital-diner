import { useScrollReveal } from "./useScrollReveal";

const projects = [
  { name: "The Spice Kitchen", type: "North Indian Restaurant", color: "bg-amber-50" },
  { name: "Café Mellow", type: "Café & Bakery", color: "bg-emerald-50" },
  { name: "Tandoor Express", type: "Fast Food & Delivery", color: "bg-rose-50" },
];

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="portfolio" className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Recent projects
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-background rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className={`${p.color} h-44 flex items-center justify-center`}>
                <span className="text-4xl opacity-40">🍽️</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{p.type}</p>
                <button className="mt-3 text-sm text-primary font-medium hover:underline underline-offset-4 transition-all">
                  View Website →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
