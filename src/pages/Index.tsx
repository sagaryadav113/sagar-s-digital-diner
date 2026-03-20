import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </>
  );
}
