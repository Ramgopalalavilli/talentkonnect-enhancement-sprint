import Navbar from "./components/Navbar";
import LandingHero from "./components/LandingHero";
import CategoryCloud from "./components/CategoryCloud";
import Steps from "./components/Steps";
import PricingCTA from "./components/PricingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LandingHero />      
      <CategoryCloud />
      <Steps />
      <PricingCTA />
      <Footer />            
    </main>
  );
}
