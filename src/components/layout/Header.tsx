import Link from 'next/link';
import { PartyPopper } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Pics', href: '/pics' },
    { name: 'Theme', href: '/theme' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Register', href: '/register' },
    { name: 'Vote', href: '/vote' },
  ];

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <PartyPopper className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline font-bold text-primary">
            Owanbe Evening
          </h1>
        </Link>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm sm:text-base"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
