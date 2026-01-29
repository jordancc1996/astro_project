'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import {
  Check,
  Clock,
  DollarSign,
  Laptop,
  TrendingUp,
  Building,
  Wallet,
  Globe,
  ArrowRight,
} from 'lucide-react';

const incomeTypes = [
  {
    icon: Building,
    title: 'Rental Income',
    description: 'Income from real estate properties you own anywhere in the world.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Dividends',
    description: 'Regular dividends from stocks, bonds, or investment portfolios.',
  },
  {
    icon: Wallet,
    title: 'Business Income',
    description: 'Passive income from businesses where you are not actively employed.',
  },
  {
    icon: Globe,
    title: 'Royalties',
    description: 'Income from intellectual property, books, music, or licensing.',
  },
];

const benefits = [
  'Work remotely for foreign clients while living in Argentina',
  'Territorial taxation – foreign income not taxed in Argentina',
  'Path to citizenship after 2 years of residency',
  'Include spouse and dependent children in application',
  'Access to Argentina\'s excellent healthcare system',
  'No physical presence requirements after initial application',
];

const requirements = [
  'Valid passport with at least 6 months validity',
  'Proof of passive income (~$2,000/month recommended)',
  'Bank statements showing regular income (6-12 months)',
  'Clean criminal background check',
  'Health certificate',
  'Proof of income source documentation',
  'Passport-sized photographs',
];

export default function RentistaVisaPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Rentista Visa"
        subtitle="Passive Income Residency"
        description="Live in Argentina on your passive income from investments, rental properties, or other sources."
        image="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&q=80"
        breadcrumbs={[
          { label: 'Visa Options', href: '/visa-options' },
          { label: 'Rentista Visa', href: '/visa/rentista' },
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
                Live on Your <span className="italic">Passive Income</span>
              </h2>
              <div className="space-y-4 font-sans text-navy-600 leading-relaxed">
                <p>
                  The Rentista Visa is perfect for individuals who have built passive
                  income streams and want to enjoy life in Argentina without traditional
                  employment.
                </p>
                <p>
                  Whether you earn from rental properties, investment dividends, royalties,
                  or other passive sources, this visa category allows you to legally reside
                  in Argentina while maintaining your income from abroad.
                </p>
                <p>
                  Combined with Argentina&apos;s territorial tax system, you can live
                  comfortably knowing your foreign income remains tax-free in your new
                  home country.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <DollarSign className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    ~$2,000/month income
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    4-8 Week Process
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Laptop className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    Remote Work OK
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Remote work lifestyle"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
                <p className="font-serif text-3xl text-gold-400 mb-1">0%</p>
                <p className="font-sans text-xs tracking-wider uppercase text-white/70">
                  Tax on Foreign Income
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifying Income Types */}
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
              Qualifying Income
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-4">
              Types of <span className="italic">Passive Income</span>
            </h2>
            <p className="font-sans text-navy-600 max-w-2xl mx-auto">
              The Rentista visa accepts various forms of passive income. Here are the most
              common qualifying sources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {incomeTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mb-6 mx-auto">
                  <type.icon className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">
                  {type.title}
                </h3>
                <p className="font-sans text-navy-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy-950">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-gold-400 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
                Benefits
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-8">
                Why Choose the <span className="italic text-gold-400">Rentista Visa</span>
              </h2>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-white/80">{benefit}</span>
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
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-white mb-6">
                  Ideal Candidates
                </h3>
                <ul className="space-y-4 font-sans text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-gold-400 text-xl">01</span>
                    <span>Real estate investors with rental portfolios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-gold-400 text-xl">02</span>
                    <span>Early retirees with investment income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-gold-400 text-xl">03</span>
                    <span>Entrepreneurs with passive business income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-gold-400 text-xl">04</span>
                    <span>Authors, musicians, and content creators with royalties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-gold-400 text-xl">05</span>
                    <span>Digital nomads with established income streams</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
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
                What You&apos;ll <span className="italic">Need</span>
              </h2>
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                Documentation requirements focus on proving your passive income streams
                are stable and sufficient to support yourself in Argentina.
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
              className="bg-gray-50 rounded-lg p-8 lg:p-12 h-fit"
            >
              <h3 className="font-serif text-2xl text-navy-900 mb-4">
                Income Documentation Tips
              </h3>
              <ul className="space-y-4 font-sans text-navy-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Provide 6-12 months of bank statements showing consistent deposits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Include contracts or agreements that establish income sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Tax returns can help verify income history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Letters from investment firms documenting dividend payments
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 btn-luxury gold-gradient text-navy-950 font-medium w-full justify-center"
                >
                  Discuss Your Situation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Let's Review Your Income Sources"
        description="Not sure if your passive income qualifies? Our experts can assess your situation and recommend the best visa pathway."
      />
      <Footer />
    </main>
  );
}
