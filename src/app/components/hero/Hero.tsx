import { HeroTitle } from './HeroTitle';
import { HeroSubtitle } from './HeroSubtitle';
import { HeroCTA } from './HeroCTA';
import { HeroImage } from './HeroImage';
import { Container } from '../ui/Container';

type HeroProps = {
  className?: string;
  imagePosition?: 'left' | 'right';
};

export function Hero({ 
  className = '',
  imagePosition = 'right'
}: HeroProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
          <div className="flex-2">
            <HeroTitle />
            <HeroSubtitle className="mt-4" />
            <HeroCTA className="mt-8" />
          </div>
          <div className="flex-1 flex justify-end">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
