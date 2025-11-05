"use client";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "./motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const perks = [
  "Lifetime access to your professional profile",
  "7 complimentary booking credits ($210 value)",
  "Premium placement in search results",
  "Secure Stripe payment processing",
  "Dedicated customer support team",
  "Zero commission on your earnings",
];

export default function PricingCTA() {
  return (
    <section id="pricing" className="py-14">
      <div className="container grid lg:grid-cols-2 gap-8 items-stretch">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,.06)] border border-black/5 p-8">
          <h2 className="text-2xl font-bold">Ready to <span className="text-emerald-600">Launch</span> Your Career?</h2>
          <ul className="mt-6 space-y-3">
            {perks.map(p => (
              <li key={p} className="flex items-start gap-3 text-slate-700">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-sm text-slate-500">• 30-second setup • Instant access • 4.9★ Rating • 24/7 Support</div>
        </motion.div>

        <motion.div variants={zoomIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,.06)] border border-black/5 p-8 flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-extrabold">$7</div>
          <div className="text-sm text-slate-500">One-time investment</div>
          <div className="text-sm text-slate-500">Lifetime access • No hidden fees</div>
          <Link href="/launch"
            className="w-full rounded-xl px-6 py-3 font-semibold bg-emerald-500 hover:bg-emerald-600 text-white mt-6 inline-flex items-center justify-center">
            START MY PROFILE <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
