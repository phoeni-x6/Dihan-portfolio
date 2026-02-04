import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dihan Hewage | Freelance Web Developer",
    template: "%s | Dihan Hewage",
  },
  description:
    "Freelance web developer specializing in Next.js, TypeScript, and high-performance SEO-optimized websites. Clean design, fast loading, conversion-focused.",
  keywords: [
    "freelance web developer",
    "web developer",
    "next.js developer",
    "typescript developer",
    "website developer sri lanka",
    "seo optimized websites",
    "landing page developer",
  ],
  authors: [{ name: "Dihan Hewage" }],
  creator: "Dihan Hewage",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Dihan Hewage | Freelance Web Developer",
    description:
      "Modern, fast, and SEO-optimized websites built with Next.js and TypeScript.",
    url: "https://yourdomain.com",
    siteName: "Dihan Hewage Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dihan Hewage – Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dihan Hewage | Freelance Web Developer",
    description:
      "High-performance websites & landing pages built with Next.js.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
