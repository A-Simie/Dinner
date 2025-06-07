
export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-foreground text-background/80 text-center">
      <div className="container mx-auto">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Owanbe Evening. All rights reserved.
        </p>
        <p className="text-[10px] sm:text-xs mt-1">Elegance & Expression Redefined.</p>
      </div>
    </footer>
  );
}
