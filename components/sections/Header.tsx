"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";
import { useLanguage, type Language } from "../LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const links = [[t("services"), "#services"], [t("work"), "#work"], [t("process"), "#process"], [t("about"), "#contact"]];
  const switchLanguage = (next: Language) => setLanguage(next);

  return <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? "border-white/10 bg-[#090d16]/90 shadow-lg shadow-black/10 backdrop-blur-md" : "border-transparent bg-[#090d16]"}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Logo width={132} height={65} />
      <nav className="hidden items-center gap-8 md:flex">
        {links.map(([item, href]) => <a key={item} href={href} className="rounded-sm text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4 focus-visible:ring-offset-ink">{item}</a>)}
        <div className="flex items-center gap-1 border-l border-white/10 pl-5 text-[11px] font-bold uppercase tracking-widest"><button onClick={() => switchLanguage("id")} className={`rounded-sm px-1.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${language === "id" ? "text-white" : "text-slate-500 hover:text-white"}`}>ID</button><span className="text-slate-700">/</span><button onClick={() => switchLanguage("en")} className={`rounded-sm px-1.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${language === "en" ? "text-white" : "text-slate-500 hover:text-white"}`}>EN</button></div>
        <Button>{t("bookCall")}</Button>
      </nav>
      <button className="relative z-[70] rounded-lg p-2 text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>
      {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }} className="fixed inset-x-0 top-[73px] z-[60] min-h-[calc(100dvh-73px)] border-t border-white/10 bg-[#090d16]/98 px-5 py-8 backdrop-blur-xl md:hidden">
        <nav className="flex flex-col gap-1">
          {links.map(([item, href], index) => <motion.a key={item} href={href} onClick={closeMenu} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }} className="border-b border-white/10 py-5 font-display text-4xl uppercase text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">{item}</motion.a>)}
          <div className="flex items-center gap-4 pt-8"><div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest"><button onClick={() => switchLanguage("id")} className={language === "id" ? "text-white" : "text-slate-500"}>ID</button><span className="text-slate-700">/</span><button onClick={() => switchLanguage("en")} className={language === "en" ? "text-white" : "text-slate-500"}>EN</button></div><Button href="#contact">{t("bookCall")}</Button></div>
        </nav>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
