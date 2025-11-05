"use client";

import Link from "next/link";
import { Rocket, Users, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b transition
      ${scrolled ? "border-black/10 shadow-[0_6px_30px_rgba(2,6,23,.06)]" : "border-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
            <Rocket className="w-4 h-4" />
          </span>
          <span className="font-extrabold tracking-tight">TalentKonnect</span>
        </Link>

        {/* removed the text links entirely */}

        {/* actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/board"
            className="hidden sm:inline-flex rounded-full px-4 py-2 border border-black/10 bg-white text-slate-700
                       transition-all duration-200 will-change-transform
                       hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            <Users className="w-4 h-4 mr-2" />
            Browse Talents
          </Link>

          <Link
            href="/launch"
            className="inline-flex items-center rounded-full px-4 py-2 font-semibold text-white bg-emerald-500
                       shadow-[0_0_14px_rgba(16,185,129,.35)]
                       transition-all duration-200 will-change-transform
                       hover:bg-emerald-600 hover:shadow-[0_0_22px_rgba(16,185,129,.6)]
                       hover:scale-105 active:scale-95
                       focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Launch Profile
          </Link>

          <button className="md:hidden p-2" aria-label="menu" onClick={() => setOpen(v => !v)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* mobile drawer (only action links) */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="container py-3 flex flex-col gap-2 text-slate-700">
            <Link href="/board" onClick={() => setOpen(false)} className="hover:text-emerald-600">
              Browse Talents
            </Link>
            <Link href="/launch" onClick={() => setOpen(false)} className="hover:text-emerald-600 flex items-center gap-2">
              <Rocket className="w-4 h-4" /> Launch Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
