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
  Heart,
  Sun,
  Shield,
  Home,
  Stethoscope,
  Wine,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Low Income Requirement',
    description:
      'Qualify with a monthly pension of approximately $500 USD or equivalent.',
  },
  {
    icon: Stethoscope,
    title: 'Quality Healthcare',
    description:
      'Access excellent private healthcare at a fraction of US/European costs.',
  },
  {
    icon: Sun,
    title: 'Perfect Climate',
    description:
      'Enjoy four distinct seasons with mild winters and warm summers.',
  },
  {
    icon: Wine,
    title: 'Rich Culture',
    description:
      'World-class dining, wine, tango, art, and a vibrant social scene.',
  },
  {
    icon: Shield,
    title: 'Safe & Stable',
    description:
      'Modern infrastructure with well-established expat communities.',
  },
  {
    icon: Home,
    title: 'Affordable Living',
    description:
      'Stretch your retirement income 2-3x further than in North America or Europe.',
  },
];

const requirements = [
  'Valid passport with at least 6 months validity',
  'Proof of pension or retirement income (~$500/month minimum)',
  'Clean criminal background check from country of origin',
  'Health certificate',
  'Birth certificate (apostilled)',
  'Marriage certificate if applicable',
  'Passport-sized photographs',
];

const costComparison = [
  { item: 'Rent (2BR apartment)', argentina: '$400-800', usa: '$1,500-3,000' },
  { item: 'Private health insurance', argentina: '$100-200', usa: '$500-1,500' },
  { item: 'Dinner for two', argentina: '$30-50', usa: '$80-150' },
  { item: 'Monthly utilities', argentina: '$50-100', usa: '$150-300' },
  { item: 'Domestic help (weekly)', argentina: '$100-150', usa: '$400-600' },
];

export default function RetireeVisaPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Pensionado Visa"
        subtitle="Retirement Visa"
        description="Enjoy your golden years in one of the world's most beautiful and affordable countries with the Argentine Retirement Visa."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
        breadcrumbs={[
          { label: 'Visa Options', href: '/visa-options' },
          { label: 'Retirement Visa', href: '/visa/retiree' },
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
                Retire in <span className="italic">Paradise</span>
              </h2>
              <div className="space-y-4 font-sans text-navy-600 leading-relaxed">
                <p>
                  The Argentine Pensionado Visa is specifically designed for retirees
                  who receive a regular pension or retirement income. It offers one of
                  the most accessible paths to residency in South America.
                </p>
                <p>
                  With a low income requirement of approximately $500 USD per month,
                  Argentina welcomes retirees to enjoy its European-influenced culture,
                  excellent healthcare, and dramatically lower cost of living.
                </p>
                <p>
                  After 2 years of residency, you become eligible for citizenship and
                  the powerful Argentine passport, ranked among the world&apos;s best for
                  visa-free travel.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <DollarSign className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    ~$500/month income
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    4-8 Week Process
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Heart className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    Spouse Included
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
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&q=80"
                alt="Retired couple enjoying Buenos Aires"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
                <p className="font-serif text-3xl text-gold-400 mb-1">2-3x</p>
                <p className="font-sans text-xs tracking-wider uppercase text-white/70">
                  Your Money Goes Further
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
              Why Retire in Argentina
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light">
              The Benefits of <span className="italic">Argentine Life</span>
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

      {/* Cost Comparison */}
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
              Cost of Living
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Argentina vs. <span className="italic text-gold-400">USA</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-white/10 font-sans text-xs tracking-wider uppercase text-white/70">
                <span>Expense</span>
                <span className="text-center">Argentina</span>
                <span className="text-center">USA</span>
              </div>
              {costComparison.map((row, index) => (
                <motion.div
                  key={row.item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-white/10 last:border-b-0"
                >
                  <span className="font-sans text-white">{row.item}</span>
                  <span className="font-serif text-xl text-gold-400 text-center">
                    {row.argentina}
                  </span>
                  <span className="font-sans text-white/50 text-center line-through">
                    {row.usa}
                  </span>
                </motion.div>
              ))}
            </div>
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
                Simple <span className="italic">Requirements</span>
              </h2>
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                The Pensionado Visa has straightforward requirements. If you receive
                any form of regular pension or retirement income, you likely qualify.
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
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80"
                alt="Mendoza wine country"
                className="rounded-lg shadow-xl mb-8"
              />
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="font-serif text-xl text-navy-900 mb-4">
                  Popular Retirement Destinations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-gold-500">01</span>
                    <span className="font-sans text-navy-700">
                      Buenos Aires – Culture, dining, urban living
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-gold-500">02</span>
                    <span className="font-sans text-navy-700">
                      Mendoza – Wine country, outdoor activities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-gold-500">03</span>
                    <span className="font-sans text-navy-700">
                      Córdoba – Mountain living, lower costs
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-serif text-gold-500">04</span>
                    <span className="font-sans text-navy-700">
                      Bariloche – Lakes, skiing, natural beauty
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Start Your Retirement Adventure"
        description="Let us help you plan your ideal retirement in Argentina. Schedule a free consultation to discuss your options."
      />
      <Footer />
    </main>
  );
}
