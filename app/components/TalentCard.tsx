"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export type Talent = {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  price?: number;
  tags?: string[];
};

export default function TalentCard({ talent }: { talent: Talent }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-2xl bg-white border border-black/5 shadow-[0_6px_24px_rgba(2,6,23,.06)] hover:shadow-[0_12px_36px_rgba(2,6,23,.12)] p-5 flex flex-col"
    >
      <div className="flex items-center gap-3">
        <img
          src={talent.avatar || "/placeholder-avatar.png"}
          alt={talent.name}
          className="h-12 w-12 rounded-xl object-cover"
        />
        <div>
          <h3 className="font-semibold">{talent.name}</h3>
          <p className="text-sm text-slate-600">{talent.title}</p>
        </div>
      </div>

      {talent.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {talent.tags.map((t) => (
            <span key={t} className="text-xs rounded-full bg-slate-100 px-2 py-1">{t}</span>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-slate-700 font-medium">
          {talent.price ? `$${talent.price}/hr` : "Fixed price"}
        </span>
        <Link
          href={`/profile/${talent.id}`}
          className="rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-500 text-white
                     hover:bg-white hover:text-emerald-600 hover:border-emerald-600 border border-transparent
                     transition shadow hover:shadow-emerald-200/50"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
}
