import { useTranslations } from 'next-intl';

type HeroSubtitleProps = {
  className?: string;
};

export function HeroSubtitle({ className = '' }: HeroSubtitleProps) {
  const t = useTranslations('hero');
  
  return (
    <p className={`text-md md:text-md dark:text-gray-300 max-w-2xl ${className}`}>
      {t('subtitle')}
    </p>
  );
}
