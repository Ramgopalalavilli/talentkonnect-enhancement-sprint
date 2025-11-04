'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPricing() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-emerald-50/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }} className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ready to <span className="text-emerald-600">Launch</span> Your Career?</h2>
            <ul className="mt-6 space-y-4 text-base text-gray-700">
              {[
                'Lifetime access to your professional profile',
                '7 complimentary booking credits ($210 value)',
                'Premium placement in search results',
                'Secure Stripe payment processing',
                'Dedicated customer support team',
                'Zero commission on your earnings',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3"><span>✅</span>{t}</li>
              ))}
            </ul>
          </div>

          <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-8 sm:p-10">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900">$7</div>
              <div className="mt-1 text-sm text-gray-600">One-time investment</div>
              <div className="text-xs text-gray-500">Lifetime access • No hidden fees</div>
              <Link href="/profile/start" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700">
                🚀 START MY PROFILE →
              </Link>
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-gray-600">
                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-3 py-2">🔒 <span>Secure Payment</span></div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-3 py-2">⭐ <span>4.9/5 Rating</span></div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-3 py-2">🕑 <span>24/7 Support</span></div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-gray-500">
                <span className="rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-100">30-second setup</span>
                <span className="rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-100">Instant access</span>
                <span className="rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-100">No hidden fees</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
