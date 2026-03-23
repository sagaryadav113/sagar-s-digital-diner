import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "./useScrollReveal";

const faqs = [
  {
    q: "How quickly can you deliver my website?",
    a: "Most restaurant and local business websites are delivered in 2-3 days once content is ready.",
  },
  {
    q: "How many revisions are included?",
    a: "You get 7 days of free minor revisions after launch. Major redesign requests are priced separately.",
  },
  {
    q: "Who owns the domain and hosting?",
    a: "You own everything. I help set it up under your name and hand over full access.",
  },
  {
    q: "What are your payment terms?",
    a: "Usually 50 percent to start and 50 percent before launch. This can be adjusted for bigger projects.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. You can request updates with transparent per-change pricing.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-20 md:py-28">
      <div ref={ref} className="container max-w-3xl">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">Answers to common client questions</h2>
        </div>

        <div className={`dark-surface border border-border rounded-2xl px-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
