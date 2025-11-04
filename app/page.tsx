import LandingHero from './components/LandingHero';
import LandingCategories from './components/LandingCategories';
import LandingFeatures from './components/LandingFeatures';
import LandingPricing from './components/LandingPricing';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden">
      <LandingHero />
      <LandingCategories />
      <LandingFeatures />
      <LandingPricing />
    </main>
  );
}
