
"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Droplets } from 'lucide-react';

interface StyleItem {
  id: string;
  name: string;
  designer: string;
  imageUrl: string;
  aiHint: string;
}

const femaleStyles: StyleItem[] = [
  { id: 'f1', name: 'Golden Hour Elegance', designer: 'Chic Afrique', imageUrl: 'https://i.ibb.co/XrJQ8pJH/image.jpg', aiHint: 'african fashion gold' },
  { id: 'f2', name: 'Yoruba Bridal Bliss', designer: 'Traditions by Simi', imageUrl: 'https://i.ibb.co/CpbgbzCX/Yoruba-Bride-Yoruba-Wedding.jpg', aiHint: 'yoruba bride traditional' },
  { id: 'f3', name: 'Regal Green Ensemble', designer: 'Prudent Gabriel', imageUrl: 'https://i.ibb.co/DH7zJ0WB/Prudent-Gabriel-Nigeria.jpg', aiHint: 'nigerian traditional green' },
  { id: 'f4', name: 'Crimson Aso Ebi', designer: 'Empire of Upgrade', imageUrl: 'https://i.ibb.co/20cjLnBs/This-is-so-lovely-Designer-empireofupgrade.jpg', aiHint: 'red aso ebi' },
  { id: 'f5', name: 'Luxury Aso Oke Two-Piece', designer: 'Heritage Weaves', imageUrl: 'https://i.ibb.co/SDtJRJ8d/Luxury-African-2-Piece-Dress-African-Aso-oke-Three-Piece-Hand-Woven-Dress-African-Wedding-Guest-Dres.jpg', aiHint: 'aso oke two piece' },
  { id: 'f6', name: 'Couple Aso Oke Glam', designer: 'Twogether Styled', imageUrl: 'https://i.ibb.co/fY0pCDQD/23-Aso-Oke-Styles-For-Yoruba-Couples-2020-Yoruba-Wedding-Catalogue.jpg', aiHint: 'yoruba couple asooke' },
  { id: 'f7', name: 'Azure Gele Statement', designer: 'Headwraps R Us', imageUrl: 'https://i.ibb.co/20bfZnBM/download-3.jpg', aiHint: 'blue gele style' },
  { id: 'f8', name: 'Classic Iro & Buba', designer: 'Vintage Cultures', imageUrl: 'https://i.ibb.co/cK7k0jNJ/Yoruba-Woman-Iro-ati-Buba-Gele.jpg', aiHint: 'iro buba gele' },
  { id: 'f9', name: 'Modern Ankara Print', designer: 'Ankara Vibes', imageUrl: 'https://i.ibb.co/7tdfPJ3Y/download-2.jpg', aiHint: 'ankara print modern' },
  { id: 'f10', name: 'Emerald Lace Gown', designer: 'Lace & Grace', imageUrl: 'https://i.ibb.co/Mxsh1jMt/download-1.jpg', aiHint: 'green lace dress' },
];

const maleStyles: StyleItem[] = [
  { id: 'm1', name: 'Classic Agbada', designer: 'Ade Bakare', imageUrl: 'https://placehold.co/400x500/CC6633/F7E7CE', aiHint: 'male agbada fashion' },
  { id: 'm2', name: 'Modern Senator', designer: 'Yomi Casual', imageUrl: 'https://placehold.co/400x500/E2725B/F7E7CE', aiHint: 'male senator wear' },
  { id: 'm3', name: 'Urban Dashiki', designer: 'Orange Culture', imageUrl: 'https://placehold.co/400x500/5A4D41/F7E7CE', aiHint: 'male dashiki outfit' },
  { id: 'm4', name: 'Regal Brocade', designer: 'Mai Atafo', imageUrl: 'https://placehold.co/400x500/AA7739/F7E7CE', aiHint: 'male brocade suit' },
  { id: 'm5', name: 'Elegant Kaftan', designer: 'Northern Styles', imageUrl: 'https://placehold.co/400x500/B08D57/F7E7CE', aiHint: 'male kaftan elegant' },
  { id: 'm6', name: 'Sharp Tuxedo', designer: 'Evening Wear Inc.', imageUrl: 'https://placehold.co/400x500/332211/F7E7CE', aiHint: 'black tuxedo formal' },
];

const StyleGrid = ({ styles }: { styles: StyleItem[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
      {styles.map((style) => (
            <Card key={style.id} className="group overflow-hidden h-fit flex flex-col champagne-hover shadow-lg border-border transform transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={style.imageUrl}
                    alt={style.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg transform transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={style.aiHint}
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
      ))}
    </div>
  );
};


export default function DripboardSection() {
  return (
    <section id="dripboard" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-3 sm:mb-4">
            <Droplets className="h-10 w-10 sm:h-12 sm:w-12 text-primary mr-2 sm:mr-3" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
            Owanbe Dripboard
            </h2>
        </div>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
          Discover curated style suggestions to inspire your attire for the Owanbe Evening.
        </p>
        <Tabs defaultValue="female" className="w-full">
          <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-2 bg-primary/10">
            <TabsTrigger value="female" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm sm:text-base">Female Styles</TabsTrigger>
            <TabsTrigger value="male" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm sm:text-base">Male Styles</TabsTrigger>
          </TabsList>
          <TabsContent value="female" className="mt-8 sm:mt-10">
            <StyleGrid styles={femaleStyles} />
          </TabsContent>
          <TabsContent value="male" className="mt-8 sm:mt-10">
            <StyleGrid styles={maleStyles} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
