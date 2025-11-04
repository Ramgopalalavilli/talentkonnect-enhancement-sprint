'use client';

import { motion } from 'framer-motion';
import React from 'react';

export type Filters = {
  skill: string;
  budget: '' | 'low' | 'medium' | 'high';
  time: '' | 'Tonight' | 'Weekend' | 'Weekdays';
  city: string;
};

export default function BoardFilters({
  filters,
  setFilters,
  skills,
  cities,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  skills: string[];
  cities: string[];
}) {
  const set = (key: keyof Filters, value: Filters[keyof Filters]) =>
    setFilters((prev) => ({ ...prev, [key]: value } as Filters));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-gray-200 bg-white/70 backdrop-blur p-4 shadow-sm
                 hover:shadow-2xl hover:shadow-emerald-100/60 transition"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <Field label="💡 Skill">
          <select
            value={filters.skill}
            onChange={(e) => set('skill', e.target.value)}
            className="w-full rounded-xl border-gray-200 bg-white
                       focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400
                       hover:border-emerald-400 transition"
          >
            <option value="">All Skills</option>
            {skills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="💰 Budget">
          <select
            value={filters.budget}
            onChange={(e) => set('budget', e.target.value as Filters['budget'])}
            className="w-full rounded-xl border-gray-200 bg-white
                       focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400
                       hover:border-emerald-400 transition"
          >
            <option value="">Any Budget</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 – $50</option>
            <option value="high">Above $50</option>
          </select>
        </Field>

        <Field label="🕒 When">
          <select
            value={filters.time}
            onChange={(e) => set('time', e.target.value as Filters['time'])}
            className="w-full rounded-xl border-gray-200 bg-white
                       focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400
                       hover:border-emerald-400 transition"
          >
            <option value="">Any Time</option>
            <option value="Tonight">Tonight</option>
            <option value="Weekend">Weekend</option>
            <option value="Weekdays">Weekdays</option>
          </select>
        </Field>

        <Field label="📍 City">
          <select
            value={filters.city}
            onChange={(e) => set('city', e.target.value)}
            className="w-full rounded-xl border-gray-200 bg-white
                       focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400
                       hover:border-emerald-400 transition"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-gray-500">{label}</span>
      {children}
    </label>
  );
}
