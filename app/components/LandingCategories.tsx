'use client';
import { motion } from 'framer-motion';

type Tile = { icon: string; title: string; note: string };

const TILES: Tile[] = [
  { icon: '🧠', title: 'AI Prompt Engineering', note: 'High Demand' },
  { icon: '💪', title: 'Personal Fitness', note: 'High Demand' },
  { icon: '💼', title: 'Financial Consulting', note: 'High Demand' },
  { icon: '💻', title: 'Web Development', note: 'High Demand' },
  { icon: '🍳', title: 'Culinary Masterclasses', note: 'High Demand' },
  { icon: '🎵', title: 'Music Production', note: 'High Demand' },
];

export default function LandingCategories() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {TILES.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="w-full max-w-xs rounded-2xl bg-white ring-1 ring-gray-100 p-5 shadow-sm transition
                         hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-200/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                {t.icon}
              </div>
              <h3 className="mt-4 font-semibold">{t.title}</h3>
              <p className="text-sm text-gray-500">{t.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
