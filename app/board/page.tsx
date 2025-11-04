'use client';

import { useMemo, useState } from 'react';
import BoardFilters, { type Filters } from '../components/BoardFilters';
import TalentCard, { type Talent } from '../components/TalentCard';

const initialFilters: Filters = {
  skill: '',
  budget: '',
  time: 'Any Time',
  city: 'All Cities',
};


const TALENTS: Talent[] = [
  {
    id: 'aisha',
    name: 'Aisha Verma',
    city: 'Mumbai',
    headline:
      'Creative UX designer turning ideas into elegant digital experiences.',
    price: 25,
    rating: 4.9,
    tags: ['UX Design', 'Figma', 'Prototyping', 'User Research'],
    extraCount: 3,
    availability: 'Tonight',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop',
  },
  {
    id: 'liam',
    name: 'Liam Board',
    city: 'Bengaluru',
    headline:
      'Full-stack developer crafting fast, scalable web apps with precision.',
    price: 30,
    rating: 4.8,
    tags: ['Full-Stack Dev', 'Next.js', 'React'],
    extraCount: 2,
    availability: 'Weekend',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&auto=format&fit=crop',
  },
  {
    id: 'zara',
    name: 'Zara Khan',
    city: 'Abu Dhabi',
    headline:
      'Expert resume writer and career strategist for modern professionals.',
    price: 18,
    rating: 4.9,
    tags: ['Resume Writer', 'Career Coach', 'LinkedIn'],
    extraCount: 4,
    availability: 'Any Time',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&auto=format&fit=crop',
  },
  {
    id: 'arun',
    name: 'Arun Menon',
    city: 'Kochi',
    headline:
      'Data analyst transforming raw data into crisp, actionable dashboards.',
    price: 15,
    rating: 4.7,
    tags: ['SQL', 'Dashboards', 'Data Studio'],
    extraCount: 2,
    availability: 'Any Time',
    image:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
  },
];


export default function BoardPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const skills = useMemo(() => {
    const s = new Set<string>();
    TALENTS.forEach((t) => t.tags.forEach((tag) => s.add(tag)));
    return Array.from(s).sort();
  }, []);

  const cities = useMemo(() => {
    const c = new Set<string>();
    TALENTS.forEach((t) => c.add(t.city));
    return Array.from(c).sort();
  }, []);

  const filtered = useMemo(() => {
    return TALENTS.filter((t) => {
      // skill
      if (filters.skill && !t.tags.includes(filters.skill)) return false;

      // budget
      if (filters.budget) {
        if (filters.budget === 'low' && !(t.price < 10)) return false;
        if (filters.budget === 'medium' && !(t.price >= 10 && t.price <= 50)) return false;
        if (filters.budget === 'high' && !(t.price > 50)) return false;
      }

      // time
      if (filters.time && filters.time !== 'Any Time') {
        if (t.availability !== filters.time) return false;
      }

      // city
      if (filters.city && filters.city !== 'All Cities') {
        if (t.city !== filters.city) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50/40 text-gray-900">
      {/* Filters */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <BoardFilters filters={filters} setFilters={setFilters} skills={skills} cities={cities} />
      </div>

      {/* Count */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mt-6 text-sm text-gray-600">
          Showing{' '}
          <span className="font-medium text-gray-900">{filtered?.length ?? 0}</span>{' '}
          {filtered && filtered.length === 1 ? 'professional' : 'professionals'}
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <TalentCard key={t.id} talent={t} />
        ))}
      </div>
    </main>
  );
}
