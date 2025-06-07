
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ThumbsUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Candidate {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  aiHint: string;
  initialLikes: number;
}

const initialCandidatesData: Candidate[] = [
  { id: 'c1', name: 'Adebayo Designs', category: 'Best Male Outfit Designer', imageUrl: 'https://placehold.co/400x300/CC6633/F7E7CE', aiHint: 'fashion designer logo', initialLikes: 120 },
  { id: 'c2', name: 'Chika Stylings', category: 'Best Female Outfit Designer', imageUrl: 'https://placehold.co/400x300/E2725B/F7E7CE', aiHint: 'fashion brand logo', initialLikes: 250 },
  { id: 'c3', name: 'The Alagas', category: 'Most Entertaining Host', imageUrl: 'https://placehold.co/400x300/5A4D41/F7E7CE', aiHint: 'event host portrait', initialLikes: 180 },
  { id: 'c4', name: 'DJ SpinFest', category: 'Best DJ Performance', imageUrl: 'https://placehold.co/400x300/F7E7CE/CC6633', aiHint: 'dj setup party', initialLikes: 300 },
];

export default function VotingSection() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let storedLikes: Record<string, number> = {};
    try {
      const storedLikesString = localStorage.getItem('owanbe_votes');
      if (storedLikesString) {
        storedLikes = JSON.parse(storedLikesString);
      }
    } catch (error) {
      console.error("Failed to parse stored likes:", error);
    }
    
    let storedLikedItems: Record<string, boolean> = {};
     try {
      const loadedLikedItemsString = localStorage.getItem('owanbe_liked_items');
      if (loadedLikedItemsString) {
        storedLikedItems = JSON.parse(loadedLikedItemsString);
      }
    } catch (error) {
      console.error("Failed to parse stored liked items:", error);
    }
    setLikedItems(storedLikedItems);

    setCandidates(
      initialCandidatesData.map(c => ({
        ...c,
        initialLikes: storedLikes[c.id] !== undefined ? storedLikes[c.id] : c.initialLikes,
      }))
    );
  }, []);

  const handleLike = (id: string) => {
    const isCurrentlyLiked = !!likedItems[id];
    
    setCandidates(prevCandidates => {
      const updatedCandidates = prevCandidates.map(candidate => {
        if (candidate.id === id) {
          const newLikes = isCurrentlyLiked ? candidate.initialLikes - 1 : candidate.initialLikes + 1;
          return { ...candidate, initialLikes: newLikes < 0 ? 0 : newLikes };
        }
        return candidate;
      });
      
      const currentLikesState = updatedCandidates.reduce((acc, curr) => {
        acc[curr.id] = curr.initialLikes;
        return acc;
      }, {} as Record<string, number>);
      try {
        localStorage.setItem('owanbe_votes', JSON.stringify(currentLikesState));
      } catch (error) {
        console.error("Failed to save likes to localStorage:", error);
      }
      return updatedCandidates;
    });

    setLikedItems(prevLiked => {
      const newLikedItems = {...prevLiked, [id]: !isCurrentlyLiked};
      try {
        localStorage.setItem('owanbe_liked_items', JSON.stringify(newLikedItems));
      } catch (error) {
        console.error("Failed to save liked items to localStorage:", error);
      }
      return newLikedItems;
    });
  };

  return (
    <section id="vote" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4 font-headline">
          Vote for Your Favorites
        </h2>
        <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto">
          Show your appreciation! Cast your votes for the most outstanding individuals and brands of the evening.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="overflow-hidden flex flex-col champagne-hover shadow-xl border-border">
              <CardHeader className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={candidate.aiHint}
                    className="transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 flex-grow text-left">
                <CardTitle className="text-lg sm:text-xl font-headline text-primary">{candidate.name}</CardTitle>
                <Badge variant="secondary" className="mt-2 bg-accent/20 text-accent-foreground/80 text-xs sm:text-sm">{candidate.category}</Badge>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-2">
                <div className="flex items-center gap-2 text-accent">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6" fill={likedItems[candidate.id] ? "currentColor" : "none"} />
                  <span className="text-base sm:text-lg font-semibold">{candidate.initialLikes}</span>
                </div>
                <Button
                  variant={likedItems[candidate.id] ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => handleLike(candidate.id)}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground data-[variant=destructive]:bg-accent data-[variant=destructive]:text-accent-foreground w-full xs:w-auto text-xs sm:text-sm"
                >
                  <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {likedItems[candidate.id] ? 'Unlike' : 'Like'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
