
import Image from 'next/image';
import { Users } from 'lucide-react';

const eldersData = Array.from({ length: 24 }, (_, i) => ({
  id: `elder-${i + 1}`,
  imageUrl: `https://placehold.co/400x400.png`,
  alt: `Image of Elder ${i + 1}`,
  aiHint: 'elder portrait',
}));

export default function VisionariesSection() {
  return (
    <section id="visionaries" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
            The Visionaries Behind the Night
          </h2>
        </div>
        <p className="text-xl sm:text-2xl text-foreground/90 mb-8 sm:mb-12 font-headline">
            Meet The 24 Elders
        </p>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {eldersData.map((elder, index) => (
            <div key={elder.id} className="w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-lg shadow-xl border border-border group champagne-hover">
              <div className="aspect-square relative">
                <Image
                  src={elder.imageUrl}
                  alt={elder.alt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={elder.aiHint}
                  priority={index < 3} 
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-prose mx-auto text-left sm:text-center text-base sm:text-lg text-foreground/80 space-y-4">
          <p>
            This isn’t just another dinner, and these aren’t just organizers. The 24 Elders are style curators, vibe engineers, and elegance strategists.
          </p>
          <p>
            Inspired by the heavenly elders seated in glory, they’re the minds and hearts behind what’s about to be the most talked-about night of the season. Every detail is handpicked. Every vibe, intentional. Every guest, part of the vision.
          </p>
          <p>
            They’re not just planning an event. They’re setting the pace for something timeless and unforgettable.
          </p>
          <p className="font-semibold text-primary">
            You definitely don’t want to miss what they’re cooking.
          </p>
        </div>
      </div>
    </section>
  );
}
