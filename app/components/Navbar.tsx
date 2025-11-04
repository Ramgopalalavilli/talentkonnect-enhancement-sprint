'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase =
    'inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold transition';
  const ghostBtn =
    'text-gray-700 ring-1 ring-gray-200 bg-white hover:bg-gray-50 hover:shadow';
  const primaryBtn =
    'text-white bg-emerald-600 hover:bg-emerald-700 shadow hover:-translate-y-0.5 hover:shadow-lg';

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-100 transition-shadow
      ${scrolled ? 'bg-white/75 backdrop-blur shadow-sm' : 'bg-white/60 backdrop-blur'} `}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white text-sm font-bold">
            TK
          </span>
          <span className="text-lg font-semibold">TalentKonnect</span>
        </Link>

        {/* Desktop */}
        <div className="hidden gap-3 md:flex">
          <Link
            href="/board"
            className={`${linkBase} ${ghostBtn} ${
              pathname?.startsWith('/board') ? 'ring-emerald-300 text-emerald-700' : ''
            }`}
          >
            Browse Talents
          </Link>
          <Link href="/profile/start" className={`${linkBase} ${primaryBtn}`}>
            🚀 Launch Profile
          </Link>
        </div>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <Link href="/profile/start" className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">
            Launch
          </Link>
        </div>
      </nav>
    </header>
  );
}
