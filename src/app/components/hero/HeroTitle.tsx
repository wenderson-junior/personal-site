import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

type HeroTitleProps = {
  className?: string;
};

export function HeroTitle({ className = '' }: HeroTitleProps) {
  const t = useTranslations('hero');
  const [waveClass, setWaveClass] = useState('');
  
  useEffect(() => {
    // Simple animation that runs for 1.5 seconds every 5 seconds
    const interval = setInterval(() => {
      setWaveClass('animate-wave');
      
      setTimeout(() => {
        setWaveClass('');
      }, 1500);
    }, 5000);
    
    // Initial animation on component mount
    setWaveClass('animate-wave');
    setTimeout(() => setWaveClass(''), 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <h1 className={`font-extrabold leading-tight ${className}`}>
      <span className="block text-2xl md:text-4xl lg:text-5xl">
        {t('title.greeting')} {t('title.name')} 
        <span className={`inline-block ${waveClass}`}>👋</span>
      </span>
      <span className="block text-sm md:text-2xl lg:text-2xl mt-1 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        {t('title.role')}
      </span>
    </h1>
  );
}
