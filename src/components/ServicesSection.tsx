import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: "🍽️",
    title: "Restaurant Website Design",
    desc: "Custom-built websites tailored for restaurants with menus, galleries, and online ordering.",
  },
  {
    icon: "📸",
    title: "Menu & Gallery Website",
    desc: "Beautiful food photography showcases and interactive digital menus.",
  },
  {
    icon: "💬",
    title: "WhatsApp Ordering",
    desc: "Integrated WhatsApp buttons so customers can order directly from your site.",
  },
  {
    icon: "📍",
    title: "Google Maps Integration",
    desc: "Embedded maps and directions so customers can find your location easily.",
  },
  {
    icon: "🔍",
    title: "SEO Optimized Websites",
    desc: "Built for search engines so your business shows up when people search locally.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Everything your restaurant needs online
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-background rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
