
"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const maleStyles = [
  { id: 'm1', name: 'Classic Agbada', designer: 'Ade Bakare', imageUrl: 'https://placehold.co/400x600/CC6633/F7E7CE', aiHint: 'male agbada fashion' },
  { id: 'm2', name: 'Modern Senator', designer: 'Yomi Casual', imageUrl: 'https://placehold.co/400x600/E2725B/F7E7CE', aiHint: 'male senator wear' },
  { id: 'm3', name: 'Urban Dashiki', designer: 'Orange Culture', imageUrl: 'https://placehold.co/400x600/5A4D41/F7E7CE', aiHint: 'male dashiki outfit' },
  { id: 'm4', name: 'Regal Brocade', designer: 'Mai Atafo', imageUrl: 'https://placehold.co/400x600/CC6633/F7E7CE', aiHint: 'male brocade suit' },
];

const femaleStyles = [
  { id: 'f1', name: 'Elegant Iro & Buba', designer: 'Deola Sagoe', imageUrl: 'https://placehold.co/400x600/CC6633/F7E7CE', aiHint: 'female iro buba' },
  { id: 'f2', name: 'Chic Ankara Gown', designer: 'Lisa Folawiyo', imageUrl: 'https://placehold.co/400x600/E2725B/F7E7CE', aiHint: 'female ankara gown' },
  { id: 'f3', name: 'Modern Aso Ebi', designer: 'Toju Foyeh', imageUrl: 'https://placehold.co/400x600/5A4D41/F7E7CE', aiHint: 'female aso ebi' },
  { id: 'f4', name: 'Sophisticated Kaftan', designer: 'Lanre Da Silva Ajayi', imageUrl: 'https://placehold.co/400x600/CC6633/F7E7CE', aiHint: 'female kaftan dress' },
];

const StyleCarousel = ({ styles }: { styles: typeof maleStyles }) => (
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-8 sm:px-0"
  >
    <CarouselContent className="-ml-2 sm:-ml-4">
      {styles.map((style) => (
        <CarouselItem key={style.id} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 p-2 sm:p-2">
          <Card className="group overflow-hidden h-full flex flex-col champagne-hover shadow-lg border-primary/10 transform transition-all duration-300 hover:scale-105">
            <CardHeader className="p-0">
              <div className="aspect-[3/4] relative w-full">
                <Image
                  src={style.imageUrl}
                  alt={style.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={style.aiHint}
                  className="transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 flex-grow">
              <CardTitle className="text-lg sm:text-xl font-headline text-primary">{style.name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm text-foreground/70 mt-1">
                By {style.designer}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-3 sm:p-4 pt-0">
               <Badge variant="outline" className="border-accent text-accent text-xs sm:text-sm">Inspiration</Badge>
            </CardFooter>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-0 sm:-left-4 md:-left-8 bg-background/80 hover:bg-primary hover:text-primary-foreground" />
    <CarouselNext className="right-0 sm:-right-4 md:-right-8 bg-background/80 hover:bg-primary hover:text-primary-foreground" />
  </Carousel>
);

export default function LookbookSection() {
  return (
    <section id="lookbook" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4 font-headline">
          Style Lookbook
        </h2>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
          Discover curated style suggestions to inspire your attire for the Owanbe Evening.
        </p>
        <Tabs defaultValue="female" className="w-full">
          <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-2 bg-primary/10">
            <TabsTrigger value="female" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm sm:text-base">Female Styles</TabsTrigger>
            <TabsTrigger value="male" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm sm:text-base">Male Styles</TabsTrigger>
          </TabsList>
          <TabsContent value="female" className="mt-8 sm:mt-10">
            <StyleCarousel styles={femaleStyles} />
          </TabsContent>
          <TabsContent value="male" className="mt-8 sm:mt-10">
            <StyleCarousel styles={maleStyles} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
