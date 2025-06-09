
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

const dripboardPreviewItems = [
  { id: 'f-preview-1', name: 'Golden Hour Elegance', imageUrl: 'https://i.ibb.co/XrJQ8pJH/image.jpg', aiHint: 'african fashion gold', category: 'Female' },
  { id: 'm-preview-new-1', name: 'Azure Agbada Elegance', imageUrl: 'https://i.ibb.co/Pv73H4J5/download-9.jpg', aiHint: 'male agbada blue', category: 'Male' },
  { id: 'f-preview-2', name: 'Regal Green Ensemble', imageUrl: 'https://i.ibb.co/DH7zJ0WB/Prudent-Gabriel-Nigeria.jpg', aiHint: 'nigerian traditional green', category: 'Female' },
  { id: 'm-preview-new-2', name: 'Ceremonial Embroidery Suit', imageUrl: 'https://i.ibb.co/xKCMHb5s/African-Men-3-piece-Ceremonial-Suit-African-Men-Suit-with-Embroided-Jacket-African-wedding-and-groom.jpg', aiHint: 'african suit embroidery', category: 'Male' },
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

