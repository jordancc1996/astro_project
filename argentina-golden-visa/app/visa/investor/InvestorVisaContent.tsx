'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Check,
  Clock,
  DollarSign,
  Users,
  FileText,
  Building2,
  ArrowRight,
  Shield,
  Globe,
  TrendingUp,
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Fast Track to Citizenship',
    description:
      'Become eligible for Argentine citizenship after just 2 years of residency.',
  },
  {
    icon: Users,
    title: 'Family Included',
    description:
      'Your spouse and dependent children can be included in your application.',
  },
  {
    icon: Globe,
    title: 'Travel Freedom',
    description:
      'Argentine passport offers visa-free access to 170+ countries including the EU.',
  },
  {
    icon: Shield,
    title: 'Asset Protection',
    description:
      'Argentina has strong privacy laws and no inheritance tax on foreign assets.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Returns',
    description:
      'Your qualifying investment can generate returns while securing your residency.',
  },
  {
    icon: DollarSign,
    title: 'Tax Advantages',
    description:
      'Territorial tax system means foreign income is not taxed in Argentina.',
  },
];

const requirements = [
  'Valid passport with at least 6 months validity',
  'Clean criminal background check',
  'Proof of investment of at least 1.5 million ARS (~$1,500 USD)',
  'Business plan or investment documentation',
  'Proof of sufficient funds for living expenses',
  'Health certificate',
  'Passport-sized photographs',
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description:
      'We assess your situation, investment goals, and help you choose the right investment vehicle.',
    duration: '1-2 weeks',
  },
  {
    step: '02',
    title: 'Investment Selection',
    description:
      'Select from our curated list of qualifying investments including real estate, businesses, or funds.',
    duration: '2-4 weeks',
  },
  {
    step: '03',
    title: 'Document Preparation',
    description:
      'We prepare and authenticate all required documents, including apostilles and translations.',
    duration: '2-3 weeks',
  },
  {
    step: '04',
    title: 'Application Submission',
    description:
      'Submit your complete application to Argentine immigration authorities.',
    duration: '1 week',
  },
  {
    step: '05',
    title: 'Residency Approval',
    description:
      'Receive your temporary residency permit, renewable annually for 3 years.',
    duration: '4-8 weeks',
  },
  {
    step: '06',
    title: 'Permanent Residency',
    description:
      'After 2 years, apply for permanent residency and citizenship eligibility.',
    duration: 'Year 2+',
  },
];

const investmentOptions = [
  {
    title: 'Real Estate Investment',
    minInvestment: '$100,000+',
    description:
      'Purchase residential or commercial property in Argentina. Properties in Buenos Aires, Mendoza, and other prime locations qualify.',
    features: [
      'Rental income potential',
      'Capital appreciation',
      'Personal use option',
    ],
    href: '/real-estate',
  },
  {
    title: 'Business Investment',
    minInvestment: '$50,000+',
    description:
      'Invest in or start a business in Argentina. This can include purchasing an existing business or starting a new venture.',
    features: ['Active income generation', 'Job creation benefits', 'Growth potential'],
    href: '/contact',
  },
  {
    title: 'Investment Funds',
    minInvestment: '$100,000+',
    description:
      'Participate in government-approved investment funds that support Argentine economic development.',
    features: ['Passive investment', 'Professional management', 'Diversification'],
    href: '/contact',
  },
];

export default function InvestorVisaContent() {
  return (
    <>
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
                Build Your Future Through <span className="italic">Investment</span>
              </h2>
              <div className="space-y-4 font-sans text-navy-600 leading-relaxed">
                <p>
                  The Argentine Investor Visa (Visa de Inversionista) is designed for
                  foreign nationals who wish to obtain residency by making a qualifying
                  investment in the Argentine economy.
                </p>
                <p>
                  This pathway offers one of the fastest routes to Argentine citizenship,
                  with eligibility after just 2 years of residency. Your investment can
                  take various forms, from real estate to business ventures.
                </p>
                <p>
                  Unlike many other countries&apos; investor visa programs, Argentina&apos;s
                  requirements are accessible, with minimum investments starting at
                  approximately $1,500 USD equivalent in Argentine pesos.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <DollarSign className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    From ~$1,500 USD
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Clock className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    2-3 Month Process
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gold-50 rounded-full">
                  <Users className="w-4 h-4 text-gold-600" />
                  <span className="font-sans text-sm text-navy-700">
                    Family Eligible
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
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Investment property in Buenos Aires"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-6 rounded-lg shadow-xl">
                <p className="font-serif text-3xl text-gold-400 mb-1">98%</p>
                <p className="font-sans text-xs tracking-wider uppercase text-white/70">
                  Approval Rate
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
              Why Choose This Visa
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light">
              Key <span className="italic">Benefits</span>
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

      {/* Investment Options */}
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
              Qualifying Investments
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-4">
              Investment <span className="italic">Options</span>
            </h2>
            <p className="font-sans text-navy-600 max-w-2xl mx-auto">
              Choose from several qualifying investment types that suit your goals and
              risk profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-8 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
              >
                <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold-500 mb-2">
                  From {option.minInvestment}
                </p>
                <h3 className="font-serif text-2xl text-navy-900 mb-4">
                  {option.title}
                </h3>
                <p className="font-sans text-navy-600 text-sm leading-relaxed mb-6">
                  {option.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-sans text-sm text-navy-700"
                    >
                      <Check className="w-4 h-4 text-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={option.href}
                  className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              The Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Your Path to <span className="italic text-gold-400">Residency</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
                  <span className="font-serif text-5xl text-gold-500/30 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <span className="inline-block px-3 py-1 bg-gold-500/20 rounded-full font-sans text-xs text-gold-400 mb-4">
                    {step.duration}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-3">
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
                The documentation requirements for the Investor Visa are straightforward.
                Our team will guide you through obtaining and authenticating each document.
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
              className="bg-gray-50 rounded-lg p-8 lg:p-12"
            >
              <FileText className="w-12 h-12 text-gold-500 mb-6" />
              <h3 className="font-serif text-2xl text-navy-900 mb-4">
                Document Assistance
              </h3>
              <p className="font-sans text-navy-600 leading-relaxed mb-6">
                Don&apos;t worry about the paperwork. Our experienced team will:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Prepare your complete application package
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Handle apostilles and translations
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Submit applications on your behalf
                </li>
                <li className="flex items-center gap-3 font-sans text-navy-700">
                  <Check className="w-5 h-5 text-gold-500" />
                  Track progress and provide updates
                </li>
              </ul>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 btn-luxury gold-gradient text-navy-950 font-medium"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
