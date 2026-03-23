import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import PortfolioSection from "@/components/PortfolioSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import AuditSection from "@/components/AuditSection";
import ContactSection from "@/components/ContactSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <TestimonialsSection />
      <AboutSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <ComparisonSection />
      <PortfolioSection />
      <WhyChooseSection />
      <GuaranteeSection />
      <FAQSection />
      <AuditSection />
      <ContactSection />
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
