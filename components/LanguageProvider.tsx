"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "id";
type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    services: "Services", work: "Work", process: "Process", about: "About", bookCall: "Book a call",
    studio: "Independent digital studio · Est. 2014", heroTitle: "Make your", heroTitleAccent: "mark.",
    heroAside: "Digital products for companies with somewhere better to go.", selectedWork: "Selected work",
    heroBody: "Strategy, design, and engineering for teams that need the work to do more than look good.",
    tellUs: "Tell us everything", seeWork: "See our work", scroll: "Scroll to explore",
    whatWeDo: "What we do", clarity: "Clarity", creates: "creates", momentum: "momentum.",
    selectedWorkTitle: "Built to be", selectedWorkAccent: "remembered.", viewAll: "View all work",
    howWeWork: "How we work", clearPath: "A clear path", forward: "forward.",
    partnerPerspective: "Partner perspective", goodWork: "Good work", speaks: "speaks loudly.",
    startProject: "Start a project", somethingReal: "something real.", sendInquiry: "Send inquiry",
    availability: "Available for Q3 / Q4 projects", explore: "Explore", connect: "Connect",
    messageReceived: "Message received.", servicesNeeded: "Services needed", projectBudget: "Project budget",
  },
  id: {
    services: "Layanan", work: "Karya", process: "Proses", about: "Tentang", bookCall: "Jadwalkan panggilan",
    studio: "Studio digital independen · Berdiri 2014", heroTitle: "Wujudkan", heroTitleAccent: "tanda.",
    heroAside: "Produk digital untuk perusahaan yang ingin melangkah lebih jauh.", selectedWork: "Karya pilihan",
    heroBody: "Strategi, desain, dan engineering untuk tim yang membutuhkan hasil lebih dari sekadar tampilan.",
    tellUs: "Ceritakan kebutuhanmu", seeWork: "Lihat karya kami", scroll: "Gulir untuk menjelajah",
    whatWeDo: "Yang kami kerjakan", clarity: "Kejelasan", creates: "menciptakan", momentum: "momentum.",
    selectedWorkTitle: "Dibuat untuk", selectedWorkAccent: "diingat.", viewAll: "Lihat semua karya",
    howWeWork: "Cara kami bekerja", clearPath: "Langkah yang", forward: "jelas.",
    partnerPerspective: "Cerita partner", goodWork: "Karya yang baik", speaks: "berbicara.",
    startProject: "Mulai proyek", somethingReal: "sesuatu yang nyata.", sendInquiry: "Kirim pertanyaan",
    availability: "Tersedia untuk proyek Q3 / Q4", explore: "Jelajahi", connect: "Terhubung",
    messageReceived: "Pesan diterima.", servicesNeeded: "Layanan yang dibutuhkan", projectBudget: "Anggaran proyek",
  },
} as const;

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const stored = window.localStorage.getItem("nusalabs-language");
    if (stored === "en" || stored === "id") setLanguageState(stored);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("nusalabs-language", language);
    document.documentElement.lang = language === "id" ? "id" : "en";
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage: (next: Language) => setLanguageState(next), t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
