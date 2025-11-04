'use client';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: '👤',
    title: 'Build Professional Profile',
    desc: 'Create a stunning portfolio that showcases your unique skills and expertise.',
  },
  {
    icon: '⚡',
    title: 'Instant Visibility',
    desc: 'Get discovered immediately when clients search for your specific skills.',
  },
  {
    icon: '🚀',
    title: 'Start Earning',
    desc: 'Receive booking requests and get paid for your consultation sessions.',
  },
];

export default function LandingFeatures() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="rounded-2xl bg-white ring-1 ring-gray-100 p-6 shadow-sm transition
                         hover:-translate-y-1 hover:shadow-2xl hover:ring-emerald-200/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
