"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white dark:from-[#0b1120] dark:via-[#0d1428] dark:to-[#0b1120]">
      {/* Hero */}
      <section className="border-b border-emerald-100/60 dark:border-emerald-900/20">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            <span className="block text-zinc-900 dark:text-white">About</span>
            <span className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              TalentKonnect
            </span>
          </motion.h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            We help people find skilled talent quickly — and help skilled people get discovered.
            No agencies, no confusion. Just clear profiles, verified skills, and simple booking.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/board"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Explore the Board
            </Link>
            <Link
              href="/launch"
              className="inline-flex items-center rounded-xl border border-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
            >
              + Add Your Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Clear, searchable profiles",
                desc: "Roles, skills, and tags you can scan in seconds. No fluff.",
              },
              {
                title: "Fair, transparent pricing",
                desc: "One small entry fee to list. Keep what you earn from jobs.",
              },
              {
                title: "Built for speed",
                desc: "Filters, animations, and a clean UI that gets out of your way.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-emerald-900/30 dark:bg-zinc-900/50"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-emerald-100/60 bg-white/60 backdrop-blur dark:border-emerald-900/20 dark:bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">How it works</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Create your profile",
                text: "Add your role, skills, avatar, and a short intro.",
              },
              {
                step: "2",
                title: "Get listed",
                text: "Pay a small entry fee. Your profile appears on the Board.",
              },
              {
                step: "3",
                title: "Get booked",
                text: "People find you by skills and reach out directly.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-xl border border-emerald-100/80 bg-white p-5 shadow-sm dark:border-emerald-900/30 dark:bg-zinc-900/60"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
                  {s.step}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility / Metrics */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { k: "95%", v: "Satisfaction", t: "Based on early user feedback" },
              { k: "7$", v: "Entry fee", t: "List once. Keep your earnings." },
              { k: "<1m", v: "Search speed", t: "Optimized for fast decisions" },
            ].map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-xl border border-emerald-100/80 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm dark:border-emerald-900/30 dark:bg-zinc-900/50"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-3xl font-extrabold text-transparent">
                  {m.k}
                </div>
                <div className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
                  {m.v}
                </div>
                <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{m.t}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-emerald-100/60 dark:border-emerald-900/20">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">FAQ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                q: "Is there a commission on jobs?",
                a: "No. We only charge a small listing fee to keep the board clean and fast.",
              },
              {
                q: "How do I get verified?",
                a: "Complete your profile with clear skills and a real avatar. Manual checks are added gradually.",
              },
              {
                q: "Can I edit my profile later?",
                a: "Yes, you can update skills and details anytime from your profile.",
              },
              {
                q: "What’s the refund policy?",
                a: "If your profile is not approved for any reason, your listing fee is refunded.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-xl border border-emerald-100/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-emerald-900/30 dark:bg-zinc-900/50"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{f.q}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/launch"
              className="inline-flex items-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              + Add Your Profile
            </Link>
            <Link
              href="/board"
              className="inline-flex items-center rounded-xl border border-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
            >
              Browse the Board
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
