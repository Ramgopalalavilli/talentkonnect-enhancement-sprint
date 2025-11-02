"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/board", label: "Board" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-100/70 bg-white/70 backdrop-blur-md dark:border-emerald-900/30 dark:bg-zinc-950/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
            TK
          </span>
          <span className="text-zinc-900 dark:text-white">TalentKonnect</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <NavItem key={link.href} href={link.href} active={active}>
                {link.label}
              </NavItem>
            );
          })}

          <Link
            href="/launch"
            className="ml-3 inline-flex items-center rounded-xl bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            + Add Your Profile
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-200 dark:hover:bg-zinc-800/60"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="md:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-xl border border-emerald-100/70 bg-white/80 p-2 shadow-sm backdrop-blur dark:border-emerald-900/30 dark:bg-zinc-900/70">
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm ${
                      active
                        ? "bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/launch"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700"
              >
                + Add Your Profile
              </Link>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
    >
      <span>{children}</span>

      {/* gradient underline on hover/active */}
      {(active) && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
        />
      )}
      {!active && (
        <span className="absolute inset-x-3 -bottom-0.5 h-px rounded-full bg-emerald-400/0 transition group-hover:bg-emerald-400/60" />
      )}
    </Link>
  );
}
