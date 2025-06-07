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

const initialCandidates: Candidate[] = [
  { id: 'c1', name: 'Adebayo Designs', category: 'Best Male Outfit Designer', imageUrl: 'https://placehold.co/400x300/CC6633/F7E7CE', aiHint: 'fashion designer logo', initialLikes: 120 },
  { id: 'c2', name: 'Chika Stylings', category: 'Best Female Outfit Designer', imageUrl: 'https://placehold.co/400x300/E2725B/F7E7CE', aiHint: 'fashion brand logo', initialLikes: 250 },
  { id: 'c3', name: 'The Alagas', category: 'Most Entertaining Host', imageUrl: 'https://placehold.co/400x300/5A4D41/F7E7CE', aiHint: 'event host portrait', initialLikes: 180 },
  { id: 'c4', name: 'DJ SpinFest', category: 'Best DJ Performance', imageUrl: 'https://placehold.co/400x300/F7E7CE/CC6633', aiHint: 'dj setup party', initialLikes: 300 },
];

export default function VotingSection() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize candidates with likes from local storage or initial values
    const storedLikes = localStorage.getItem('owanbe_votes');
    const parsedLikes = storedLikes ? JSON.parse(storedLikes) : {};
    
    const loadedLikedItems = localStorage.getItem('owanbe_liked_items');
    const parsedLikedItems = loadedLikedItems ? JSON.parse(loadedLikedItems) : {};
    setLikedItems(parsedLikedItems);

    setCandidates(
      initialCandidates.map(c => ({
        ...c,
        initialLikes: parsedLikes[c.id] !== undefined ? parsedLikes[c.id] : c.initialLikes,
      }))
    );
  }, []);

  const handleLike = (id: string) => {
    setCandidates(prevCandidates => {
      const updatedCandidates = prevCandidates.map(candidate => {
        if (candidate.id === id) {
          const newLikes = likedItems[id] ? candidate.initialLikes -1 : candidate.initialLikes + 1;
          return { ...candidate, initialLikes: newLikes < 0 ? 0 : newLikes };
        }
        return candidate;
      });
      // Update local storage for likes
      const currentLikesState = updatedCandidates.reduce((acc, curr) => {
        acc[curr.id] = curr.initialLikes;
        return acc;
      }, {} as Record<string, number>);
      localStorage.setItem('owanbe_votes', JSON.stringify(currentLikesState));
      return updatedCandidates;
    });

    setLikedItems(prevLiked => {
      const newLikedItems = {...prevLiked, [id]: !prevLiked[id]};
      localStorage.setItem('owanbe_liked_items', JSON.stringify(newLikedItems));
      return newLikedItems;
    });
  };

  return (
    <section id="vote" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-headline">
          Vote for Your Favorites
        </h2>
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          Show your appreciation! Cast your votes for the most outstanding individuals and brands of the evening.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="overflow-hidden flex flex-col champagne-hover shadow-xl border-primary/10">
              <CardHeader className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={candidate.imageUrl}
                    alt={candidate.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={candidate.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow text-left">
                <CardTitle className="text-xl font-headline text-primary">{candidate.name}</CardTitle>
                <Badge variant="secondary" className="mt-2 bg-accent/20 text-accent-foreground/80">{candidate.category}</Badge>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="flex items-center gap-2 text-accent">
                  <Heart className="h-6 w-6" fill={likedItems[candidate.id] ? "currentColor" : "none"} />
                  <span className="text-lg font-semibold">{candidate.initialLikes}</span>
                </div>
                <Button
                  variant={likedItems[candidate.id] ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => handleLike(candidate.id)}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground data-[variant=destructive]:bg-accent data-[variant=destructive]:text-accent-foreground"
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
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
