"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const headingWords = [
  "Launch",
  "your",
  "profile.",
  "Get",
  "discovered.",
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Headline - staggered entrance + subtle glow */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-zinc-100"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 }, // keep container visible to stagger children
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.05 },
          },
        }}
      >
        {headingWords.map((w, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2 [text-shadow:_0_2px_10px_rgba(59,130,246,0.25)]"
            variants={{
              hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {w}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 text-lg text-zinc-300 max-w-xl"
      >
        Get listed on the Talent Board in minutes. One small entry fee. Global
        visibility. Cancel anytime.
      </motion.p>

      {/* Buttons with lift+glow and shimmer sweep */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        {/* Primary button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 28px rgba(37,99,235,0.35)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 240, damping: 16 }}
          className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400/60"
        >
          {/* Shimmer sweep */}
          <motion.span
            className="pointer-events-none absolute inset-0 -translate-x-full rounded-lg bg-gradient-to-r from-transparent via-white/25 to-transparent"
            whileHover={{ x: "140%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <span className="relative z-10">Launch My Profile – $7</span>
        </motion.a>

        {/* Secondary button (Link + motion child) */}
        <Link href="/board" className="inline-block">
          <motion.span
            whileHover={{ scale: 1.05, boxShadow: "0 8px 22px rgba(59,130,246,0.25)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: 16 }}
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-500 text-blue-300/90 bg-white/5 backdrop-blur hover:bg-blue-500/10 hover:text-blue-200 font-medium shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            {/* Shimmer sweep */}
            <motion.span
              className="pointer-events-none absolute inset-0 -translate-x-full rounded-lg bg-gradient-to-r from-transparent via-blue-200/25 to-transparent"
              whileHover={{ x: "140%" }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            />
            <span className="relative z-10">Preview the Talent Board</span>
          </motion.span>
        </Link>
      </motion.div>

      {/* Footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 text-sm text-zinc-400 max-w-lg"
      >
        • Public profile you control • Searchable by recruiters • Edit anytime • Secure Stripe
        checkout (test mode)
      </motion.p>
    </main>
  );
}
