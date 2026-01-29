'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import {
  Check,
  Globe,
  Shield,
  FileText,
  Clock,
  Award,
  ArrowRight,
  Plane,
} from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: '170+ Countries Visa-Free',
    description:
      'The Argentine passport ranks among the world\'s most powerful, offering visa-free or visa-on-arrival access to over 170 countries.',
  },
  {
    icon: Shield,
    title: 'Dual Citizenship Allowed',
    description:
      'Argentina allows dual citizenship, so you can keep your original passport while gaining all the benefits of Argentine nationality.',
  },
  {
    icon: Clock,
    title: 'Only 2 Years Required',
    description:
      'One of the fastest paths to citizenship globally. After 2 years of legal residency, you can apply for naturalization.',
  },
  {
    icon: Award,
    title: 'Full Rights & Benefits',
    description:
      'As a citizen, enjoy full voting rights, access to public services, and the ability to pass citizenship to your children.',
  },
];

const timeline = [
  {
    year: 'Year 0',
    title: 'Obtain Temporary Residency',
    description:
      'Apply for your chosen visa type (Investor, Retiree, Rentista, or Digital Nomad) and receive temporary residency.',
  },
  {
    year: 'Year 1',
    title: 'Settle & Integrate',
    description:
      'Establish your life in Argentina. Open bank accounts, get a driver\'s license, and build your local connections.',
  },
  {
    year: 'Year 2',
    title: 'Apply for Permanent Residency',
    description:
      'After 2 years, convert your temporary residency to permanent residency status.',
  },
  {
    year: 'Year 2+',
    title: 'Apply for Citizenship',
    description:
      'Submit your citizenship application. Process takes 6-12 months. Receive your Argentine passport.',
  },
];

const passportBenefits = [
  'EU countries - Visa free (Schengen area)',
  'United Kingdom - Visa free',
  'Japan - Visa free',
  'South Korea - Visa free',
  'All of South America - Visa free',
  'Canada - eTA only',
  'Australia - eVisitor',
  'Mexico - Visa free',
];

const requirements = [
  '2 years of continuous legal residency in Argentina',
  'Valid DNI (National Identity Document)',
  'Clean criminal record in Argentina',
  'Basic Spanish proficiency (informal assessment)',
  'Proof of means of support',
  'Birth certificate (apostilled and translated)',
  'Current passport',
];

export default function CitizenshipPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Argentine Citizenship"
        subtitle="Your Second Passport"
        description="After just 2 years of residency, unlock one of the world's most powerful passports and full citizenship rights."
        image="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80"
        breadcrumbs={[{ label: 'Citizenship', href: '/citizenship' }]}
      />

      {/* Benefits Grid */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
              Why Argentine Citizenship
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light">
              Benefits of <span className="italic">Naturalization</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-lg"
              >
                <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-navy-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              The Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Your Path to <span className="italic text-gold-400">Citizenship</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gold-500/30 last:border-l-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gold-500" />
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 ml-4">
                  <span className="inline-block px-3 py-1 bg-gold-500/20 rounded-full font-sans text-xs text-gold-400 mb-3">
                    {step.year}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passport Power */}
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
                Passport Power
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-6">
                Travel the World <span className="italic">Freely</span>
              </h2>
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                The Argentine passport consistently ranks in the top 20 globally,
                providing exceptional travel freedom. As an Argentine citizen, you&apos;ll
                enjoy visa-free or simplified access to:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {passportBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <Plane className="w-4 h-4 text-gold-500" />
                    <span className="font-sans text-sm text-navy-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-navy-900 rounded-lg p-8 lg:p-12 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <span className="font-serif text-5xl text-gold-400">#19</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">
                  Global Passport Ranking
                </h3>
                <p className="font-sans text-white/60 text-sm mb-6">
                  Based on visa-free travel access
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <p className="font-serif text-3xl text-gold-400">170+</p>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-wider">
                      Countries Access
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-gold-400">2</p>
                    <p className="font-sans text-xs text-white/50 uppercase tracking-wider">
                      Years to Qualify
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-gray-50">
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
                Citizenship <span className="italic">Eligibility</span>
              </h2>
              <p className="font-sans text-navy-600 leading-relaxed mb-8">
                Argentina&apos;s naturalization requirements are straightforward compared to
                most countries. There is no formal citizenship test or language exam.
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
              className="bg-white rounded-lg p-8 lg:p-12 shadow-sm h-fit"
            >
              <FileText className="w-12 h-12 text-gold-500 mb-6" />
              <h3 className="font-serif text-2xl text-navy-900 mb-4">
                Full-Service Support
              </h3>
              <p className="font-sans text-navy-600 leading-relaxed mb-6">
                Our team provides end-to-end citizenship assistance:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Initial residency visa application
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  DNI and permanent residency processing
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Citizenship application preparation
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Passport application assistance
                </li>
              </ul>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 btn-luxury gold-gradient text-navy-950 font-medium w-full justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Begin Your Path to Citizenship"
        description="Let us guide you from temporary residency to Argentine citizenship. Schedule a consultation to discuss your timeline."
      />
      <Footer />
    </main>
  );
}
