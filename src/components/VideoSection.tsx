import { useScrollReveal } from "./useScrollReveal";

export default function VideoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 section-alt">
      <div ref={ref} className="container max-w-4xl">
        <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Quick Intro Video</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Know who you are hiring in 60 seconds</h2>
          <p className="mt-3 text-sm text-muted-foreground">A quick intro so you can understand my working style before we start.</p>
        </div>

        <div className={`dark-surface border border-border rounded-2xl p-4 shadow-[0_18px_36px_rgba(0,0,0,0.3)] ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="aspect-video rounded-xl overflow-hidden bg-black/40">
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/65ALoG4S4mU"
              title="Sagar intro video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
