import { useScrollReveal } from "./useScrollReveal";

export default function GuaranteeSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-24">
      <div ref={ref} className="container max-w-4xl">
        <div className={`dark-surface border border-primary/50 rounded-2xl p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.32)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase">No-Risk Guarantee</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-balance">
            Delivery in 3 days or you get a partial refund.
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            You also get 7 days of free revisions after launch. Clear timelines, clear communication, and no hidden surprises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
              Start Your Project
            </a>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border px-5 py-2.5 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Book 15-Min Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
