'use client';

import { useMemo, useState } from 'react';
import BoardFilters, { type Filters } from '../components/BoardFilters';
import TalentCard, { type Talent } from '../components/TalentCard';

const TALENTS: Talent[] = [
  {
    id: 'aisha',
    name: 'Aisha Verma',
    city: 'Mumbai',
    headline: 'Creative UX designer turning ideas into elegant digital experiences.',
    price: 25,
    rating: 4.9,
    tags: ['UX Design', 'Figma', 'Prototyping', 'User Research'],
    extraCount: 3,
    availability: 'Tonight',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 'liam',
    name: 'Liam Board',
    city: 'Bengaluru',
    headline: 'Full-stack developer crafting fast, scalable web apps with precision.',
    price: 30,
    rating: 4.8,
    tags: ['Full-Stack Dev', 'Next.js', 'React', 'Node.js'],
    extraCount: 2,
    availability: 'Weekend',
    image: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
  {
    id: 'zara',
    name: 'Zara Khan',
    city: 'Abu Dhabi',
    headline: 'Expert resume writer and career strategist for modern professionals.',
    price: 18,
    rating: 4.9,
    tags: ['Resume Writer', 'Career Coach', 'LinkedIn', 'ATS Optimization'],
    extraCount: 4,
    availability: 'Weekend',
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    id: 'Manpreeth',
    name: 'Manpreeth Singh',
    city: 'Delhi',
    headline: 'Certified personal trainer transforming lives through fitness and balance.',
    price: 20,
    rating: 4.8,
    tags: ['Personal Fitness', 'Nutrition', 'HIIT', 'Body Sculpting'],
    extraCount: 1,
    availability: 'Tonight',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 'sophia',
    name: 'Sophia Amandaa',
    city: 'Chennai',
    headline: 'Marketing strategist helping startups grow through brand storytelling.',
    price: 22,
    rating: 4.7,
    tags: ['Marketing', 'SEO', 'Brand Strategy', 'Content Creation'],
    extraCount: 2,
    availability: 'Weekdays',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

export default function BoardPage() {
  const skills = useMemo(
    () => Array.from(new Set(TALENTS.flatMap((t) => t.tags))).sort(),
    []
  );
  const cities = useMemo(
    () => Array.from(new Set(TALENTS.map((t) => t.city))).sort(),
    []
  );

  const [filters, setFilters] = useState<Filters>({
    skill: '',
    budget: '',
    time: '',
    city: '',
  });

  const filtered = useMemo(() => {
    return TALENTS.filter((t) => {
      const skillOk = !filters.skill || t.tags.includes(filters.skill);
      const budgetOk =
        !filters.budget ||
        (filters.budget === 'low' && t.price <= 10) ||
        (filters.budget === 'medium' && t.price > 10 && t.price <= 50) ||
        (filters.budget === 'high' && t.price > 50);
      const timeOk =
        !filters.time ||
        t.availability === filters.time ||
        (filters.time === 'Weekdays' && t.availability === 'Weekdays');
      const cityOk = !filters.city || t.city === filters.city;

      return skillOk && budgetOk && timeOk && cityOk;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50/40 to-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Find a skill. <span className="text-emerald-600">Book it tonight.</span>
          </h1>
          <p className="mt-3 text-gray-600">
            From <span className="font-medium text-emerald-700">vodka cocktails</span> to{' '}
            <span className="font-medium text-emerald-700">party planning</span> to{' '}
            <span className="font-medium text-emerald-700">resume makeovers</span> — discover real
            people ready to help <span className="text-orange-600 font-semibold">now</span>.
          </p>
        </div>

        <div className="mt-8">
          <BoardFilters
            filters={filters}
            setFilters={setFilters}
            skills={skills}
            cities={cities}
          />
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Showing <span className="font-medium text-gray-900">{filtered.length}</span> professionals
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TalentCard key={t.id} talent={t} />
          ))}
        </div>
      </div>
    </main>
  );
}
