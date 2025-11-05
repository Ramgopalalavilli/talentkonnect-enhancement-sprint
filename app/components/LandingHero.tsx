"use client";

import Link from "next/link";
import { Rocket, ArrowRight, Star } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 text-center">
      {/* soft bg blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* rating line */}
        <p className="inline-flex items-center gap-2 text-sm text-slate-600">
          <Star className="w-4 h-4 text-yellow-500" />
          Rated 4.9/5 by 10,000+ Professionals
        </p>

        {/* headline */}
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Launch Your <span className="text-indigo-600">TalentBoard</span> Profile Today.
        </h1>

        {/* subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Pay <span className="font-semibold text-emerald-600">$7</span>, create your profile, and get discovered instantly by global clients.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/launch"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full
                       shadow-[0_4px_14px_rgba(16,185,129,0.35)]
                       transition-all duration-300
                       hover:bg-emerald-600 hover:shadow-[0_6px_20px_rgba(16,185,129,0.5)]
                       hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            <Rocket className="w-5 h-5" />
            Start My Profile
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* perks */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">💳 One-time payment</span>
          <span className="inline-flex items-center gap-2">🔒 Lifetime access</span>
          <span className="inline-flex items-center gap-2">🎁 7 free credits</span>
        </div>
      </div>
    </section>
  );
}
