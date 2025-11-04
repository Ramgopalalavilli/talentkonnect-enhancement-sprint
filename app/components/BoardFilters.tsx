'use client';

import * as React from 'react';

export type Filters = {
  skill: string;
  budget: '' | 'low' | 'medium' | 'high';
  time: 'Any Time' | 'Tonight' | 'Weekend' | 'Weekdays';
  city: 'All Cities' | string;
};

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  skills?: string[];
  cities?: string[];
};

export default function BoardFilters({ filters, setFilters, skills = [], cities = [] }: Props) {
  const onChange =
    (key: keyof Filters) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFilters((f) => ({ ...f, [key]: e.target.value }));
    };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 md:p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Skill */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Skill</label>
          <select
            value={filters.skill}
            onChange={onChange('skill')}
            className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
          >
            <option value="">All Skills</option>
            {skills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Budget</label>
          <select
            value={filters.budget}
            onChange={onChange('budget')}
            className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
          >
            <option value="">Any Budget</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 — $50</option>
            <option value="high">Above $50</option>
          </select>
        </div>

        {/* Time */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">When</label>
          <select
            value={filters.time}
            onChange={onChange('time')}
            className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
          >
            <option value="Any Time">Any Time</option>
            <option value="Tonight">Tonight</option>
            <option value="Weekend">Weekend</option>
            <option value="Weekdays">Weekdays</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">City</label>
          <select
            value={filters.city}
            onChange={onChange('city')}
            className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
          >
            <option value="All Cities">All Cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
