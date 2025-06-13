
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react'; // Can change this icon if needed for "Decor" theme

const landingImages = [
  {
    id: 'decor1',
    alt: 'Elegant event decor setup with floral arrangements',
    imageUrl: 'https://i.ibb.co/kVyy7FFF/Whats-App-Image-2025-06-11-at-08-26-17-c8d3333f.jpg',
    aiHint: 'event decor',
  },
  {
    id: 'decor2',
    alt: 'Luxury table setting with gold accents for Owanbe Evening',
    imageUrl: 'https://i.ibb.co/VYRgCMdN/Whats-App-Image-2025-06-11-at-08-26-17-df9ad503.jpg',
    aiHint: 'table setting',
  },
  {
    id: 'decor3',
    alt: 'Stylish event ambiance with warm lighting',
    imageUrl: 'https://i.ibb.co/bRRmgdvX/Whats-App-Image-2025-06-11-at-08-26-18-7e8c0365.jpg',
    aiHint: 'event ambiance',
  },
];

export default function LandingPicsSection() {
  return (
    <section id="decor-preview" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
          <Camera className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" /> {/* Consider changing to Palette or Sparkles for decor */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
            Event Decor Preview
          </h2>
        </div>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
          Catch a glimpse of what to expect that Evening.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:max-w-2xl lg:max-w-3xl mx-auto">
          {landingImages.map((pic) => (
            <Card key={pic.id} className="overflow-hidden champagne-hover shadow-xl border-border group transform transition-all duration-300 hover:scale-105">
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
