'use client';
import Link from 'next/link';

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
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-200 text-gray-500 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-gray-300 hover:text-gray-900"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold text-gray-900">TalentKonnect</div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              The platform connecting skilled professionals with clients worldwide. Monetize your
              expertise and build your brand.
            </p>
            <div className="mt-4 flex gap-3">
              <Social href="https://x.com/" label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.5 7.43L22.5 22h-6.31l-4.93-6.28L5 22H2.244l7.02-8.02L1.5 2H8l4.47 5.83L18.244 2Zm-2.21 17h1.74L8.1 4.9H6.27L16.034 19Z"/></svg>
              </Social>
              <Social href="https://instagram.com/" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm6.75.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
              </Social>
              <Social href="https://linkedin.com/" label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 1 1 4.98 3.5ZM2.5 21V8.99h5V21h-5Zm7.5 0V8.99h4.78v1.63h.07c.67-1.2 2.31-2.46 4.76-2.46 5.1 0 6.04 3.36 6.04 7.73V21h-5v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21h-5Z"/></svg>
              </Social>
              <Social href="mailto:hello@talentkonnect.example" label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16a2 2 0 0 1 2 2v.4l-10 6.25L2 8.4V8a2 2 0 0 1 2-2Zm16 12H4a2 2 0 0 1-2-2V9.2l10 6.25 10-6.25V16a2 2 0 0 1-2 2Z"/></svg>
              </Social>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Platform</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/board" className="hover:text-black">Browse Talents</Link></li>
              <li><Link href="/launch" className="hover:text-black">How It Works</Link></li>
              <li><Link href="/success" className="hover:text-black">Success Stories</Link></li>
              <li><Link href="/pricing" className="hover:text-black">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-black">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold text-gray-900">Status</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200 text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live • 10,000+ professionals joined
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
          <p>© 2025 TalentKonnect by Alatree Ventures | Build. Compete. Connect.</p>
          <nav className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-black">Terms</Link>
            <span className="text-gray-300">•</span>
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="hover:text-black">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
