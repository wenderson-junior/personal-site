"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface NavItem {
  label: string;
  href: string;
}

interface NavItemsProps {
  className?: string;
}



export function NavItems({ className = '' }: NavItemsProps) {
  const t = useTranslations('navigation');
  
  const navItems: NavItem[] = [
    { label: t('home'), href: '#' },
    { label: t('about'), href: '#' },
    { label: t('projects'), href: '#' },
    { label: t('contact'), href: '#' },
  ];
  
  return (
    <nav className={`hidden sm:flex items-center space-x-8 ${className}`}>
      {navItems.map((item) => (
        <a 
          key={item.label} 
          href={item.href} 
          className="dark:text-gray-400 transition-colors duration-200 dark:hover:text-gray-50 cursor-pointer font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
