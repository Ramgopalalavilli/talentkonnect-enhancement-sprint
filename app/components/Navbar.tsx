'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 text-white font-bold">
            TK
          </div>
          <span className="text-lg font-semibold text-gray-900">TalentKonnect</span>
        </Link>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/board"
            className="text-gray-700 hover:text-emerald-600 transition font-medium"
          >
            Browse Talents
          </Link>
          <Link
            href="/profile/start"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-white font-medium shadow-sm hover:bg-emerald-600 transition"
          >
            Launch Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}
