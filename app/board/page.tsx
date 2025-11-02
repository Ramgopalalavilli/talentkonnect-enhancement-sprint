"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TalentCard, { Profile } from "@/app/components/TalentCard";

// --- Demo fallback (shown until API responds) ---
const FALLBACK: Profile[] = [
  {
    id: "1",
    name: "Aanya Kapoor",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Aanya&size=96",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    name: "Ishan Verma",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Ishan&size=96",
    skills: ["Figma", "Wireframing", "Design Systems", "Prototyping"],
  },
  {
    id: "3",
    name: "Maya Rao",
    role: "Full-Stack Engineer",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Maya&size=96",
    skills: ["Postgres", "Next.js", "Stripe"],
  },
  {
    id: "4",
    name: "Arjun Singh",
    role: "Mobile Developer",
    avatar: "https://api.dicebear.com/9.x/avataaars/png?seed=Arjun&size=96",
    skills: ["React Native", "Expo", "TypeScript"],
  },
];

export default function BoardPage() {
  const [profiles, setProfiles] = useState<Profile[]>(FALLBACK);
  const [loading, setLoading] = useState(true);

  // Filters
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All roles");
  const [sort, setSort] = useState<"Newest" | "A→Z" | "Most skills">("Newest");

  useEffect(() => {
    let alive = true;
    fetch("/api/profiles")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        if (!alive) return;
        // if your API returns plain prisma records, they already match Profile
        setProfiles(Array.isArray(data) && data.length ? data : FALLBACK);
      })
      .catch(() => setProfiles(FALLBACK))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const allRoles = useMemo(() => {
    const set = new Set<string>(["All roles"]);
    profiles.forEach((p) => set.add(p.role));
    return Array.from(set);
  }, [profiles]);

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    let list = profiles.filter((p) => {
      const t =
        !text ||
        p.name.toLowerCase().includes(text) ||
        p.role.toLowerCase().includes(text) ||
        p.skills.some((s) => s.toLowerCase().includes(text));
      const r = role === "All roles" || p.role === role;
      return t && r;
    });
    if (sort === "A→Z") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Newest") list.sort((a, b) => Number(b.id) - Number(a.id));
    if (sort === "Most skills") list.sort((a, b) => b.skills.length - a.skills.length);
    return list;
  }, [profiles, q, role, sort]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white dark:from-[#0b1120] dark:via-[#0d1428] dark:to-[#0b1120]">
      {/* Hero */}
      <section className="border-b border-emerald-100/60 dark:border-emerald-900/20">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="block text-zinc-900 dark:text-white">Find a skill.</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  Book it tonight.
                </span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Browse verified profiles by role and skills — fast, clean, and ready to hire.
              </p>
            </div>

            <Link
              href="/launch"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition"
            >
              + Add Your Profile
            </Link>
          </div>

          {/* Filters bar */}
          <div className="mt-6 rounded-2xl border border-emerald-100/70 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-emerald-900/30 dark:bg-white/5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
              <div className="sm:col-span-6">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by name, role, or skill…"
                  className="w-full rounded-xl border border-zinc-200/80 bg-white/90 px-4 py-2 text-sm text-zinc-800 placeholder-zinc-400 outline-none transition focus:ring-2 focus:ring-emerald-200 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100"
                />
              </div>
              <div className="sm:col-span-3">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200/80 bg-white/90 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200 dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  {allRoles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-3">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as any)}
                  className="w-full rounded-xl border border-zinc-200/80 bg-white/90 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-200 dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  <option>Newest</option>
                  <option>A→Z</option>
                  <option>Most skills</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          {loading ? (
            <SkeletonGrid />
          ) : filtered.length ? (
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.07, duration: 0.35 },
                },
              }}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((p) => (
                <motion.li
                  key={p.id}
                  variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                  className="list-none"
                >
                  <TalentCard profile={p} />
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </main>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-44 animate-pulse rounded-2xl border border-white/40 bg-white/70 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"
        />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-emerald-200 bg-white/70 p-10 text-center text-zinc-700 shadow-sm dark:border-emerald-900/30 dark:bg-zinc-900/40 dark:text-zinc-300">
      <p>No profiles match your filters.</p>
      <Link
        href="/launch"
        className="mt-4 inline-block rounded-xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30"
      >
        Create your profile →
      </Link>
    </div>
  );
}
