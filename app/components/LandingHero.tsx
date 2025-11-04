'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto flex w-full max-w-md items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-sm shadow ring-1 ring-black/5">
            <span>⭐</span><span className="font-medium">Rated 4.9/5</span><span className="text-gray-500">by 10,000+ Professionals</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mt-6 max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Turn Your <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Expertise</span> into Income
          </h1>
          <p className="mt-4 text-gray-600 sm:text-lg">
            Join the platform where professionals monetize their skills. <span className="font-medium text-emerald-600">Get discovered and get paid.</span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/profile/start" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow transition hover:bg-emerald-700">
                🚀 START EARNING – $7
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/board" className="inline-flex items-center rounded-xl px-5 py-3 font-semibold text-gray-700 ring-1 ring-gray-200 bg-white transition hover:bg-gray-50 hover:shadow">
                Browse Talents
              </Link>
            </motion.div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <span>✅ One-time payment</span><span>✅ Lifetime access</span><span>✅ 7 free credits</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
