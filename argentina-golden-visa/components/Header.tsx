'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Phone,
  MapPin,
  Briefcase,
  Home,
  FileText,
  Heart,
  Building2,
  Grape,
  Mountain,
  TreePine,
} from 'lucide-react';

const menuItems = [
  {
    label: 'Visa Options',
    href: '/visa-options',
    megaMenu: {
      featured: {
        title: 'Start Your Journey',
        description:
          'Discover the perfect visa pathway for your situation. Our expert team guides you through every step.',
        image:
          'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=600&q=80',
        cta: 'Free Consultation',
      },
      columns: [
        {
          title: 'Residency Visas',
          links: [
            { label: 'Inversionista (Investor)', href: '/visa/investor', icon: Briefcase },
            { label: 'Pensionado (Retiree)', href: '/visa/retiree', icon: Heart },
            { label: 'Rentista (Passive Income)', href: '/visa/rentista', icon: FileText },
            { label: 'Digital Nomad', href: '/visa/digital-nomad', icon: Globe },
          ],
        },
        {
          title: 'Citizenship',
          links: [
            { label: 'Naturalization Path', href: '/citizenship/naturalization', icon: FileText },
            { label: 'By Descent', href: '/citizenship/descent', icon: Heart },
            { label: 'Timeline & Process', href: '/citizenship/process', icon: Briefcase },
          ],
        },
      ],
    },
  },
  {
    label: 'Real Estate',
    href: '/real-estate',
    megaMenu: {
      featured: {
        title: 'Investment Properties',
        description:
          'Curated selection of residency-eligible properties across Argentina\'s most desirable locations.',
        image:
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        cta: 'View Properties',
      },
      columns: [
        {
          title: 'By Location',
          links: [
            { label: 'Buenos Aires', href: '/real-estate/buenos-aires', icon: Building2 },
            { label: 'Mendoza', href: '/real-estate/mendoza', icon: Grape },
            { label: 'Bariloche', href: '/real-estate/bariloche', icon: Mountain },
            { label: 'Córdoba', href: '/real-estate/cordoba', icon: TreePine },
          ],
        },
        {
          title: 'By Type',
          links: [
            { label: 'Luxury Apartments', href: '/real-estate/apartments', icon: Building2 },
            { label: 'Vineyards & Estates', href: '/real-estate/vineyards', icon: Grape },
            { label: 'Commercial Investment', href: '/real-estate/commercial', icon: Briefcase },
          ],
        },
      ],
    },
  },
  {
    label: 'Citizenship',
    href: '/citizenship',
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
    megaMenu: {
      featured: {
        title: 'Argentina Living Guide',
        description:
          'Everything you need to know about building your new life in Argentina.',
        image:
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80',
        cta: 'Explore Guides',
      },
      columns: [
        {
          title: 'Living',
          links: [
            { label: 'Healthcare', href: '/lifestyle/healthcare', icon: Heart },
            { label: 'Banking & Finance', href: '/lifestyle/banking', icon: Briefcase },
            { label: 'Education', href: '/lifestyle/education', icon: FileText },
            { label: 'Culture & Society', href: '/lifestyle/culture', icon: Globe },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Tax Advantages', href: '/resources/tax', icon: FileText },
            { label: 'Cost of Living', href: '/resources/cost-of-living', icon: Home },
            { label: 'Expat Community', href: '/resources/community', icon: Heart },
          ],
        },
      ],
    },
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <div className="flex flex-col">
                <span
                  className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
                    isScrolled ? 'text-navy-900' : 'text-white'
                  }`}
                >
                  Argentina&apos;s
                </span>
                <span
                  className={`text-xs md:text-sm tracking-ultra-wide uppercase font-sans font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gold-500' : 'text-gold-400'
                  }`}
                >
                  Golden Visa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-5 py-3 font-sans text-sm tracking-wider uppercase transition-colors duration-300 ${
                      isScrolled
                        ? 'text-navy-800 hover:text-gold-500'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.megaMenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Selector */}
              <button
                onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                className={`flex items-center gap-2 font-sans text-sm tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-navy-700 hover:text-gold-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Globe className="w-4 h-4" />
                {language}
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className={`btn-luxury border-2 ${
                  isScrolled
                    ? 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-navy-900'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menuItems
                .filter((item) => item.label === activeMenu && item.megaMenu)
                .map((item) => (
                  <div key={item.label} className="container-luxury py-12">
                    <div className="grid grid-cols-12 gap-12">
                      {/* Featured Section */}
                      <div className="col-span-4">
                        <div className="relative h-64 rounded-lg overflow-hidden group">
                          <img
                            src={item.megaMenu!.featured.image}
                            alt={item.megaMenu!.featured.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="font-serif text-2xl text-white mb-2">
                              {item.megaMenu!.featured.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-4 line-clamp-2">
                              {item.megaMenu!.featured.description}
                            </p>
                            <span className="inline-flex items-center text-gold-400 text-sm font-medium tracking-wide uppercase">
                              {item.megaMenu!.featured.cta}
                              <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Menu Columns */}
                      {item.megaMenu!.columns.map((column, idx) => (
                        <div key={idx} className="col-span-3">
                          <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-navy-400 mb-6">
                            {column.title}
                          </h4>
                          <ul className="space-y-4">
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="flex items-center gap-3 text-navy-700 hover:text-gold-500 transition-colors duration-300 group"
                                >
                                  <link.icon className="w-5 h-5 text-navy-300 group-hover:text-gold-500 transition-colors duration-300" />
                                  <span className="font-sans text-sm">
                                    {link.label}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Contact Info */}
                      <div className="col-span-2">
                        <h4 className="font-sans text-xs tracking-ultra-wide uppercase text-navy-400 mb-6">
                          Get in Touch
                        </h4>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="tel:+1-305-555-0100"
                              className="flex items-center gap-3 text-navy-700 hover:text-gold-500 transition-colors duration-300"
                            >
                              <Phone className="w-5 h-5 text-navy-300" />
                              <span className="font-sans text-sm">
                                +1 (305) 555-0100
                              </span>
                            </a>
                          </li>
                          <li>
                            <span className="flex items-center gap-3 text-navy-700">
                              <MapPin className="w-5 h-5 text-navy-300" />
                              <span className="font-sans text-sm">
                                Miami | Buenos Aires
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <span className="font-serif text-xl text-navy-900">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-navy-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-6 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 border-b border-gray-100 font-sans text-lg text-navy-800 hover:text-gold-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center btn-luxury bg-navy-900 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <button
                    onClick={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}
                    className="flex items-center justify-center gap-2 w-full py-3 text-navy-600"
                  >
                    <Globe className="w-4 h-4" />
                    {language === 'EN' ? 'Español' : 'English'}
                  </button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
