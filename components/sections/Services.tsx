"use client";

import { Compass, Fingerprint, Orbit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

const services: { num: string; title: string; desc: string; Icon: LucideIcon; technologies: string[] }[] = [
  { num: "01", title: "Custom web applications", desc: "Next.js, React, and Node.js platforms engineered for speed and scale.", Icon: Compass, technologies: ["Next.js", "React", "Node.js"] },
  { num: "02", title: "E-commerce systems", desc: "Headless Shopify, custom checkout flows, and payment architecture.", Icon: Orbit, technologies: ["Shopify", "Stripe", "Hydrogen"] },
  { num: "03", title: "High-converting landing pages", desc: "Conversion strategy, motion, and dynamic funnels that turn attention into action.", Icon: Fingerprint, technologies: ["Motion", "Analytics", "CRO"] },
  { num: "04", title: "Maintenance & architecture audit", desc: "Performance optimization, security patching, and reliable dev retainers.", Icon: Compass, technologies: ["Core Web Vitals", "Security", "CI/CD"] }
];
export function Services() {
  const { t, language } = useLanguage();
  const heading = language === "id" ? ["Kejelasan", "menciptakan", "momentum."] : [t("clarity"), t("creates"), t("momentum")];
  return <section id="services" className="border-y border-white/[.08] bg-[#0d1320]"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-blue">{t("whatWeDo")}</p><h2 className="display text-5xl uppercase tracking-tight sm:text-6xl">{heading[0]}<br />{heading[1]}<br /><span className="text-brand-blue">{heading[2]}</span></h2></div>
    <div className="divide-y divide-white/10 border-t border-white/10">{services.map(({ num, title, desc, Icon, technologies }) => <div key={num} className="group relative flex gap-5 py-7 transition-[padding] duration-300 first:pt-5 last:pb-0 hover:pl-2"><span className="absolute left-0 top-0 h-px w-0 bg-brand-blue transition-all duration-300 group-hover:w-16" /><span className="pt-1 font-mono text-xs text-brand-blue">{num}</span><div className="flex-1"><div className="mb-3 flex items-center justify-between"><h3 className="display text-3xl uppercase">{title}</h3><Icon className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-brand-blue" /></div><p className="max-w-md text-sm leading-6 text-slate-400">{desc}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{technologies.map((technology) => <span key={technology} className="font-mono text-[10px] uppercase tracking-wider text-slate-600 transition-colors group-hover:text-slate-400">{technology}</span>)}</div></div></div>)}</div></div>
  </div></section>;
}
