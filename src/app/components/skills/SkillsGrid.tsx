"use client";

import { SkillCard } from "./SkillCard";
import { 
  SiJavascript, SiTypescript, SiVuedotjs, SiNuxtdotjs, 
  SiReact, SiNextdotjs, SiFigma, SiTailwindcss, 
  SiHtml5, SiCss3, SiSass, SiGit, SiGithub, 
  SiCypress, SiJest, SiGithubcopilot
} from "react-icons/si";

export function SkillsGrid() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "HTML 5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS 3", icon: SiCss3, color: "text-blue-500" },
    { name: "SASS", icon: SiSass, color: "text-pink-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Nuxt.js", icon: SiNuxtdotjs, color: "text-green-500" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Cypress", icon: SiCypress, color: "text-gray-300" },
    { name: "Jest", icon: SiJest, color: "text-red-600" },
    { name: "AI Copilot", icon: SiGithubcopilot, color: "text-blue-500" },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
      {skills.map((skill) => (
        <div 
          key={skill.name} 
        >
          <SkillCard 
            name={skill.name}
            Icon={skill.icon}
            iconColor={skill.color}
          />
        </div>
      ))}
    </div>
  );
}
