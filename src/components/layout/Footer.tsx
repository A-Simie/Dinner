
import { Linkedin, Instagram } from 'lucide-react';

// Simple SVG for TikTok icon as it's not in Lucide
const TikTokIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="h-5 w-5 sm:h-6 sm:w-6"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.73-.23.65-.22 1.35-.02 2.01.19.63.6 1.19 1.12 1.58.91.68 2.15.77 3.2.34.04-1.11.02-2.22.02-3.33v-4.35c-.51-.04-1.02-.1-1.52-.19-1.19-.21-2.28-.64-3.24-1.25-.38-.23-.74-.52-1.06-.83-.2-.18-.38-.39-.54-.61-.04-.05-.08-.1-.12-.16-.15-.23-.28-.48-.39-.73-.17-.39-.29-.8-.35-1.21-.08-.52-.04-1.05.07-1.57.23-1.01.72-1.97 1.4-2.79.89-1.05 2.11-1.76 3.42-2.09.54-.14 1.08-.2 1.62-.26zm.64 4.18c-.19-.01-.38-.02-.57-.02-.01 1.26.03 2.52.03 3.78.01.15.11.25.26.27.16.03.32.01.47-.05.5-.18.89-.53 1.09-.99.17-.41.19-.85.1-1.28-.08-.37-.28-.72-.53-.99a1.58 1.58 0 0 0-1.1-.47c-.01 0-.02-.01-.02-.01z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-muted text-muted-foreground text-center border-t border-border">
      <div className="container mx-auto">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Owanbe Evening. All rights reserved.
        </p>
        <p className="text-[10px] sm:text-xs mt-1">Elegance & Expression Redefined.</p>
        
        <p className="text-xs sm:text-sm mt-6">Powered by A.Simie</p>
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-3">
          <a href="https://www.linkedin.com/in/mosimiloluwa-a-21b0711a9/" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="https://www.instagram.com/a.simie/" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a href="https://www.tiktok.com/@a.simie" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <TikTokIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
