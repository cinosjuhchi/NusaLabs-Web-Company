"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [{ value: 50, prefix: "$", suffix: "M+", label: "client revenue generated" }, { value: 99.8, prefix: "", suffix: "%", label: "on-time delivery" }, { value: 4.9, prefix: "", suffix: "/5", label: "average partner rating" }];
const clients = ["MONUMENT", "VANTA", "ARC / OBJECTS", "LUMEN", "FIELD NOTES", "NORTH / CO"];

function Metric({ value, prefix, suffix, label, index }: (typeof stats)[number] & { index: number }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let frame = 0;
    const started = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - started) / 1100, 1);
      setCurrent(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    const timeout = window.setTimeout(() => { frame = requestAnimationFrame(animate); }, index * 120);
    return () => { window.clearTimeout(timeout); cancelAnimationFrame(frame); };
  }, [value, index]);

  const formatted = value % 1 === 0 ? Math.round(current).toString() : current.toFixed(1);
  return <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="border-l border-brand-blue/60 pl-5"><p className="display text-4xl text-white">{prefix}{formatted}{suffix}</p><p className="mt-1 text-xs uppercase tracking-[.16em] text-slate-500">{label}</p></motion.div>;
}

export function Trust() {
  return <section className="relative overflow-x-clip border-y border-white/[.08] bg-[#0d1320]">
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-8 md:grid-cols-3">{stats.map((stat, index) => <Metric key={stat.label} {...stat} index={index} />)}</div>
      <div className="mt-14 overflow-hidden border-t border-white/10 pt-8"><p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[.24em] text-slate-600">Trusted by teams building what’s next</p><div className="relative h-5 overflow-hidden"><div className="group/marquee absolute left-0 top-0 flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-14 text-sm font-bold tracking-[.18em] text-slate-500 motion-reduce:animate-none">{[...clients, ...clients].map((client, index) => <span key={`${client}-${index}`} className="transition-colors group-hover/marquee:[animation-play-state:paused] hover:text-brand-blue">{client}</span>)}</div></div></div>
    </div>
  </section>;
}
