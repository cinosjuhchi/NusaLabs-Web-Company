"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const testimonials = [
    ["Maya Chen", "Co-founder, Lumen", "NusaLabs Solutions gave us the clarity and confidence to ship a product our customers actually love. We moved from idea to launch in half the time.", "+42% activation"],
    ["Jon Bell", "VP Product, Monument", "They joined as a true engineering partner, brought structure to the chaos, and helped us unlock our next stage of growth.", "3.2x faster launch"],
  ];
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];
  return <section className="border-y border-white/[.08] bg-[#0d1320]"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="mb-12"><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-blue">Partner perspective</p><h2 className="display text-5xl uppercase tracking-tight sm:text-6xl">Good work<br />speaks loudly.</h2></div><motion.div key={active} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-7 sm:p-10"><Quote className="mb-8 h-9 w-9 text-brand-blue" /><p className="max-w-4xl text-2xl leading-relaxed text-slate-100 sm:text-4xl">“{testimonial[2]}”</p><div className="mt-10 flex flex-wrap items-end justify-between gap-5 border-t border-white/10 pt-6"><div><p className="font-bold text-white">{testimonial[0]}</p><p className="text-sm text-slate-500">{testimonial[1]}</p></div><div className="flex items-center gap-1 text-brand-blue">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}<span className="ml-2 text-sm text-slate-400">{testimonial[3]}</span></div><div className="flex gap-2"><button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-white/10 p-2 text-slate-400 hover:border-brand-blue hover:text-white" aria-label="Previous testimonial"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => setActive((active + 1) % testimonials.length)} className="rounded-full border border-white/10 p-2 text-slate-400 hover:border-brand-blue hover:text-white" aria-label="Next testimonial"><ChevronRight className="h-4 w-4" /></button></div></div></motion.div></div></section>;
}
