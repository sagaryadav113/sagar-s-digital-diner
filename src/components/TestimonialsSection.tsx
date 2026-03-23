import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    name: "Rajat Mehta",
    business: "Owner, The Spice Kitchen",
    quote: "Within two weeks, we started getting daily WhatsApp orders from new customers.",
  },
  {
    name: "Neha Verma",
    business: "Founder, Cafe Mellow",
    quote: "Sagar delivered exactly on time and made our menu super easy for customers to browse.",
  },
  {
    name: "Imran Khan",
    business: "Manager, Tandoor Express",
    quote: "Our Google Maps taps increased and customers now call directly from the website.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Trusted by local business owners</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`dark-surface border border-border rounded-2xl p-6 shadow-[0_16px_34px_rgba(0,0,0,0.28)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <blockquote className="text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
