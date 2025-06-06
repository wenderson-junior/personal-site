"use client";

import { useTranslations } from "next-intl";
import { Container } from "../ui/Container";
import { SkillsGrid } from "./SkillsGrid";
import { SectionTitle } from "../ui/SectionTitle";

export function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements - removed top line, kept subtle gradient */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      {/* Subtle glow effects in background */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-60 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl"></div>
      
      <Container>
        <div className="relative z-10">
          {/* Section header with enhanced styling */}
          <div className="mb-12 text-center">
            <div className="inline-block mb-6 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
              Tech Stack
            </div>
            <SectionTitle>{t('title')}</SectionTitle>
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
              {t('description')}
            </p>
          </div>
          <SkillsGrid />
        </div>
      </Container>
    </section>
  );
}
