import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const themes = [
  {
    id: '1',
    title: 'Enchanted Garden',
    description: 'Lush greenery, floral arrangements, and soft lighting.',
    imageUrl: 'https://placehold.co/600x400/CC6633/F7E7CE',
    aiHint: 'enchanted garden dinner'
  },
  {
    id: '2',
    title: 'Modern Glamour',
    description: 'Sleek lines, metallic accents, and sophisticated ambiance.',
    imageUrl: 'https://placehold.co/600x400/E2725B/F7E7CE',
    aiHint: 'modern glamour party'
  },
  {
    id: '3',
    title: 'Royal Affair',
    description: 'Opulent decor, rich colors, and a touch of regality.',
    imageUrl: 'https://placehold.co/600x400/5A4D41/F7E7CE',
    aiHint: 'royal dinner theme'
  },
];

export default function DinnerThemePreview() {
  return (
    <section id="theme" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background/80">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-headline">
          Dinner Theme Preview
        </h2>
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          Get a glimpse of the aesthetic and mood we're curating for this special evening.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Card key={theme.id} className="overflow-hidden champagne-hover shadow-xl border-primary/20">
              <CardHeader className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={theme.imageUrl}
                    alt={theme.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={theme.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-left">
                <CardTitle className="text-2xl font-headline text-primary">{theme.title}</CardTitle>
                <CardDescription className="text-foreground/70 mt-2">{theme.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
