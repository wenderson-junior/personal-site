"use client";

import { Container } from "../ui/Container";
import { Logo } from "./Logo";
import { NavItems } from "./NavItems";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState<boolean | null>(null);

  useEffect(() => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-17 fixed top-0 z-50 ${
        scrolled === true ? "border-b border-transparent dark:border-gray-900 dark:bg-gray/50 backdrop-blur-xl shadow-sm" : ""
      }`}
    >
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <NavItems />
            <MobileMenu className="ml-4" />
          </div>
        </div>
      </Container>
    </header>
  );
}
