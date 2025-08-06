import HeroSection from "@components/sections/hero-section";
import FeaturesSection from "@components/sections/features-section";
import PricingSection from "../components/sections/pricing-section";
import TestimonialsSection from "../components/sections/testimonials-section";
import FAQSection from "../components/sections/faq-section";
import Footer from "../components/sections/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
