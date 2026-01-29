import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FourPillars from '@/components/FourPillars';
import Destinations from '@/components/Destinations';
import FeaturedOpportunities from '@/components/FeaturedOpportunities';
import Testimonials from '@/components/Testimonials';
import Editorial from '@/components/Editorial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FourPillars />
      <Destinations />
      <FeaturedOpportunities />
      <Testimonials />
      <Editorial />
      <Footer />
    </main>
  );
}
