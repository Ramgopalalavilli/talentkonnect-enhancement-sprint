import "./globals.css";
import type { Metadata, Viewport } from "next";
import AppShell from "./components/AppShell";

// ----- Helpers -----
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogImage = "/og.png"; // put your image in /public/og.png

// ----- SEO Metadata -----
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TalentKonnect – Talent Board",
  description:
    "Create a public talent profile recruiters can find in minutes. Launch your card and get discovered.",
  openGraph: {
    title: "TalentKonnect – Talent Board",
    description:
      "Create a public talent profile recruiters can find in minutes. Launch your card and get discovered.",
    url: "/",
    siteName: "TalentKonnect",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TalentKonnect" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentKonnect – Talent Board",
    description:
      "Get listed on the Talent Board in minutes. Global visibility. Cancel anytime.",
    images: [ogImage],
  },
  keywords: [
    "TalentKonnect",
    "talent board",
    "hire developers",
    "hire designers",
    "portfolio",
    "Next.js",
    "React",
  ],
  icons: { icon: "/favicon.ico" },
};

// ----- Viewport (fixes the warning) -----
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD objects
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TalentKonnect",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    sameAs: [
      "https://twitter.com/",
      "https://www.linkedin.com/",
      "https://github.com/",
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TalentKonnect",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/board?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "TalentKonnect – Talent Board",
    url: siteUrl,
    description:
      "Create a public talent profile recruiters can find in minutes. Launch your card and get discovered.",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "TalentKonnect" },
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          // suppress hydration warning for static JSON
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        {/* JSON-LD: WebSite with SearchAction */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {/* JSON-LD: WebPage */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
        />
      </head>

      <body className="min-h-screen bg-gradient-to-br from-[#eaf2ff] via-[#f7faff] to-[#ffffff] dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#1e293b] text-zinc-900 dark:text-zinc-100 font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
