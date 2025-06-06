import Image from 'next/image';

type HeroImageProps = {
  className?: string;
};

export function HeroImage({ className = '' }: HeroImageProps) {
  return (
    <div className={`relative w-64 h-64 md:w-80 md:h-80 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
        <Image
          src="/images/profile.jpg"
          alt="Wenderson Junior"
          fill
          sizes="(max-width: 768px) 16rem, 20rem"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
