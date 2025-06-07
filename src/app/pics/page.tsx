import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LandingPicsSection from '@/components/sections/LandingPicsSection';

export default function PicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LandingPicsSection />
      </main>
      <Footer />
    </div>
  );
}
