import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DinnerThemePreview from '@/components/sections/DinnerThemePreview';

export default function ThemePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <DinnerThemePreview />
      </main>
      <Footer />
    </div>
  );
}
