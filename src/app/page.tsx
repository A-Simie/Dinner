
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import LandingPicsSection from '@/components/sections/LandingPicsSection';
import { Separator } from '@/components/ui/separator';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Droplets } from 'lucide-react';

// Selected distinct styles for the preview carousel
// Using 3rd and 4th items from female and male style lists respectively
const dripboardPreviewItems = [
  { id: 'f-preview-3', name: 'Regal Green Ensemble', imageUrl: 'https://i.ibb.co/DH7zJ0WB/Prudent-Gabriel-Nigeria.jpg', aiHint: 'nigerian traditional green', category: 'Female' },
  { id: 'm-preview-3', name: 'Crystal Coated Kaftan', imageUrl: 'https://i.ibb.co/7PXn24c/African-traditional-clothing-with-coated-crystal-African-men-s-kaftan-2-piece-dress-Men-s-suit-attir.jpg', aiHint: 'male kaftan crystal', category: 'Male' },
  { id: 'f-preview-4', name: 'Crimson Aso Ebi', imageUrl: 'https://i.ibb.co/20cjLnBs/This-is-so-lovely-Designer-empireofupgrade.jpg', aiHint: 'red aso ebi', category: 'Female' },
  { id: 'm-preview-4', name: 'Ade Badol Custom Agbada', imageUrl: 'https://i.ibb.co/JW61P7d9/Ade-Badol-custom-4-Piece-agbada.jpg', aiHint: 'agbada custom piece', category: 'Male' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Separator className="my-0 border-accent/30" />
        <LandingPicsSection />
        <Separator className="my-12 border-accent/30" />
        
        <section id="dripboard-preview" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto text-center">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
                <Droplets className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
                Dripboard Sneak Peek
                </h2>
            </div>
            <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
              Get a taste of the styles inspiring our Owanbe Evening.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8"
            >
              <CarouselContent>
                {dripboardPreviewItems.map((item) => (
                  <CarouselItem key={item.id} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 p-2">
                    <Card className="group relative overflow-hidden rounded-lg shadow-lg champagne-hover h-full flex flex-col">
                      <CardContent className="p-0 flex-grow">
                        <div className="aspect-[4/5] relative w-full">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={item.aiHint}
                          />
                        </div>
                         <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center">
                            <p className="text-xs sm:text-sm font-semibold text-white truncate">{item.name}</p>
                            <p className="text-[10px] sm:text-xs text-primary-foreground/80">{item.category}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-0 sm:ml-4" />
              <CarouselNext className="mr-0 sm:mr-4" />
            </Carousel>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground metallic-hover">
              <Link href="/dripboard">Explore Full Dripboard</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
