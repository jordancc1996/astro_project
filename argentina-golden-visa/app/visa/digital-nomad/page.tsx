'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import {
  Check,
  Wifi,
  Coffee,
  Sun,
  DollarSign,
  Globe,
  Laptop,
  MapPin,
  Clock,
} from 'lucide-react';

const benefits = [
  {
    icon: Wifi,
    title: 'Excellent Connectivity',
    description: 'Fast fiber internet available throughout Buenos Aires and major cities.',
  },
  {
    icon: Coffee,
    title: 'Coworking Culture',
    description: 'Vibrant coworking scene with modern spaces in every neighborhood.',
  },
  {
    icon: Sun,
    title: 'Great Weather',
    description: 'Four seasons with mild winters and plenty of sunny days year-round.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Living',
    description: 'Live well on $1,500-2,500/month including rent, food, and entertainment.',
  },
  {
    icon: Globe,
    title: 'Time Zone Advantage',
    description: 'Perfect overlap with US East Coast and European business hours.',
  },
  {
    icon: MapPin,
    title: 'Travel Hub',
    description: 'Easy access to explore South America with affordable regional flights.',
  },
];

const neighborhoods = [
  {
    name: 'Palermo',
    description: 'The heart of BA\'s digital nomad scene with endless cafes and coworking spaces.',
    vibe: 'Trendy & Social',
  },
  {
    name: 'Recoleta',
    description: 'Elegant neighborhood with European architecture and upscale amenities.',
    vibe: 'Classic & Refined',
  },
  {
    name: 'San Telmo',
    description: 'Bohemian quarter with cobblestone streets, antiques, and authentic tango.',
    vibe: 'Artistic & Historic',
  },
  {
    name: 'Belgrano',
    description: 'Quiet residential area popular with families and long-term expats.',
    vibe: 'Residential & Green',
  },
];

const requirements = [
  'Valid passport with at least 6 months validity',
  'Proof of remote employment or freelance contracts',
  'Minimum income of ~$1,500/month',
  'Health insurance coverage',
  'Clean criminal background check',
  'Proof of accommodation (rental contract or booking)',
];

export default function DigitalNomadVisaPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Digital Nomad Visa"
        subtitle="Remote Work Residency"
        description="Work remotely from Buenos Aires and explore Argentina while building toward permanent residency and citizenship."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        breadcrumbs={[
          { label: 'Visa Options', href: '/visa-options' },
          { label: 'Digital Nomad', href: '/visa/digital-nomad' },
        ]}
      />

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
                Overview
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-6">
                Work Remotely, <span className="italic">Live Fully</span>
              </h2>
              <div className="space-y-4 font-sans text-navy-600 leading-relaxed">
                <p>
                  Argentina has become one of the world&apos;s top destinations for digital
                  nomads, offering an unbeatable combination of low costs, high quality
                  of life, and a path to permanent residency.
                </p>
                <p>
                  While working for clients abroad, you can enjoy Buenos Aires&apos; legendary
                  cafe culture, world-class steakhouses, and vibrant nightlife – all while
                  your foreign income remains tax-free under Argentina&apos;s territorial
                  tax system.
                </p>
                <p>
                  Best of all, your time as a digital nomad counts toward the 2-year
                  residency requirement for citizenship, making Argentina one of the
                  fastest paths to a second passport.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <DollarSign className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    $1,500-2,500/month cost
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Laptop className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    100+ Coworking Spaces
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    US/EU Time Zone Overlap
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Coworking space in Buenos Aires"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
                <p className="font-serif text-3xl text-gold-400 mb-1">#3</p>
                <p className="font-sans text-xs tracking-wider uppercase text-white/70">
                  Best City for Nomads
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
              Why Buenos Aires
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light">
              The Perfect <span className="italic">Home Base</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="font-sans text-navy-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding bg-navy-950">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-gold-400 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
              Where to Live
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Popular <span className="italic text-gold-400">Neighborhoods</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl text-white">
                    {neighborhood.name}
                  </h3>
                  <span className="px-3 py-1 bg-gold-500/20 rounded-full font-sans text-xs text-gold-400">
                    {neighborhood.vibe}
                  </span>
                </div>
                <p className="font-sans text-white/60 leading-relaxed">
                  {neighborhood.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
                Requirements
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-6">
                How to <span className="italic">Qualify</span>
              </h2>
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                The digital nomad pathway uses the Rentista visa framework, requiring
                proof of remote income and employment.
              </p>

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold-600" />
                    </div>
                    <span className="font-sans text-navy-700">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
                alt="Digital nomads collaborating"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Ready to Make the Move?"
        description="Let us help you transition from tourist to resident. Book a consultation to discuss your digital nomad visa options."
      />
      <Footer />
    </main>
  );
}
