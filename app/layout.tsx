import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'TalentKonnect – Talent Board',
  description: 'Build. Compete. Connect.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
