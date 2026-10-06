import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface LogoProps {
  variant?: "light" | "dark" | "monochrome";
  className?: string;
  showText?: boolean;
  width?: number;
  height?: number;
}

export function Logo({ variant = "light", className = "", showText = true, width, height }: LogoProps) {
  const dimensions = {
    width: width ?? (showText ? 166 : 42),
    height: height ?? (showText ? 81 : 42),
  };
  const treatment = variant === "monochrome" ? "grayscale opacity-70" : variant === "dark" ? "brightness-0" : "mix-blend-screen";

  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${className}`}
      aria-label="NusaLabs Solutions home"
    >
      <Image
        src="/brand/nusalabs-solutions.jpg"
        alt="NusaLabs Solutions"
        width={dimensions.width}
        height={dimensions.height}
        className={`object-contain ${treatment}`}
        priority
      />
    </Link>
  );
}

export function ArrowLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-slate-200 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4 focus-visible:ring-offset-ink">
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export default Logo;
