'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Richardson',
    role: 'Tech Entrepreneur',
    location: 'From San Francisco, USA',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    quote:
      'The team at Argentina\'s Golden Visa made our relocation seamless. Within 6 months, my family had our residency and we\'re now enjoying life in Palermo. The tax advantages alone have been transformative for our business.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie Laurent',
    role: 'Retired Executive',
    location: 'From Paris, France',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    quote:
      'After 30 years in corporate banking, I wanted somewhere beautiful and affordable to retire. Mendoza exceeded all expectations. The wine, the mountains, the people – and my pension goes three times as far.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Real Estate Investor',
    location: 'From Hong Kong',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    quote:
      'I was skeptical at first, but the investment opportunities here are incredible. The team helped me navigate the property market and obtain my investor visa. Now I own three properties in Buenos Aires.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma & James Wilson',
    role: 'Digital Nomad Family',
    location: 'From London, UK',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    quote:
      'Moving our family of four seemed daunting, but the guidance we received was exceptional. The kids are thriving in bilingual schools, and we finally have the work-life balance we always dreamed of.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gold-500 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gold-500 blur-[120px]" />
      </div>

      <div className="container-luxury relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-gold-400 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
            Success Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6">
            Our Clients <span className="italic text-gold-400">Speak</span>
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-full px-4 md:px-8"
                >
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        {/* Quote Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 mb-8">
                          <Quote className="w-8 h-8 text-gold-400" />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-10">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-gold-400 text-gold-400"
                            />
                          ))}
                        </div>

                        {/* Author */}
                        <div className="flex flex-col items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gold-500/30"
                          />
                          <p className="font-serif text-xl text-white mb-1">
                            {testimonial.name}
                          </p>
                          <p className="font-sans text-sm text-white/60">
                            {testimonial.role}
                          </p>
                          <p className="font-sans text-xs text-gold-400 mt-1">
                            {testimonial.location}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? 'w-8 bg-gold-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <p className="font-serif text-4xl md:text-5xl text-gold-400 mb-2">
              500+
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-white/50">
              Families Relocated
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl md:text-5xl text-gold-400 mb-2">
              98%
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-white/50">
              Approval Rate
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl md:text-5xl text-gold-400 mb-2">
              12+
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-white/50">
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl md:text-5xl text-gold-400 mb-2">
              4.9
            </p>
            <p className="font-sans text-xs tracking-wider uppercase text-white/50">
              Client Rating
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
