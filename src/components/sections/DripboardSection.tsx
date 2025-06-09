
"use client";

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  { id: 'm1', name: 'Azure Agbada Elegance', designer: 'Trad Stitches', imageUrl: 'https://i.ibb.co/Pv73H4J5/download-9.jpg', aiHint: 'male agbada blue' },
  { id: 'm2', name: 'Ceremonial Embroidery Suit', designer: 'Kulture Kings', imageUrl: 'https://i.ibb.co/xKCMHb5s/African-Men-3-piece-Ceremonial-Suit-African-Men-Suit-with-Embroided-Jacket-African-wedding-and-groom.jpg', aiHint: 'african suit embroidery' },
  { id: 'm3', name: 'Crystal Coated Kaftan', designer: 'Royal Garbs', imageUrl: 'https://i.ibb.co/7PXn24c/African-traditional-clothing-with-coated-crystal-African-men-s-kaftan-2-piece-dress-Men-s-suit-attir.jpg', aiHint: 'male kaftan crystal' },
  { id: 'm4', name: 'Ade Badol Custom Agbada', designer: 'Ade Badol', imageUrl: 'https://i.ibb.co/JW61P7d9/Ade-Badol-custom-4-Piece-agbada.jpg', aiHint: 'agbada custom piece' },
  { id: 'm5', name: 'Guest Asoebi Attire', designer: 'Asoebi Central', imageUrl: 'https://i.ibb.co/Wpqqg64h/JP2025-Guests-Asoebi.jpg', aiHint: 'male asoebi guest' },
  { id: 'm6', name: 'Yoruba Groom Traditional', designer: 'Wedding Styles Inc.', imageUrl: 'https://i.ibb.co/CK8LXq0z/Yoruba-Bride-and-Groom.jpg', aiHint: 'yoruba groom traditional' },
  { id: 'm7', name: 'Artist Couple Wedding Look', designer: 'Love & Threads', imageUrl: 'https://i.ibb.co/yc3WpLv6/Yoruba-couple-artist-9ice-and-his-wife-at-wedding.jpg', aiHint: 'yoruba couple wedding' },
  { id: 'm8', name: 'Blue & Gold Agbada', designer: 'Kings Attire Co.', imageUrl: 'https://i.ibb.co/KxP7zBkY/download-8.jpg', aiHint: 'blue gold agbada' },
  { id: 'm9', name: 'Pristine White Senator', designer: 'Classic Man Styles', imageUrl: 'https://i.ibb.co/3mSFL5wV/download-7.jpg', aiHint: 'white senator suit' },
  { id: 'm10', name: 'Patterned Agbada Ensemble', designer: 'Urban Trad Designs', imageUrl: 'https://i.ibb.co/2TS6Fv7/download-6.jpg', aiHint: 'patterned agbada set' },
  { id: 'm11', name: 'Modern Wine Agbada', designer: 'Tevriss Collection', imageUrl: 'https://i.ibb.co/YByG8h1v/Tevriss.jpg', aiHint: 'wine agbada modern' },
  { id: 'm12', name: 'Intricate White Agbada', designer: 'Luxe African Wear', imageUrl: 'https://i.ibb.co/gb3kLrjZ/download-5.jpg', aiHint: 'white agbada intricate' },
  { id: 'm13', name: 'Striped Senator Suit', designer: 'Senator Style House', imageUrl: 'https://i.ibb.co/Lhzp8NDH/download-4.jpg', aiHint: 'striped senator suit' },
  { id: 'm14', name: 'AMVCA Cultural Trad', designer: 'Event Styles Africa', imageUrl: 'https://i.ibb.co/fdq0TcSq/The-Gents-at-AMVCA10-Cultural-Night-Have-The-Perfect-Trad-Inspo.jpg', aiHint: 'cultural trad inspo' },
  { id: 'm15', name: 'Black Asooke Agbada', designer: 'Luxury Asooke Wear', imageUrl: 'https://i.ibb.co/C3Q7r2bq/Black-Luxurious-asooke-agbada-style-inspo.jpg', aiHint: 'black asooke agbada' },
];

const StyleGrid = ({ styles }: { styles: StyleItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {styles.map((style, index) => (
        <div 
            key={style.id} 
            className="champagne-hover rounded-lg overflow-hidden shadow-lg border border-border group"
        >
          <div className="aspect-[4/5] relative w-full">
            <Image
              src={style.imageUrl}
              alt={style.name}
              layout="fill"
              objectFit="cover"
              data-ai-hint={style.aiHint}
              priority={index < 6} 
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
              className="transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
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
    

    

    