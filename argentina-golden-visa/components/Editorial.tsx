'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const featuredArticle = {
  id: 1,
  title: 'Tax Advantages for Expats: What You Need to Know in 2026',
  excerpt:
    'Argentina offers significant tax benefits for new residents, including territorial taxation and no inheritance tax. Our comprehensive guide breaks down everything you need to maximize your financial position.',
  image:
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80',
  category: 'Finance',
  readTime: '8 min read',
  date: 'January 15, 2026',
  href: '/guides/tax-advantages',
};

const recentArticles = [
  {
    id: 2,
    title: 'Healthcare in Argentina: A Complete Guide for Expats',
    excerpt:
      'Understanding the public and private healthcare systems and how to access quality medical care.',
    category: 'Healthcare',
    readTime: '6 min read',
    date: 'January 12, 2026',
    href: '/guides/healthcare',
  },
  {
    id: 3,
    title: 'Opening a Bank Account as a Foreign Resident',
    excerpt:
      'Step-by-step guide to navigating the Argentine banking system and managing your finances.',
    category: 'Banking',
    readTime: '5 min read',
    date: 'January 8, 2026',
    href: '/guides/banking',
  },
  {
    id: 4,
    title: 'Cultural Adaptation: Embracing the Argentine Way of Life',
    excerpt:
      'From mate rituals to asado traditions, learn the cultural nuances that will help you thrive.',
    category: 'Culture',
    readTime: '7 min read',
    date: 'January 5, 2026',
    href: '/guides/culture',
  },
  {
    id: 5,
    title: 'Real Estate Market Trends: Where to Invest in 2026',
    excerpt:
      'Analysis of emerging neighborhoods and investment hotspots across Argentina.',
    category: 'Investment',
    readTime: '10 min read',
    date: 'January 2, 2026',
    href: '/guides/real-estate-trends',
  },
];

export default function Editorial() {
  return (
    <section className="section-padding bg-white">
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
            Resources & Insights
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy-900 font-light mb-6">
            The Argentina <span className="italic">Living Guide</span>
          </h2>
          <div className="divider-gold mb-6" />
          <p className="font-sans text-navy-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Expert insights, practical guides, and the latest information to help you 
            plan your move and thrive in Argentina.
          </p>
        </motion.div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <Link href={featuredArticle.href} className="group block">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-6">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-gold-500 text-navy-900 font-sans text-xs tracking-wider uppercase font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-4 text-white/60 mb-4">
                    <span className="flex items-center gap-1.5 font-sans text-xs">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-sans text-xs">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>

                  <p className="font-sans text-white/70 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-gold-400 font-sans text-sm tracking-wider uppercase group-hover:gap-4 transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Recent Articles List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-navy-400">
                Recent Guides
              </h3>
              <Link
                href="/guides"
                className="font-sans text-xs tracking-wider uppercase text-gold-500 hover:text-gold-600 transition-colors"
              >
                View All
              </Link>
            </div>

            <div className="space-y-0">
              {recentArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    href={article.href}
                    className="group block py-6 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-start gap-4">
                      {/* Article Number */}
                      <span className="font-serif text-3xl text-navy-200 font-light min-w-[2rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1">
                        {/* Category & Read Time */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-sans text-xs tracking-wider uppercase text-gold-500">
                            {article.category}
                          </span>
                          <span className="text-navy-200">•</span>
                          <span className="font-sans text-xs text-navy-400">
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-serif text-lg text-navy-900 group-hover:text-gold-600 transition-colors duration-300 line-clamp-2">
                          {article.title}
                        </h4>

                        {/* Excerpt - shows on larger screens */}
                        <p className="hidden md:block font-sans text-sm text-navy-500 mt-2 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 p-8 md:p-12 bg-navy-950 rounded-lg text-center"
        >
          <p className="font-sans text-gold-400 text-xs tracking-ultra-wide uppercase mb-4">
            Stay Informed
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="font-sans text-white/60 text-sm mb-8 max-w-lg mx-auto">
            Get the latest visa updates, market insights, and exclusive guides 
            delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg font-sans text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button
              type="submit"
              className="btn-luxury gold-gradient text-navy-950 font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
