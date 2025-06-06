import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

type HeroCTAProps = {
  className?: string;
};

export function HeroCTA({ className = '' }: HeroCTAProps) {
  const t = useTranslations('hero');
  const locale = useLocale();
  
  // URLs para download do currículo conforme o idioma
  const resumeUrl = locale === 'pt-BR' 
    ? 'https://drive.google.com/file/d/10Jra0HTtCu6dIZQGUtiPo81DcMk4hsnS/view?usp=sharing'
    : 'https://drive.google.com/file/d/1vF4_yVujDH0dYILcY74CCCMvxjmpf9mV/view?usp=sharing';
  
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {/* Botão de download do currículo */}
      <a 
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
      >
        <FaFileDownload className="text-lg" />
        {t('cta.resume')}
      </a>
      
      {/* Botão do LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/wenderson-junior/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 flex items-center gap-2"
      >
        <FaLinkedin className="text-lg text-blue-600" />
        {t('cta.linkedin')}
      </a>
      
      {/* Botão do GitHub */}
      <a 
        href="https://github.com/wenderson-junior"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 font-medium rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 flex items-center gap-2"
      >
        <FaGithub className="text-lg" />
        {t('cta.github')}
      </a>
    </div>
  );
}
