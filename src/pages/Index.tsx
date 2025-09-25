import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedGrounds from '@/components/FeaturedGrounds';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedGrounds />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
