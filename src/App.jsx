import EarlyAccessSection from "./EarrlyAccess/EarlyAccessSection";
import FeaturesSection from "./Features/FeaturesSection";
import FooterSection from "./Footer/FooterSection";
import Header from "./Header/Header";
import HeroSection from "./Hero/HeroSection";
import ProductiveSection from "./Productive/ProductiveSection";
import TestimonialsSections from "./Testimonials/TestimonialsSections";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductiveSection />
      <TestimonialsSections />
      <EarlyAccessSection />
      <FooterSection />
    </div>
  );
}

export default App;
