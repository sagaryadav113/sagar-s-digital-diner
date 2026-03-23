import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    name: "Brew Haven Delight",
    type: "Cafe",
    websiteUrl: "https://sagaryadav113.github.io/brew-haven-delight/",
  },
  {
    name: "Madras Kitchen Hub",
    type: "Restaurant",
    websiteUrl: "https://sagaryadav113.github.io/madras-kitchen-hub/",
  },
  {
    name: "Flavor Hub",
    type: "Restaurant",
    websiteUrl: "https://sagaryadav113.github.io/flavor-hub/",
  },
  {
    name: "Alpna Bites",
    type: "Restaurant",
    websiteUrl: "https://sagaryadav113.github.io/alpna-bites/",
  },
];

const filters = ["All", "Restaurant", "Cafe"];

export default function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Recent projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((p, i) => (
            <div
              key={p.name}
              className={`group dark-surface border border-border rounded-xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.28)] hover:shadow-[0_18px_36px_rgba(0,0,0,0.36)] transition-shadow duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="relative h-44 overflow-hidden bg-background/40 border-b border-border">
                {p.websiteUrl ? (
                  <>
                    <iframe
                      src={p.websiteUrl}
                      title={`${p.name} live preview`}
                      loading="lazy"
                      className="absolute top-0 left-0 h-[200%] w-[200%] scale-[0.5] origin-top-left pointer-events-none border-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center text-4xl opacity-40">🍽️</div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{p.type}</p>
                {p.websiteUrl ? (
                  <a
                    href={p.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm text-primary font-medium hover:underline underline-offset-4 transition-all"
                  >
                    View Website →
                  </a>
                ) : (
                  <p className="mt-3 text-sm text-muted-foreground">Add project URL to enable View Website</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 max-w-5xl mx-auto dark-surface border border-border rounded-2xl p-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase">Before vs After</p>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border p-5 bg-background/30">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Before</p>
              <h3 className="mt-2 font-semibold">No clear order journey</h3>
              <p className="mt-2 text-sm text-muted-foreground">Customers had to search social media for menu, location, and phone number.</p>
            </div>
            <div className="rounded-xl border border-primary/40 p-5 bg-primary/10">
              <p className="text-xs uppercase tracking-wider text-primary">After</p>
              <h3 className="mt-2 font-semibold">One-click conversion path</h3>
              <p className="mt-2 text-sm text-muted-foreground">Website now guides users from menu to WhatsApp order or direct call in seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
