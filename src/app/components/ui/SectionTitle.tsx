"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-2 ${className}`}>
      {children}
    </h2>
  );
}
