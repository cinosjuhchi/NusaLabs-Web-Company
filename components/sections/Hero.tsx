"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { useLanguage } from "../LanguageProvider";

type ConstellationStar = { x: number; y: number; size: number; delay: string };
type ConstellationLine = [number, number, number, number];
type Constellation = { name: string; stars: ConstellationStar[]; lines: ConstellationLine[] };

const shapePoints: { name: string; points: [number, number][] }[] = [
  { name: "Idea lamp", points: [[50, 12], [39, 20], [35, 34], [42, 45], [45, 55], [55, 55], [58, 45], [65, 34], [61, 20], [50, 12], [44, 63], [56, 63], [46, 72], [54, 72], [50, 84]] },
  { name: "Laptop", points: [[25, 20], [75, 20], [75, 58], [25, 58], [25, 20], [15, 74], [85, 74], [76, 64], [24, 64], [15, 74], [35, 74], [65, 74], [42, 82], [58, 82], [50, 88]] },
  { name: "Hammer", points: [[28, 25], [67, 25], [67, 38], [54, 38], [54, 48], [59, 57], [63, 68], [66, 79], [59, 82], [53, 70], [49, 58], [45, 48], [45, 38], [28, 38], [28, 25]] },
  { name: "Client", points: [[50, 18], [42, 22], [39, 31], [42, 40], [50, 44], [58, 40], [61, 31], [58, 22], [50, 18], [35, 57], [43, 50], [50, 48], [57, 50], [65, 57], [50, 82]] },
];

function createConstellation(shape: { name: string; points: [number, number][] }): Constellation {
  const stars = shape.points.map(([x, y], index) => ({
    x,
    y,
    size: index % 5 === 0 ? 4 : index % 3 === 0 ? 3.25 : 2.5,
    delay: `${((index * 0.31) % 2.8).toFixed(2)}s`,
  }));
  const lines = shape.points.slice(0, -1).map(([x1, y1], index) => {
    const [x2, y2] = shape.points[index + 1];
    return [x1, y1, x2, y2] as ConstellationLine;
  });
  return { name: shape.name, stars, lines };
}

export function Hero() {
  const { t } = useLanguage();
  const [shapeIndex, setShapeIndex] = useState(0);
  const constellation = createConstellation(shapePoints[shapeIndex]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setShapeIndex((current) => (current + 1) % shapePoints.length), 7000);
    return () => window.clearInterval(interval);
  }, []);

  return <section id="top" className="relative overflow-hidden border-b border-white/10">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="stroke-brand-blue/50" strokeWidth=".32" vectorEffect="non-scaling-stroke">
          {constellation.lines.map(([x1, y1, x2, y2], index) => <motion.line key={index} initial={false} animate={{ x1, y1, x2, y2 }} transition={{ duration: 2.4, ease: "easeInOut" }} x1={x1} y1={y1} x2={x2} y2={y2} />)}
        </g>
      </svg>
      {constellation.stars.map((star, index) => <span key={index} className="constellation-star absolute rounded-full bg-white shadow-[0_0_12px_3px_rgba(82,125,255,.95)] motion-safe:animate-[star-pulse_3.5s_ease-in-out_infinite] motion-reduce:animate-none" style={{ left: `${star.x}%`, top: `${star.y}%`, width: `${star.size}px`, height: `${star.size}px`, animationDelay: star.delay }} />)}
    </div>
    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="max-w-5xl">
        <div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-brand-blue"><Sparkles className="h-4 w-4" /> {t("studio")}</div>
        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
          <h1 className="display text-[clamp(4.2rem,11vw,9.5rem)] uppercase leading-[.86] tracking-[-.04em] text-white">{t("heroTitle")}<br /><span className="text-brand-blue">{t("heroTitleAccent")}</span></h1>
          <div className="border-l border-brand-blue/70 pl-5 pb-2"><p className="text-sm leading-6 text-slate-300">{t("heroAside")}</p><a href="#work" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue">{t("selectedWork")} <ArrowUpRight className="h-3 w-3" /></a></div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-end">
          <p className="max-w-md text-base leading-7 text-slate-400">{t("heroBody")}</p>
          <div className="flex flex-wrap gap-3"><Button>{t("tellUs")}</Button><Button secondary href="#work">{t("seeWork")}</Button></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[.2em] text-slate-500"><ArrowDown className="h-4 w-4 text-brand-blue" /> {t("scroll")}</motion.div>
    </div>
  </section>;
}
