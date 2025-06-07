
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DripboardSection from '@/components/sections/DripboardSection';

export default function DripboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <DripboardSection />
      </main>
      <Footer />
    </div>
  );
}
