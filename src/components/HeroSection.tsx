export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center pt-16">
      <div className="container">
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
          </div>
        </div>
      </div>
    </section>
  );
}
