import { useEffect, useState } from "react";
import VisitingCard from "./VisitingCard";

export default function HeroSection() {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let rafId = 0;
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setParallaxY(0);
        return;
      }

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const next = Math.min(window.scrollY * 0.08, 28);
        setParallaxY(next);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="hero-gradient relative isolate overflow-hidden min-h-[90vh] flex items-center pt-16">
      <div className="pointer-events-none absolute -top-14 -left-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl animate-orb-drift" />
      <div
        className="pointer-events-none absolute top-24 right-8 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl animate-orb-drift"
        style={{ animationDelay: "1.3s" }}
      />
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="max-w-2xl">
          <p
            className="text-sm font-medium text-primary tracking-wide uppercase mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Freelance Web Developer
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-balance animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm Sagar Yadav
          </h1>
          <p
            className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-lg text-pretty leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            Helping restaurants and local businesses get customers online — with fast, affordable, and effective websites.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border font-medium px-6 py-3 rounded-lg hover:bg-secondary transition-colors active:scale-[0.97]"
            >
              Contact Me
            </a>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary font-medium px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors active:scale-[0.97]"
            >
              Book 15-Min Call
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Local SEO Ready",
              "95+ Mobile Speed",
              "Secure Hosting",
              "Direct Developer Support",
            ].map((item, index) => (
              <span
                key={item}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.08}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: Visiting Card */}
        <div
          className="hidden md:flex justify-center md:justify-end transition-transform duration-300"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <VisitingCard />
        </div>
      </div>
    </section>
  );
}
