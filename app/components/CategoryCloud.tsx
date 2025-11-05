"use client";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "./motion";
import { Dumbbell, Code, Music, Brain, Wallet, Utensils } from "lucide-react";

type Item = { title: string; subtitle: string; Icon: any };
const items: Item[] = [
  { title: "AI Prompt Engineering", subtitle: "High Demand", Icon: Brain },
  { title: "Personal Fitness", subtitle: "High Demand", Icon: Dumbbell },
  { title: "Web Development", subtitle: "High Demand", Icon: Code },
  { title: "Music Production", subtitle: "High Demand", Icon: Music },
  { title: "Financial Consulting", subtitle: "High Demand", Icon: Wallet },
  { title: "Culinary Masterclasses", subtitle: "High Demand", Icon: Utensils },
];

export default function CategoryCloud() {
  return (
    <section id="categories" className="py-10">
      <div className="container">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-6 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-700">
          <span className="rounded-full bg-white/70 border border-black/5 px-3 py-1">Join 500+ professionals</span>
          <span className="rounded-full bg-white/70 border border-black/5 px-3 py-1">$2.8K avg monthly earnings</span>
          <span className="rounded-full bg-white/70 border border-black/5 px-3 py-1">24h to your first client</span>
          <span className="rounded-full bg-white/70 border border-black/5 px-3 py-1">500+ active professionals</span>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
          {items.map(({ Icon, title, subtitle }) => (
            <motion.div key={title} variants={zoomIn}
              whileHover={{ y: -6, transition: { duration: .2 } }}
              className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,.06)] border border-black/5 p-4 w-[220px] sm:w-[240px] text-center">
              <div className="mx-auto inline-grid size-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="text-sm text-slate-500">{subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
