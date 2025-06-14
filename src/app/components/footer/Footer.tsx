"use client";

import { Container } from "../ui/Container";
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = 2025;
  
  return (
    <footer className="w-full py-6 border-t dark:bg-gray-950 dark:border-gray-900">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('copyright', { year: currentYear })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
