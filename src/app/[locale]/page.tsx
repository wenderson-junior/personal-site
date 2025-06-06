"use client";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-950 pt-24">
        <Hero />
        {/* Outras seções serão adicionadas aqui */}
      </main>
      <Footer />
    </div>
  );
}
