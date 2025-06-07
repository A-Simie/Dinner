import Link from 'next/link';
import { PartyPopper } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-background shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <PartyPopper className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-headline font-bold text-primary">
            Owanbe Evening
          </h1>
        </Link>
        <nav className="space-x-6">
          {['Home', 'Theme', 'Lookbook', 'Register', 'Vote'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
