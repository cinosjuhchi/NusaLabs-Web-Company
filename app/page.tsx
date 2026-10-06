import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return <main className="noise min-h-screen"><Header /><Hero /><Trust /><Work /><Services /><Process /><Testimonials /><Contact /><Footer /></main>;
}
