'use client';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`sticky top-0 z-40 w-full border-b border-gray-100 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm font-bold">TK</span>
            <span className="text-lg font-semibold">TalentKonnect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            <Link href="/board" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 bg-white transition hover:bg-gray-50 hover:shadow">Browse Talents</Link>
            <Link href="/profile/start" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-lg">🚀 Launch Profile</Link>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={toggle}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gray-200 text-gray-700 hover:bg-gray-50"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29 10.59 10.6l6.3-6.31z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden border-top border-gray-100 bg-white/90 backdrop-blur transition-[max-height,opacity] duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex flex-col gap-2">
            <Link href="/board" onClick={close} className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-200 bg-white hover:bg-gray-50">Browse Talents</Link>
            <Link href="/profile/start" onClick={close} className="rounded-xl px-4 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow">🚀 Launch Profile</Link>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/pricing" onClick={close} className="text-sm text-gray-600 hover:text-black px-2 py-2 rounded-lg hover:bg-gray-50">Pricing</Link>
              <Link href="/contact" onClick={close} className="text-sm text-gray-600 hover:text-black px-2 py-2 rounded-lg hover:bg-gray-50">Contact</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
