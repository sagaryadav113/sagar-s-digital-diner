import { useScrollReveal } from "./useScrollReveal";

const rows = [
  { label: "Delivery time", me: "2-3 days", agency: "2-6 weeks" },
  { label: "Starting price", me: "From Rs 5,000", agency: "Rs 25,000+" },
  { label: "Communication", me: "Direct with developer", agency: "Account manager layers" },
  { label: "Post-launch edits", me: "Fast and affordable", agency: "Higher change fees" },
];

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container max-w-4xl">
        <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Why clients choose me over agencies</h2>
        </div>

        <div className={`dark-surface border border-border rounded-2xl overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="grid grid-cols-3 text-sm font-semibold border-b border-border">
            <p className="p-4">Criteria</p>
            <p className="p-4 text-primary">Freelancer (Me)</p>
            <p className="p-4 text-muted-foreground">Typical Agency</p>
          </div>
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-3 text-sm border-b border-border/70 last:border-b-0">
              <p className="p-4 text-muted-foreground">{row.label}</p>
              <p className="p-4 font-medium">{row.me}</p>
              <p className="p-4 text-muted-foreground">{row.agency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
