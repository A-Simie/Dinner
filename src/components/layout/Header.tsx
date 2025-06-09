
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Dripboard', href: '/dripboard' },
    { name: 'Register', href: '/register' },
    { name: 'Vote', href: '/vote' },
  ];

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="https://i.ibb.co/Q1xx0Qx/Iconic-Image-EDIT-1.png" 
            alt="Owanbe Evening Logo" 
            width={32} 
            height={32} 
            className="h-7 w-7 sm:h-8 sm:w-8"
          />
          <h1 className="text-2xl sm:text-3xl font-headline font-bold text-primary">
            Owanbe Evening
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-3 lg:space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background p-6">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <SheetTrigger key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="text-lg text-foreground hover:text-primary transition-colors duration-300 py-2 border-b border-border last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  </SheetTrigger>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
