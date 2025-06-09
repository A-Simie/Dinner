
import Image from 'next/image';
import { Users } from 'lucide-react';

export default function VisionariesSection() {
  const visionaryImageUrl = "https://i.ibb.co/mCCkhyRr/Whats-App-Image-2025-06-09-at-13-16-26-65389866.jpg";
  const visionaryImageAlt = "The Visionaries Behind the Night";

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

        <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl overflow-hidden rounded-lg shadow-xl border border-border group champagne-hover">
            <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2 md:aspect-w-4 md:aspect-h-3 relative">
              <Image
                src={visionaryImageUrl}
                alt={visionaryImageAlt}
                layout="fill"
                objectFit="cover"
                data-ai-hint="group photo event organizers" 
                priority
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
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
