"use client";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Container } from "../components/ui/Container";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('navigation');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 h-screen bg-gray-950 pt-24">
        <Container>
          <h1 className="text-4xl font-bold text-white mb-6">{t('welcome')}</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
