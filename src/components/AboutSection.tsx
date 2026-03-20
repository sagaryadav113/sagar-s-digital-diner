import { useScrollReveal } from "./useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28">
      <div
        ref={ref}
        className={`container max-w-3xl transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Building digital homes for local businesses
        </h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-pretty">
          <p>
            I'm a freelance web developer based in India, specializing in creating simple, effective websites for restaurants and local businesses. My goal is to help small business owners establish a strong online presence without breaking the bank.
          </p>
          <p>
            With fast delivery in just 2–3 days, affordable pricing starting at ₹5,000, and a focus on mobile-first design, I make it easy for your customers to find you, see your menu, and reach out — all from their phone.
          </p>
        </div>
      </div>
    </section>
  );
}
