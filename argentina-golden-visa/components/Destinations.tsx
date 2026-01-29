'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    tagline: 'The Paris of the South',
    description:
      'A cosmopolitan capital blending European elegance with Latin passion. World-class dining, culture, and business opportunities.',
    image:
      'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80',
    stats: { properties: 245, avgPrice: '$180K' },
    href: '/real-estate/buenos-aires',
  },
  {
    id: 'mendoza',
    name: 'Mendoza',
    tagline: 'Wine Country',
    description:
      'Gateway to world-renowned vineyards and the majestic Andes. Perfect for wine enthusiasts and outdoor adventurers.',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    stats: { properties: 89, avgPrice: '$250K' },
    href: '/real-estate/mendoza',
  },
  {
    id: 'bariloche',
    name: 'Bariloche',
    tagline: 'The Switzerland of South America',
    description:
      'Stunning Patagonian landscapes with pristine lakes, snow-capped peaks, and year-round outdoor activities.',
    image:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    stats: { properties: 67, avgPrice: '$320K' },
    href: '/real-estate/bariloche',
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    tagline: 'The Heartland',
    description:
      "Argentina's second-largest city offers a perfect blend of colonial history, university culture, and modern innovation.",
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    stats: { properties: 134, avgPrice: '$120K' },
    href: '/real-estate/cordoba',
  },
  {
    id: 'salta',
    name: 'Salta',
    tagline: 'The Beautiful',
    description:
      'Colonial architecture meets dramatic Andean landscapes in this northwestern gem known for its rich indigenous heritage.',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    stats: { properties: 45, avgPrice: '$95K' },
    href: '/real-estate/salta',
  },
];

export default function Destinations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-luxury relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="font-sans text-gold-400 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
              Explore Argentina
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light">
              Top Locations for <span className="italic text-gold-400">Expats</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-8 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="flex-none w-[320px] md:w-[380px]"
                onMouseEnter={() => setHoveredCard(destination.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={destination.href} className="block group">
                  <div className="relative h-[500px] md:h-[560px] rounded-lg overflow-hidden">
                    {/* Image */}
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      {/* Tagline */}
                      <p className="font-sans text-gold-400 text-xs tracking-ultra-wide uppercase mb-2">
                        {destination.tagline}
                      </p>

                      {/* Name */}
                      <h3 className="font-serif text-3xl md:text-4xl text-white font-light mb-3">
                        {destination.name}
                      </h3>

                      {/* Description - shows on hover */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          hoveredCard === destination.id
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="font-sans text-white/70 text-sm leading-relaxed mb-4">
                          {destination.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 mb-4">
                          <div>
                            <p className="font-sans text-white/40 text-xs uppercase tracking-wide">
                              Properties
                            </p>
                            <p className="font-serif text-xl text-white">
                              {destination.stats.properties}
                            </p>
                          </div>
                          <div>
                            <p className="font-sans text-white/40 text-xs uppercase tracking-wide">
                              Avg. Price
                            </p>
                            <p className="font-serif text-xl text-white">
                              {destination.stats.avgPrice}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-white font-sans text-sm tracking-wider uppercase group-hover:text-gold-400 transition-colors duration-300">
                        <span>View Real Estate</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>

                    {/* Border Effect */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-gold-500/30 rounded-lg transition-colors duration-500 pointer-events-none" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-wider uppercase text-white/60 hover:text-gold-400 transition-colors duration-300"
          >
            <span>View All Locations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
