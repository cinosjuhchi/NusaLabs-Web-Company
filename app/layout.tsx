import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nusalabs.solutions"),
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NusaLabs Solutions — Digital products with direction" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "NusaLabs Solutions — Digital products with direction",
    description: "High-converting digital products engineered for ambitious teams.",
    images: ["/opengraph-image"]
  },
  icons: { icon: "/brand/nusalabs-solutions.jpg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${oswald.variable} ${jakarta.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>;
}
