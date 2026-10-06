import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nusa-labs-web-company.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NusaLabs Solutions — Digital products with direction",
  description: "NusaLabs Solutions builds high-converting digital products for ambitious teams.",
  applicationName: "NusaLabs Solutions",
  keywords: ["web development agency", "Next.js", "React", "digital products", "NusaLabs Solutions"],
  authors: [{ name: "NusaLabs Solutions" }],
  creator: "NusaLabs Solutions",
  openGraph: {
    type: "website",
    siteName: "NusaLabs Solutions",
    title: "NusaLabs Solutions — Digital products with direction",
    description: "High-converting digital products engineered for ambitious teams.",
    images: [{ url: "/og-image.jpeg", width: 2752, height: 1536, alt: "NusaLabs Solutions — Next-gen web development" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NusaLabs Solutions — Digital products with direction",
    description: "High-converting digital products engineered for ambitious teams.",
    images: ["/og-image.jpeg"]
  },
  icons: { icon: "/brand/nusalabs-solutions.jpg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${oswald.variable} ${jakarta.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>;
}
