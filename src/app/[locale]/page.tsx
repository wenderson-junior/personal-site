"use client";

import { Navbar } from "@/app/components/header/Navbar";
import { Footer } from "@/app/components/footer/Footer";
import { Hero } from "@/app/components/hero/Hero";
import { Skills } from "@/app/components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-950 pt-24">
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
