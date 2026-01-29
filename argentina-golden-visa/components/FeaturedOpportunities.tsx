'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, ArrowRight, Check } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Palermo Soho Penthouse',
    location: 'Buenos Aires, Palermo',
    price: 485000,
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    beds: 3,
    baths: 2,
    sqm: 180,
    tag: 'Residency Eligible',
    featured: true,
  },
  {
    id: 2,
    title: 'Vineyard Estate',
    location: 'Mendoza, Luján de Cuyo',
    price: 1250000,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    beds: 5,
    baths: 4,
    sqm: 450,
    tag: 'Investment Property',
    featured: true,
  },
  {
    id: 3,
    title: 'Lakefront Villa',
    location: 'Bariloche, Llao Llao',
    price: 890000,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    beds: 4,
    baths: 3,
    sqm: 320,
    tag: 'Residency Eligible',
    featured: false,
  },
  {
    id: 4,
    title: 'Recoleta Classic Apartment',
    location: 'Buenos Aires, Recoleta',
    price: 395000,
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    beds: 2,
    baths: 2,
    sqm: 120,
    tag: 'Residency Eligible',
    featured: false,
  },
  {
    id: 5,
    title: 'Modern Condo Tower',
    location: 'Buenos Aires, Puerto Madero',
    price: 620000,
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    beds: 3,
    baths: 2,
    sqm: 150,
    tag: 'Investment Property',
    featured: false,
  },
  {
    id: 6,
    title: 'Historic Country Estate',
    location: 'Córdoba, Sierras Chicas',
    price: 780000,
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    beds: 6,
    baths: 5,
    sqm: 520,
    tag: 'Residency Eligible',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function FeaturedOpportunities() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-gold-500 text-xs md:text-sm tracking-ultra-wide uppercase mb-4">
            Investment Opportunities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 font-light mb-6">
            Eligible <span className="italic">Properties</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-navy-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Curated selection of premium properties that qualify for Argentina&apos;s 
            investor residency program.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className="group"
            >
              <Link href={`/property/${property.id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium ${
                          property.tag === 'Residency Eligible'
                            ? 'bg-gold-500 text-navy-900'
                            : 'bg-navy-900 text-white'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        {property.tag}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {property.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-sans font-medium text-navy-900">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-navy-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-sans text-xs tracking-wide uppercase">
                        {property.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {property.title}
                    </h3>

                    {/* Price */}
                    <p className="font-serif text-2xl text-navy-900 mb-4">
                      {formatPrice(property.price)}
                    </p>

                    {/* Specs */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-navy-500">
                        <Bed className="w-4 h-4" />
                        <span className="font-sans text-sm">{property.beds}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-navy-500">
                        <Bath className="w-4 h-4" />
                        <span className="font-sans text-sm">{property.baths}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-navy-500">
                        <Square className="w-4 h-4" />
                        <span className="font-sans text-sm">{property.sqm} m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 btn-luxury bg-navy-900 text-white hover:bg-navy-800"
          >
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
