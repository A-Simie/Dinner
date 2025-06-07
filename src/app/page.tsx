
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import LandingPicsSection from '@/components/sections/LandingPicsSection';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Droplets } from 'lucide-react'; // Icon for Dripboard

const dripboardPreviewItems = [
  { id: 'f-preview-1', name: 'Golden Hour Elegance', imageUrl: 'https://i.ibb.co/XrJQ8pJH/image.jpg', aiHint: 'african fashion gold', category: 'Female' },
  { id: 'f-preview-2', name: 'Yoruba Bridal Bliss', imageUrl: 'https://i.ibb.co/CpbgbzCX/Yoruba-Bride-Yoruba-Wedding.jpg', aiHint: 'yoruba bride traditional', category: 'Female' },
  { id: 'm-preview-1', name: 'Classic Agbada', imageUrl: 'https://placehold.co/400x500/CC6633/F7E7CE', aiHint: 'male agbada fashion', category: 'Male' },
  { id: 'm-preview-2', name: 'Modern Senator', imageUrl: 'https://placehold.co/400x500/E2725B/F7E7CE', aiHint: 'male senator wear', category: 'Male' },
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
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto mb-8">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline">Featured Drips</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
                    {dripboardPreviewItems.map((item) => (
                      <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg champagne-hover">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={400}
                          height={500}
                          className="object-cover w-full h-auto aspect-[4/5] transform transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={item.aiHint}
                        />
                         <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-center">
                            <p className="text-xs sm:text-sm font-semibold text-white truncate">{item.name}</p>
                            <p className="text-[10px] sm:text-xs text-primary-foreground/80">{item.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
