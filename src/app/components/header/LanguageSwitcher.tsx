"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, Locale } from '../../../i18n';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('languageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 cursor-pointer dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200 font-medium"
        aria-label={t('label')}
      >
        <span>{locale === 'en' ? 'EN' : 'PT'}</span>
        {isOpen ? (
          <HiChevronUp className="w-4 h-4" />
        ) : (
          <HiChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-950 shadow-lg rounded-md overflow-hidden z-50">
          {locales.map((loc: Locale) => (
            <button
              key={loc}
              onClick={() => changeLanguage(loc)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                locale === loc ? 'dark:text-gray-50 font-medium' : 'dark:text-gray-400'
              }`}
            >
              {t(loc)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
