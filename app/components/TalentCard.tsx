'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export type Talent = {
  id: string;
  name: string;
  city: string;
  headline: string;
  price: number;
  rating: number;
  tags: string[];
  extraCount?: number;
  availability: string;
  image: string;
};

export default function TalentCard({ talent }: { talent: Talent }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Profile Image */}
      <div className="relative mx-auto mt-2 h-20 w-20 overflow-hidden rounded-full ring-1 ring-gray-200 shadow-sm">
        <Image
          src={talent.image}
          alt={talent.name}
          fill
          sizes="80px"
          className="object-cover object-center"
        />
      </div>

      {/* Name & Location */}
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{talent.name}</h3>
      <p className="text-sm text-gray-500">📍 {talent.city}</p>

      {/* Headline */}
      <p className="mt-2 text-sm text-gray-600">{talent.headline}</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {talent.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100"
          >
            {tag}
          </span>
        ))}
        {talent.extraCount && (
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
            +{talent.extraCount}
          </span>
        )}
      </div>

      {/* Price + Rating */}
      <div className="flex justify-between items-center w-full mt-4 text-sm">
        <p className="font-semibold text-gray-800">${talent.price} / session</p>
        <p className="text-amber-500 flex items-center gap-1">
          ⭐ {talent.rating}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 w-full">
        <button className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition">
          ▶ Play Intro
        </button>
        <button className="flex-1 bg-emerald-500 text-white py-2 rounded-xl hover:bg-emerald-600 transition">
          Book Now
        </button>
      </div>
    </motion.div>
  );
}
