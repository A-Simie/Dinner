import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DinnerThemePreview from '@/components/sections/DinnerThemePreview';
import LookbookSection from '@/components/sections/LookbookSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import VotingSection from '@/components/sections/VotingSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Separator className="my-0 border-primary/10" />
        <DinnerThemePreview />
        <Separator className="my-0 border-primary/10" />
        <LookbookSection />
        <Separator className="my-0 border-primary/10" />
        <RegistrationSection />
        <Separator className="my-0 border-primary/10" />
        <VotingSection />
      </main>
      <Footer />
    </div>
  );
}
