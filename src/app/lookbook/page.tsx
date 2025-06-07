import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LookbookSection from '@/components/sections/LookbookSection';

export default function LookbookPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <LookbookSection />
      </main>
      <Footer />
    </div>
  );
}
