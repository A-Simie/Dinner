import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VotingSection from '@/components/sections/VotingSection';

export default function VotePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <VotingSection />
      </main>
      <Footer />
    </div>
  );
}
