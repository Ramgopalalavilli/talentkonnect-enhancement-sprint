'use client';
import Link from 'next/link';

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small rating pill */}
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
            ⭐ Rated 4.9/5 by 10,000+ professionals
          </p>

          {/* Headline */}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Launch Your <span className="text-emerald-600">TalentBoard</span> Profile Today.
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-lg leading-7 text-gray-600">
            Pay $7, create your profile, and get discovered instantly by global clients.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/profile/start"
              className="inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow
                         transition hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start My Profile →
            </Link>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Secure Payment
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> 4.9/5 Rating
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> 24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
