'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactCTA from '@/components/ContactCTA';
import {
  Briefcase,
  Heart,
  FileText,
  Laptop,
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';

const visaTypes = [
  {
    id: 'investor',
    icon: Briefcase,
    title: 'Inversionista Visa',
    subtitle: 'Investor Residency',
    description:
      'Obtain residency through a qualifying investment in Argentine businesses, real estate, or approved funds.',
    requirements: [
      'Investment from ~$1,500 USD',
      'Business plan or investment docs',
      'Family can be included',
    ],
    timeline: '2-3 months',
    idealFor: 'Investors, entrepreneurs, real estate buyers',
    href: '/visa/investor',
    color: 'gold',
  },
  {
    id: 'retiree',
    icon: Heart,
    title: 'Pensionado Visa',
    subtitle: 'Retirement Visa',
    description:
      'Designed for retirees with regular pension or retirement income who want to enjoy Argentina\'s quality of life.',
    requirements: [
      '~$500/month pension income',
      'Proof of retirement status',
      'Spouse can be included',
    ],
    timeline: '4-8 weeks',
    idealFor: 'Retirees, pensioners, social security recipients',
    href: '/visa/retiree',
    color: 'emerald',
  },
  {
    id: 'rentista',
    icon: FileText,
    title: 'Rentista Visa',
    subtitle: 'Passive Income',
    description:
      'For individuals living on passive income from investments, rental properties, dividends, or royalties.',
    requirements: [
      '~$2,000/month passive income',
      'Bank statements (6-12 months)',
      'Income source documentation',
    ],
    timeline: '4-8 weeks',
    idealFor: 'Investors, landlords, dividend recipients',
    href: '/visa/rentista',
    color: 'blue',
  },
  {
    id: 'digital-nomad',
    icon: Laptop,
    title: 'Digital Nomad',
    subtitle: 'Remote Work Visa',
    description:
      'Work remotely for foreign clients while enjoying Buenos Aires\' vibrant culture and low cost of living.',
    requirements: [
      '~$1,500/month remote income',
      'Employment or freelance contracts',
      'Health insurance',
    ],
    timeline: '4-8 weeks',
    idealFor: 'Remote workers, freelancers, consultants',
    href: '/visa/digital-nomad',
    color: 'purple',
  },
];

const comparisonFeatures = [
  { feature: 'Minimum Investment/Income', investor: '~$1,500', retiree: '$500/mo', rentista: '$2,000/mo', nomad: '$1,500/mo' },
  { feature: 'Processing Time', investor: '2-3 months', retiree: '4-8 weeks', rentista: '4-8 weeks', nomad: '4-8 weeks' },
  { feature: 'Family Included', investor: '✓', retiree: '✓', rentista: '✓', nomad: '✓' },
  { feature: 'Path to Citizenship', investor: '2 years', retiree: '2 years', rentista: '2 years', nomad: '2 years' },
  { feature: 'Work Permitted', investor: '✓', retiree: 'Limited', rentista: 'Passive only', nomad: 'Remote only' },
];

export default function VisaOptionsPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Visa Options"
        subtitle="Choose Your Path"
        description="Argentina offers multiple pathways to residency. Find the option that best fits your situation and goals."
        image="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80"
        breadcrumbs={[{ label: 'Visa Options', href: '/visa-options' }]}
      />

      {/* Visa Types Grid */}
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
              Residency Pathways
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-4">
              Four Ways to <span className="italic">Argentine Residency</span>
            </h2>
            <p className="font-sans text-navy-600 max-w-2xl mx-auto">
              Each visa type has different requirements and benefits. Choose the one that
              aligns with your financial situation and lifestyle goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={visa.href} className="group block h-full">
                  <div className="h-full border border-gray-200 rounded-lg p-8 hover:border-gold-300 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                        <visa.icon className="w-7 h-7 text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold-500 mb-1">
                          {visa.subtitle}
                        </p>
                        <h3 className="font-serif text-2xl text-navy-900 group-hover:text-gold-600 transition-colors">
                          {visa.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-navy-600 leading-relaxed mb-6">
                      {visa.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {visa.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-gold-500" />
                          <span className="font-sans text-sm text-navy-700">{req}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-navy-500">
                          <Clock className="w-4 h-4" />
                          <span className="font-sans text-xs">{visa.timeline}</span>
                        </div>
                      </div>
                      <span className="flex items-center gap-2 font-sans text-sm text-gold-600 group-hover:gap-4 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
              Compare Options
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light">
              Side-by-Side <span className="italic">Comparison</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px] bg-white rounded-lg shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left p-4 font-sans text-sm tracking-wider uppercase">
                    Feature
                  </th>
                  <th className="text-center p-4 font-sans text-sm tracking-wider uppercase">
                    Investor
                  </th>
                  <th className="text-center p-4 font-sans text-sm tracking-wider uppercase">
                    Retiree
                  </th>
                  <th className="text-center p-4 font-sans text-sm tracking-wider uppercase">
                    Rentista
                  </th>
                  <th className="text-center p-4 font-sans text-sm tracking-wider uppercase">
                    Digital Nomad
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="p-4 font-sans text-navy-900 font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center font-sans text-navy-600">
                      {row.investor}
                    </td>
                    <td className="p-4 text-center font-sans text-navy-600">
                      {row.retiree}
                    </td>
                    <td className="p-4 text-center font-sans text-navy-600">
                      {row.rentista}
                    </td>
                    <td className="p-4 text-center font-sans text-navy-600">
                      {row.nomad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
                Need Guidance?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-light mb-6">
                Not Sure Which Visa <span className="italic">Is Right?</span>
              </h2>
              <p className="font-sans text-navy-600 text-lg leading-relaxed mb-8">
                Every situation is unique. Our immigration experts will assess your
                financial profile, goals, and timeline to recommend the optimal visa
                pathway for your circumstances.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 btn-luxury gold-gradient text-navy-950 font-medium"
              >
                Get a Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA variant="dark" />
      <Footer />
    </main>
  );
}
