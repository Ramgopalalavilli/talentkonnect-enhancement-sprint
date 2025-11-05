"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, DollarSign, Calendar, MapPin } from "lucide-react";
import TalentCard, { Talent } from "../components/TalentCard";

const demo: Talent[] = [
  { id: "1", name: "Raji", title: "Event Planner", avatar: "https://i.pravatar.cc/100?img=7", price: 35, tags: ["Chennai"], },
  { id: "2", name: "Jaggu", title: "AI Content Writer", avatar: "https://i.pravatar.cc/100?img=8", price: 40, tags: ["Mysore"], },
  { id: "3", name: "Kanban", title: "Marketing Expert", avatar: "https://i.pravatar.cc/100?img=9", price: 50, tags: ["Madurai"], },
  { id: "4", name: "Maya Chen", title: "Fitness Coach", avatar: "https://i.pravatar.cc/100?img=4", price: 60, tags: ["Bangalore"], },
  { id: "5", name: "Ava Patel", title: "Prompt Engineer", avatar: "https://i.pravatar.cc/100?img=3", price: 55, tags: ["Remote"], },
  { id: "6", name: "Rohan Singh", title: "Web Developer", avatar: "https://i.pravatar.cc/100?img=2", price: 45, tags: ["Pune"], },
];

export default function BoardPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find a <span className="text-indigo-600">skill</span>. <br className="hidden sm:block" />
            <span className="text-emerald-600">Book it tonight.</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From <span className="font-medium text-emerald-600">vodka cocktails</span> to{" "}
            <span className="font-medium text-indigo-600">party planning</span> to{" "}
            <span className="font-medium text-fuchsia-600">resume makeovers</span> — discover real people ready to help <span className="text-rose-600 font-semibold">now</span>.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input
                placeholder="Skill"
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-black/10 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <select className="w-full pl-9 pr-4 py-3 rounded-xl border border-black/10 bg-white shadow-sm">
                <option>Any Budget</option>
                <option>$0 - $25</option>
                <option>$25 - $50</option>
                <option>$50+</option>
              </select>
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <select className="w-full pl-9 pr-4 py-3 rounded-xl border border-black/10 bg-white shadow-sm">
                <option>Any Time</option>
                <option>Today</option>
                <option>Tonight</option>
                <option>Weekend</option>
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <select className="w-full pl-9 pr-4 py-3 rounded-xl border border-black/10 bg-white shadow-sm">
                <option>All Cities</option>
                <option>Chennai</option>
                <option>Mysore</option>
                <option>Madurai</option>
                <option>Pune</option>
              </select>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Showing <span className="font-medium">{demo.length}</span> professionals
          </p>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demo.map((t) => (
              <TalentCard key={t.id} talent={t} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
