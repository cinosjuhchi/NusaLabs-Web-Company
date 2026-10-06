"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { ArrowLink } from "../ui/Logo";

const projects = [
  { title: "Arc / Objects", category: "E-commerce", type: "Brand platform · E-commerce", number: "01", color: "bg-[#b34a2b]", tag: "Objects for the everyday", detail: "A warmer, faster storefront for a considered goods label." },
  { title: "Lumen", category: "SaaS", type: "Strategy · Digital product", number: "02", color: "bg-[#245c83]", tag: "See a clearer future", detail: "A calmer operating layer for teams making complex decisions." },
  { title: "Field Notes", category: "Web Apps", type: "Editorial · Campaign", number: "03", color: "bg-[#54733a]", tag: "Ideas worth sharing", detail: "An editorial platform built around the people behind the work." }
];

export function Work() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return <section id="work" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
    <div className="mb-8 flex items-end justify-between gap-5"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-blue">Selected work</p><h2 className="display text-5xl uppercase tracking-tight sm:text-6xl">Built to be<br />remembered.</h2></div><ArrowLink href="#contact">View all work</ArrowLink></div>
    <div className="mb-10 flex flex-wrap gap-5 border-y border-white/10 py-4">{["All", "Web Apps", "E-commerce", "SaaS"].map((item) => <button key={item} onClick={() => setFilter(item)} className={`text-xs font-bold uppercase tracking-widest transition-colors ${filter === item ? "text-brand-blue" : "text-slate-500 hover:text-white"}`}>{item}</button>)}</div>
    <div className="grid gap-5 lg:grid-cols-2">
      {visibleProjects.map((project, i) => <motion.button onClick={() => setSelected(project)} key={project.title} layout initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} whileTap={{ scale: .99 }} className={`group relative overflow-hidden border border-white/10 ${project.color} p-5 text-left transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(0,0,0,.25)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${i === 0 ? "lg:row-span-2 lg:min-h-[620px]" : "min-h-[300px]"}`}>
        <div className="project-lines absolute inset-0 opacity-30 transition-transform duration-700 group-hover:scale-110" /><div className="relative flex h-full min-h-[260px] flex-col justify-between"><div className="flex items-start justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-white/75">{project.type}</span><span className="font-mono text-sm text-white/70">{project.number}</span></div><div><div className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80"><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /> Open case study</div><p className="mb-1 text-sm text-white/70">{project.tag}</p><h3 className="display text-4xl uppercase tracking-tight text-white sm:text-5xl">{project.title}</h3></div></div>
      </motion.button>)}
    </div>
    <AnimatePresence>{selected && <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-[#05070d]/90 p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div role="dialog" aria-modal="true" aria-label={`${selected.title} case study`} onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`relative w-full max-w-xl overflow-hidden border border-white/15 ${selected.color} p-8`}><button onClick={() => setSelected(null)} className="absolute right-5 top-5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Close case study"><X className="h-5 w-5" /></button><p className="mb-16 text-xs font-bold uppercase tracking-[.2em] text-white/70">{selected.type}</p><h3 className="display text-6xl uppercase leading-none text-white">{selected.title}</h3><p className="mt-5 max-w-sm text-sm leading-6 text-white/80">{selected.detail}</p></motion.div></motion.div>}</AnimatePresence>
  </section>;
}
