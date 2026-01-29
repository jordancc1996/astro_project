'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Heart, FileText, Award, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: 'investor',
    icon: Briefcase,
    title: 'Inversionista Visa',
    subtitle: 'Investor Residency',
    description:
      'Obtain residency through a qualifying investment of 1.5 million pesos in an Argentine business or venture.',
    features: ['Fast-track processing', 'Family included', 'Path to citizenship'],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/visa/investor',
    accent: 'from-gold-500 to-gold-600',
  },
  {
    id: 'retiree',
    icon: Heart,
    title: 'Pensionado Visa',
    subtitle: 'Retirement Visa',
    description:
      'Designed for retirees with a monthly pension or retirement income looking to enjoy life in Argentina.',
    features: ['Low income requirement', 'Healthcare access', 'Tax benefits'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href: '/visa/retiree',
    accent: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 'rentista',
    icon: FileText,
    title: 'Rentista Visa',
    subtitle: 'Passive Income',
    description:
      'For individuals with demonstrable passive income from investments, dividends, or rental properties.',
    features: ['Flexible income sources', 'Remote work friendly', 'Renewable'],
    image:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
    href: '/visa/rentista',
    accent: 'from-blue-500 to-blue-600',
  },
  {
    id: 'citizenship',
    icon: Award,
    title: 'Citizenship Path',
    subtitle: 'Naturalization',
    description:
      'After just 2 years of residency, you become eligible for full Argentine citizenship and passport.',
    features: ['2-year timeline', 'Dual citizenship', 'EU visa-free travel'],
    image:
      'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
    href: '/citizenship',
    accent: 'from-purple-500 to-purple-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FourPillars() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
            Your Path Forward
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 font-light mb-6">
            Four Ways to <span className="italic">Residency</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-navy-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Argentina offers multiple pathways to legal residency, each designed for 
            different life situations and financial profiles.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={pillar.href} className="block">
                <div className="relative h-[420px] md:h-[480px] rounded-lg overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Subtitle */}
                    <p className="font-sans text-xs tracking-ultra-wide uppercase text-white/60 mb-2">
                      {pillar.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-white/70 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {pillar.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {pillar.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full font-sans text-xs text-white/80"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gold-400 font-sans text-sm tracking-wider uppercase group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/30 rounded-lg transition-colors duration-500 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="font-sans text-navy-500 text-sm mb-6">
            Not sure which visa is right for you?
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 btn-luxury bg-navy-900 text-white hover:bg-navy-800"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
