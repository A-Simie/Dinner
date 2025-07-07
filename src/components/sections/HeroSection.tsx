
import CountdownTimer from '@/components/shared/CountdownTimer';
import Image from 'next/image';
import TypewriterEffect from '@/components/shared/TypewriterEffect';

export default function HeroSection() {
  // Set target date for the event to July 23rd, current year, at 5:00 PM
  const targetEventDate = new Date(new Date().getFullYear(), 6, 23, 17, 0, 0);

  const heroTitle = (
    <>
      An Evening of <br className="xs:hidden sm:block md:hidden" /> Elegance & Expression
    </>
  );

  return (
    <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col items-center justify-center text-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Image
        src="https://i.ibb.co/Mk87ypjB/We-Made-Quilling-Window-Decorations.jpg"
        alt="Elegant event background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        data-ai-hint="elegant party background"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-[-1]"></div>
      
      <div className="relative z-10 space-y-6 sm:space-y-8">
        <TypewriterEffect 
          text={heroTitle} 
          speed={70}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-foreground drop-shadow font-headline leading-tight"
          tagName="h2"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-secondary-foreground max-w-xs sm:max-w-xl md:max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '1.5s', opacity: 0}}>
          Join us for an unforgettable night celebrating style, culture, and creativity.
        </p>
        
        <div className="mt-8 sm:mt-12 animate-fadeInUp" style={{animationDelay: '2s', opacity: 0}}>
          <CountdownTimer targetDate={targetEventDate} />
        </div>
        
      </div>
    </section>
  );
}
