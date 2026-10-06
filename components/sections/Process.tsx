"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  ["01", "Discovery & strategy", "Technical specification, scope mapping, and wireframing that turns ambiguity into a plan."],
  ["02", "UI/UX design", "Interactive prototypes and a flexible visual system your team can build on."],
  ["03", "Engineering & code", "Modern Next.js engineering, continuous deployment, and rigorous testing."],
  ["04", "Launch & growth", "Deployment optimization, analytics setup, and post-launch scaling support."]
];

export function Process() {
  return <section id="process" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="mb-14 max-w-xl"><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-blue">How we work</p><h2 className="display text-5xl uppercase tracking-tight sm:text-6xl">A clear path<br />forward.</h2></div><div className="relative border-l border-brand-blue/40 md:ml-6">{steps.map(([number, title, description], index) => <motion.div key={number} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="relative border-b border-white/10 py-8 pl-8 first:pt-0 last:border-0"><span className="absolute -left-[7px] top-9 h-3 w-3 rounded-full bg-brand-blue ring-8 ring-[#090d16] first:top-1" /><div className="flex flex-col justify-between gap-4 sm:flex-row"><div><span className="font-mono text-sm text-brand-blue">{number}</span><h3 className="display mt-2 text-3xl uppercase">{title}</h3></div><p className="max-w-md text-sm leading-6 text-slate-400">{description}</p></div><div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Check className="h-4 w-4 text-brand-blue" /> Built around your goals</div></motion.div>)}</div></section>;
}
