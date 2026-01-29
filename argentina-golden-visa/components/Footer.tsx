'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const footerLinks = {
  visaTypes: {
    title: 'Visa Types',
    links: [
      { label: 'Inversionista Visa', href: '/visa/investor' },
      { label: 'Pensionado Visa', href: '/visa/retiree' },
      { label: 'Rentista Visa', href: '/visa/rentista' },
      { label: 'Digital Nomad', href: '/visa/digital-nomad' },
      { label: 'Citizenship', href: '/citizenship' },
    ],
  },
  realEstate: {
    title: 'Real Estate',
    links: [
      { label: 'Buenos Aires', href: '/real-estate/buenos-aires' },
      { label: 'Mendoza', href: '/real-estate/mendoza' },
      { label: 'Bariloche', href: '/real-estate/bariloche' },
      { label: 'Córdoba', href: '/real-estate/cordoba' },
      { label: 'Investment Properties', href: '/real-estate/investment' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Living Guide', href: '/guides' },
      { label: 'Tax Advantages', href: '/resources/tax' },
      { label: 'Healthcare', href: '/resources/healthcare' },
      { label: 'Banking', href: '/resources/banking' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

const offices = [
  {
    city: 'Buenos Aires',
    address: 'Av. Libertador 4000, Palermo',
    phone: '+54 11 5555 0100',
  },
  {
    city: 'Miami',
    address: '200 S Biscayne Blvd, Suite 4100',
    phone: '+1 305 555 0100',
  },
  {
    city: 'New York',
    address: '350 Fifth Avenue, Suite 4500',
    phone: '+1 212 555 0100',
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-semibold tracking-wide text-white">
                  Argentina&apos;s
                </span>
                <span className="text-sm tracking-ultra-wide uppercase font-sans font-medium text-gold-400">
                  Golden Visa
                </span>
              </div>
            </Link>

            <p className="font-sans text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Your trusted partner in obtaining Argentine residency and citizenship. 
              We provide comprehensive immigration services with personalized attention 
              and proven expertise.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.values(footerLinks).map((column) => (
                <div key={column.title}>
                  <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-white mb-6">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-sans text-sm text-white/60 hover:text-gold-400 transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-white mb-8 text-center">
            Our Offices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="text-center md:text-left p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <h5 className="font-serif text-xl text-white mb-3">
                  {office.city}
                </h5>
                <div className="space-y-2">
                  <p className="flex items-center justify-center md:justify-start gap-2 font-sans text-sm text-white/60">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="flex items-center justify-center md:justify-start gap-2 font-sans text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:info@argentinasgoldenvisa.com"
            className="inline-flex items-center gap-2 font-sans text-sm text-gold-400 hover:text-gold-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@argentinasgoldenvisa.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/40">
              © 2026 Argentina&apos;s Golden Visa. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
