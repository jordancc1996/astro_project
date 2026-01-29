'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';

interface ContactCTAProps {
  title?: string;
  description?: string;
  variant?: 'dark' | 'light';
}

export default function ContactCTA({
  title = 'Ready to Start Your Journey?',
  description = 'Schedule a free consultation with our immigration experts and take the first step toward your new life in Argentina.',
  variant = 'dark',
}: ContactCTAProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`section-padding ${isDark ? 'bg-navy-950' : 'bg-gray-50'}`}
    >
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className={`font-sans text-xs md:text-sm tracking-ultra-wide uppercase mb-4 ${
              isDark ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            Get Started Today
          </p>
          <h2
            className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 ${
              isDark ? 'text-white' : 'text-navy-900'
            }`}
          >
            {title}
          </h2>
          <p
            className={`font-sans text-lg font-light leading-relaxed mb-10 ${
              isDark ? 'text-white/60' : 'text-navy-600'
            }`}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/consultation"
              className="btn-luxury gold-gradient text-navy-950 font-medium shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className={`btn-luxury border-2 w-full sm:w-auto ${
                isDark
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-8 ${
              isDark ? 'text-white/50' : 'text-navy-500'
            }`}
          >
            <a
              href="tel:+1-305-555-0100"
              className={`flex items-center gap-2 font-sans text-sm transition-colors ${
                isDark ? 'hover:text-gold-400' : 'hover:text-gold-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              +1 (305) 555-0100
            </a>
            <a
              href="mailto:info@argentinasgoldenvisa.com"
              className={`flex items-center gap-2 font-sans text-sm transition-colors ${
                isDark ? 'hover:text-gold-400' : 'hover:text-gold-600'
              }`}
            >
              <Mail className="w-4 h-4" />
              info@argentinasgoldenvisa.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
