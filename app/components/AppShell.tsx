"use client";

import Navbar from "./Navbar";
import { Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../nprogress.css";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Debounce NProgress against Strict Mode double-invoke
  const lastPathRef = useRef<string | null>(null);
  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;

    NProgress.configure({ showSpinner: false, trickleSpeed: 150 });
    NProgress.start();
    const t = setTimeout(() => NProgress.done(), 400);
    return () => clearTimeout(t);
  }, [pathname]);

  // Disable initial animation on first load only
  const firstLoadRef = useRef(true);
  useEffect(() => {
    // after first client paint, future route changes can animate
    firstLoadRef.current = false;
  }, []);

  return (
    <>
      <Navbar />

      {/* Single enter animation on route change (no exit) */}
      <motion.main
        key={pathname}
        initial={firstLoadRef.current ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            TalentKonnect
          </span>
          . Built with ❤️ using Next.js & Tailwind CSS.
        </p>

        <div className="flex justify-center gap-8 mt-5">
          <Social href="https://twitter.com" label="Twitter">
            <Twitter size={18} strokeWidth={1.8} />
          </Social>
          <Social href="https://linkedin.com" label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.8} />
          </Social>
          <Social href="https://github.com" label="GitHub">
            <Github size={18} strokeWidth={1.8} />
          </Social>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 transition"
    >
      <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        {children}
      </span>
      <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
        {label}
      </span>
    </a>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 rounded-full p-3 shadow-md bg-blue-600 text-white hover:bg-blue-700 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
