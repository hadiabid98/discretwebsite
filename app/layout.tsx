import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/sections/Navbar";
import Footer from "@/src/components/sections/Footer";
import StructuredData from "@/src/components/SEO/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://discret.digital'),
  title: "Discret Digital | Scale Your Startup with Smart Systems",
  description: "Discret Digital empowers founders to scale from chaos to clarity. We install the operations, tech, and marketing infrastructure that turns startups into $10M+ scalable engines.",
  keywords: ["Discret Digital", "startup scaling", "business automation", "growth systems", "SOP development", "performance marketing", "founder freedom", "creative agency", "growth infrastructure"],
  alternates: {
    canonical: "https://discret.digital",
  },
  openGraph: {
    title: "Discret Digital | Startups That Actually Scale",
    description: "Stop being the bottleneck. We build the operations, marketing, and tech support you need for long-term growth.",
    url: "https://discret.digital",
    siteName: "Discret Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Discret Digital - Scalable Systems for Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discret Digital | Startups That Actually Scale",
    description: "Empowering founders with the systems, marketing, and tech needed to scale efficiently.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/discret-logo-colored.png?v=2',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <div style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', minHeight: '100vh' }}>
          <Navbar />
          <main className="container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
