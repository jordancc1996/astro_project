'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  overlay?: 'light' | 'dark';
}

export default function PageHero({
  title,
  subtitle,
  description,
  image,
  breadcrumbs,
  overlay = 'dark',
}: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === 'dark'
            ? 'bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30'
            : 'bg-gradient-to-t from-white via-white/60 to-white/30'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 container-luxury pb-16 md:pb-20">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase">
              <li>
                <Link
                  href="/"
                  className={`transition-colors ${
                    overlay === 'dark'
                      ? 'text-white/60 hover:text-white'
                      : 'text-navy-400 hover:text-navy-900'
                  }`}
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <ChevronRight
                    className={`w-3 h-3 ${
                      overlay === 'dark' ? 'text-white/40' : 'text-navy-300'
                    }`}
                  />
                  {index === breadcrumbs.length - 1 ? (
                    <span
                      className={
                        overlay === 'dark' ? 'text-gold-400' : 'text-gold-600'
                      }
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className={`transition-colors ${
                        overlay === 'dark'
                          ? 'text-white/60 hover:text-white'
                          : 'text-navy-400 hover:text-navy-900'
                      }`}
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-sans text-xs md:text-sm tracking-ultra-wide uppercase mb-4 ${
              overlay === 'dark' ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4 ${
            overlay === 'dark' ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`font-sans text-lg max-w-2xl font-light leading-relaxed ${
              overlay === 'dark' ? 'text-white/70' : 'text-navy-600'
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
