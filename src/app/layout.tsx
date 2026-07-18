import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import Inknut Antiqua font with specific weights
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Added 300 for lighter weight
});

// Production URL — update here if the site ever moves domains.
const SITE_URL = "https://www.amanbollam.com";
const SITE_TITLE = "Aman Bollam";
const SITE_DESCRIPTION =
  "Aman Bollam builds AI-powered and full-stack products, tools, and experiments.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_TITLE,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aman Bollam — building ideas into products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Aman Bollam",
      url: SITE_URL,
      jobTitle: "Software Engineer",
      alumniOf: "University of Maryland",
      sameAs: [
        "https://github.com/Aman-Bollam",
        "https://www.linkedin.com/in/aman-bollam/",
      ],
    },
    {
      "@type": "WebSite",
      name: SITE_TITLE,
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#E6E6E6] text-slate-950">
      <body className={`${inknutAntiqua.className} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
