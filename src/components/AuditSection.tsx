import { FormEvent, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function AuditSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-20 md:py-28">
      <div ref={ref} className="container max-w-4xl">
        <div className={`dark-surface border border-primary/40 rounded-2xl p-7 md:p-9 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase">Free Website Audit</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-balance">
            Get a free 5-point audit of your current website
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
            I will review speed, mobile UX, CTA clarity, local SEO basics, and lead capture. You get practical fixes you can apply immediately.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-border bg-background/40 p-5">
              <p className="font-semibold">Audit request sent.</p>
              <p className="text-sm text-muted-foreground mt-1">I will contact you soon with your personalized review.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-3 gap-3">
              <input
                required
                placeholder="Your name"
                className="px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                required
                type="url"
                placeholder="Your website URL"
                className="px-3.5 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-semibold py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Request Free Audit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
