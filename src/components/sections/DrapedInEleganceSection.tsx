"use client";

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function DrapedInEleganceSection() {
  const imageUrl = "https://i.ibb.co/Rp8R2kWv/Ms-Praise.png";
  const imageAlt = "Elegantly dressed woman in traditional attire";

  return (
    <section id="draped-in-elegance" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background/70">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-6 sm:mb-8 text-center">
          <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
            Draped in Elegance, Styled for Expression
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Image - now takes up 40% of width on desktop */}
          <div className="md:w-2/5 w-full">
            <div className="relative aspect-[3/4]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                layout="fill"
                objectFit="contain" 
                data-ai-hint="elegant woman traditional"
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content - now takes up 60% of width on desktop */}
          <div className="md:w-3/5 text-center md:text-left">
            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              <p>
                She doesn’t just wear tradition; she defines it. Draped in the richness of heritage and crowned with poise, this is not just a look; it’s a statement.
              </p>
              <p>
                From the intricate lace to the regal blue, every detail whispers grace and grandeur. The 24 Elders Dinner isn’t just about a night out; it’s about moments like this, where style meets story and culture takes center stage.
              </p>
              <p className="font-semibold text-primary/90">
                Unforgettable. Timeless. Undeniably iconic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
