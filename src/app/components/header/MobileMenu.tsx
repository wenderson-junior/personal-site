"use client";

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className = '' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  
  const navItems = [
    { label: t('home'), href: '#' },
    { label: t('about'), href: '#' },
    { label: t('projects'), href: '#' },
    { label: t('contact'), href: '#' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sm:hidden ${className}`}>
      {/* Hamburger button */}
      <button 
        onClick={toggleMenu}
        className="flex items-center p-2 rounded-md focus:outline-none cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <HiX className="w-6 h-6 dark:text-white" />
        ) : (
          <HiMenu className="w-6 h-6 dark:text-white" />
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 dark:text-gray-300 dark:hover:text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
