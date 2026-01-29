import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Argentina's Golden Visa | Luxury Residency & Citizenship Services",
  description:
    'Your gateway to Argentina. Expert guidance for investment residency, retirement visas, and citizenship in one of South America\'s most beautiful nations.',
  keywords: [
    'Argentina visa',
    'Argentina residency',
    'Argentina citizenship',
    'golden visa Argentina',
    'invest in Argentina',
    'retire in Argentina',
  ],
  openGraph: {
    title: "Argentina's Golden Visa",
    description: 'Your Gateway to the South. Secure Your Future in Argentina.',
    type: 'website',
    locale: 'en_US',
    url: 'https://argentinasgoldenvisa.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
