import CountdownTimer from '@/components/shared/CountdownTimer';
import Image from 'next/image';

export default function HeroSection() {
  // Set target date for the event (e.g., 30 days from now)
  const targetEventDate = new Date();
  targetEventDate.setDate(targetEventDate.getDate() + 30);

  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/F7E7CE/CC6633"
        alt="Elegant event background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
        data-ai-hint="elegant party background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-[-1]"></div>
      
      <div className="relative z-10 space-y-8">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary font-headline leading-tight">
          An Evening of <br className="sm:hidden" /> Elegance & Expression
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
          Join us for an unforgettable night celebrating style, culture, and creativity.
        </p>
        <div className="mt-12">
          <CountdownTimer targetDate={targetEventDate} />
        </div>
      </div>
    </section>
  );
}
