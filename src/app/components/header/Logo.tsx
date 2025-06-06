import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`text-xl font-extrabold cursor-pointer ${className}`}>
      &lt;WJR /&gt;
    </div>
  );
}
