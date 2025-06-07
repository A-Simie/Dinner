
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const landingImages = [
  {
    id: 'lp1',
    alt: 'Elegant table setting at Owanbe Evening',
    imageUrl: 'https://placehold.co/600x400/CC6633/F7E7CE',
    aiHint: 'elegant table setting',
  },
  {
    id: 'lp2',
    alt: 'Guests enjoying the Owanbe Evening',
    imageUrl: 'https://placehold.co/600x400/E2725B/F7E7CE',
    aiHint: 'party guests mingling',
  },
  {
    id: 'lp3',
    alt: 'Stylish fashion at Owanbe Evening',
    imageUrl: 'https://placehold.co/600x400/5A4D41/F7E7CE',
    aiHint: 'african fashion style',
  },
   {
    id: 'lp4',
    alt: 'Vibrant cultural performance',
    imageUrl: 'https://placehold.co/600x400/F7E7CE/5A4D41',
    aiHint: 'cultural dance performance',
  },
];

export default function LandingPicsSection() {
  return (
    <section id="pics" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
            Event Snapshots
          </h2>
        </div>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
          Catch a glimpse of the unforgettable moments and stunning visuals from past Owanbe Evenings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {landingImages.map((pic) => (
            <Card key={pic.id} className="overflow-hidden champagne-hover shadow-xl border-primary/20 group">
              <CardContent className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={pic.imageUrl}
                    alt={pic.alt}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={pic.aiHint}
                    className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
