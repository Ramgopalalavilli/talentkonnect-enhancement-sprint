'use client';

import * as React from 'react';

export type Talent = {
  id: string;
  name: string;
  city: string;
  headline: string;
  price: number;
  rating: number;
  tags: string[];
  extraCount: number;
  availability: 'Tonight' | 'Weekend' | 'Weekdays' | 'Any Time' | string;
  image: string;
};

type Props = { talent: Talent };

export default function TalentCard({ talent }: Props) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm transition hover:shadow-lg hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center gap-4 p-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-gray-200 bg-gray-100">
          <img src={talent.image} alt={talent.name} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 truncate">{talent.name}</h3>
          <p className="text-xs text-gray-500 truncate">📍 {talent.city}</p>
        </div>
        <span className="ml-auto text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">
          {talent.availability}
        </span>
      </div>

      {/* Body */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-700">{talent.headline}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {talent.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200"
            >
              {t}
            </span>
          ))}
          {talent.extraCount > 0 && (
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
              +{talent.extraCount}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-900">
            <span className="font-semibold">${talent.price}</span>{' '}
            <span className="text-gray-500">/ session</span>
          </div>
          <div className="text-xs text-amber-600">⭐ {talent.rating}</div>
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-3.5 py-2 text-sm font-medium text-white transition hover:brightness-110 active:scale-[0.98]"
          >
            ▶ Play Intro
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-3.5 py-2 text-sm font-semibold text-white ring-1 ring-emerald-400/60 transition hover:bg-emerald-600 active:scale-[0.98]"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}
