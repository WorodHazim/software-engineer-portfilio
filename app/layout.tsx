import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { IntroLoader } from "@/components/intro-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Portfolio of Worod Hazem, a creative frontend developer and software engineer building editorial interfaces, full-stack products and AI-enabled systems from Abu Dhabi.",
  keywords: [
    "Worod Hazem",
    "Frontend Developer Abu Dhabi",
    "Software Engineer UAE",
    "Next.js Developer",
    "Creative Developer",
    "Full Stack Developer",
    "AI Systems",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Digital Systems in Motion`,
    description:
      "Editorial interfaces, full-stack products and AI-enabled systems designed and built from Abu Dhabi.",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Worod Hazem portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Digital Systems in Motion`,
    description: "Creative frontend development, product systems and AI-enabled applications.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F4F0",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <IntroLoader />
        <ScrollProgress />
        <CustomCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
