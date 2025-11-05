"use client";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "./motion";
import { ShieldCheck, IdCard, Coins } from "lucide-react";

const items = [
  { icon: IdCard, title: "Build Professional Profile", text: "Create a stunning portfolio that showcases your unique skills and expertise." },
  { icon: ShieldCheck, title: "Instant Visibility", text: "Get discovered immediately when clients search for your specific skills." },
  { icon: Coins, title: "Start Earning", text: "Receive booking requests and get paid for your consultation sessions." },
];

export default function Steps() {
  return (
    <section id="how" className="py-14">
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={zoomIn}
              className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(2,6,23,.06)] border border-black/5 p-6">
              <div className="inline-grid size-12 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="text-slate-700">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
