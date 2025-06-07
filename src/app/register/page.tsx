import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RegistrationSection from '@/components/sections/RegistrationSection';

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
