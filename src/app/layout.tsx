import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Code 101",
  description:
    "A building-blocks glossary for vibe coding — computers, the web, databases, and more, grouped by domain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableUmami = process.env.NODE_ENV === "production";

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      {enableUmami && (
        <Script
          defer
          src="https://analytics.adentranter.com/script.js"
          data-website-id="8062cd67-6884-4b88-8efe-11a1cec2c7a5"
          strategy="afterInteractive"
        />
      )}
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
