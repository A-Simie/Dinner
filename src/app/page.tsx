
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import LandingPicsSection from '@/components/sections/LandingPicsSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Separator className="my-0 border-accent/30" />
        <LandingPicsSection />
      </main>
      <Footer />
    </div>
  );
}
