'use client';

import LandingHero from './components/LandingHero';
import LandingCategories from './components/LandingCategories';
import LandingFeatures from './components/LandingFeatures';
import LandingPricing from './components/LandingPricing';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40 text-gray-900">
      {/* Hero */}
      <LandingHero />

      {/* Categories */}
      <section className="mt-16">
        <LandingCategories />
      </section>

      {/* Features */}
      <section className="mt-16">
        <LandingFeatures />
      </section>

      {/* Pricing */}
      <section className="mt-20">
        <LandingPricing />
      </section>
    </main>
  );
}
