import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white mt-10">
      <div className="container py-10 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700 font-bold">
              TK
            </div>
            <h3 className="font-bold text-lg">TalentKonnect</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The modern platform connecting skilled professionals with clients worldwide. Monetize your expertise and build your personal brand.
          </p>
          <div className="flex items-center gap-4 mt-4 text-slate-500">
            <Link href="#" className="hover:text-emerald-600"><Twitter className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-emerald-600"><Instagram className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-emerald-600"><Linkedin className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-emerald-600"><Mail className="w-4 h-4" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/board" className="hover:text-emerald-600">Browse Talents</Link></li>
            <li><Link href="/about" className="hover:text-emerald-600">How It Works</Link></li>
            <li><Link href="/success" className="hover:text-emerald-600">Success Stories</Link></li>
            <li><Link href="/pricing" className="hover:text-emerald-600">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Support</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/help" className="hover:text-emerald-600">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-600">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-emerald-600">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="flex flex-col justify-between text-sm text-slate-600">
          <div className="flex flex-col items-start md:items-end gap-1">
            <p>10,000+ professionals joined</p>
            <div className="flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
              <span className="text-emerald-600 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2025 TalentKonnect by Alatree Ventures | Build. Compete. Connect.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-emerald-600">Terms</Link>
            <Link href="/privacy" className="hover:text-emerald-600">Privacy</Link>
            <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
