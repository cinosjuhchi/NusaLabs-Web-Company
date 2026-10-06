"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Button({ children, href = "#contact", secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <motion.a href={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }}
    className={`group inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${secondary ? "border border-white/15 bg-white/[.04] text-white hover:border-brand-blue/60 hover:bg-brand-blue/10" : "bg-brand-blue text-white shadow-glow hover:bg-[#5179ff]"}`}>
    {children}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </motion.a>;
}
