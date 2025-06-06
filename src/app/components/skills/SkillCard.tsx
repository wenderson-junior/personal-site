"use client";

import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
  iconColor: string;
}

export function SkillCard({ name, Icon, iconColor }: SkillCardProps) {
  return (
    <div className="group relative flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 shadow-xl">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm rounded-lg sm:rounded-xl"></div>
      <div className={`relative text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-3 ${iconColor} transition-all duration-500 group-hover:scale-110`}>
        <Icon style={{
          filter: 'drop-shadow(0 0 2px currentColor)',
          transition: 'filter 0.5s ease',
        }} />
      </div>
      <span className="relative text-xs sm:text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">{name}</span>
    </div>
  );
}
