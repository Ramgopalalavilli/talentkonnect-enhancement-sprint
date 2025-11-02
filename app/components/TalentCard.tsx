"use client";

import { motion } from "framer-motion";

export interface Profile {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
}

export default function TalentCard({ profile }: { profile: Profile }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-2xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-100/40 dark:border-emerald-900/30 dark:bg-zinc-900/50 dark:hover:shadow-emerald-900/30 transition-all"
    >
      {/* Avatar & name */}
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-14 w-14 rounded-full border border-emerald-200/80 bg-emerald-50 p-0.5 dark:border-emerald-900/50"
        />
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {profile.name}
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
            {profile.role}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
