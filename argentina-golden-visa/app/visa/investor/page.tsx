import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import InvestorVisaContent from './InvestorVisaContent';

export const metadata: Metadata = {
  title: 'Inversionista Visa | Investor Residency in Argentina',
  description:
    'Obtain Argentine residency through investment. Learn about the Inversionista visa requirements, process, and benefits.',
};

export default function InvestorVisaPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Inversionista Visa"
        subtitle="Investor Residency"
        description="Secure your Argentine residency through a qualifying investment and open the door to citizenship in just 2 years."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        breadcrumbs={[
          { label: 'Visa Options', href: '/visa-options' },
          { label: 'Investor Visa', href: '/visa/investor' },
        ]}
      />
      <InvestorVisaContent />
      <ContactCTA
        title="Ready to Invest in Your Future?"
        description="Our team will guide you through every step of the investor visa process, from finding qualifying investments to obtaining your residency."
      />
      <Footer />
    </main>
  );
}
