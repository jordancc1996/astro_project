'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80"
          alt="Buenos Aires skyline"
          className="w-full h-full object-cover"
        />
        {/* Video placeholder - uncomment and add video source for production */}
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy-950/50 to-transparent" />
        
        {/* Corner accents */}
        <div className="absolute top-32 left-8 md:left-16 w-px h-24 bg-gradient-to-b from-gold-500/50 to-transparent" />
        <div className="absolute top-32 left-8 md:left-16 w-24 h-px bg-gradient-to-r from-gold-500/50 to-transparent" />
        
        <div className="absolute top-32 right-8 md:right-16 w-px h-24 bg-gradient-to-b from-gold-500/50 to-transparent" />
        <div className="absolute top-32 right-8 md:right-16 w-24 h-px bg-gradient-to-l from-gold-500/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Eyebrow Text */}
          <p className="font-sans text-gold-400 text-xs md:text-sm tracking-ultra-wide uppercase mb-6 md:mb-8">
            Exclusive Residency & Citizenship Services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-6 md:mb-8">
            Your Gateway
            <br />
            <span className="italic text-gold-400">to the South</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Subheadline */}
          <p className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-14 font-light leading-relaxed">
            Secure your future in Argentina with expert guidance through investment residency, 
            retirement visas, and a streamlined path to citizenship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          {/* Primary CTA */}
          <Link
            href="/visa/investor"
            className="btn-luxury gold-gradient text-navy-950 font-medium shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 w-full sm:w-auto"
          >
            Investment Residency
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/visa/retiree"
            className="btn-luxury border-2 border-white/40 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
          >
            Retirement Visas
          </Link>
        </motion.div>

        {/* Video Play Button - Optional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-16"
        >
          <button className="group flex items-center gap-3 mx-auto text-white/60 hover:text-white transition-colors duration-300">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
              <Play className="w-4 h-4 ml-0.5" />
            </span>
            <span className="font-sans text-sm tracking-wider uppercase">
              Watch Our Story
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300 cursor-pointer"
      >
        <span className="font-sans text-xs tracking-widest uppercase">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-950/30 backdrop-blur-sm">
        <div className="container-luxury py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-3xl text-white">2</p>
              <p className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">
                Years to Citizenship
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center"
            >
              <p className="font-serif text-2xl md:text-3xl text-white">500+</p>
              <p className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">
                Clients Served
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center hidden md:block"
            >
              <p className="font-serif text-2xl md:text-3xl text-white">98%</p>
              <p className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">
                Approval Rate
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="text-center hidden md:block"
            >
              <p className="font-serif text-2xl md:text-3xl text-white">3</p>
              <p className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">
                Offices Worldwide
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
