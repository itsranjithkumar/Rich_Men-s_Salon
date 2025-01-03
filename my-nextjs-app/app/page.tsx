'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import { Crown, Scissors, Star } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 400]);
  
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <Header />
      
      {/* Luxurious Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: parallaxY
          }}
        />
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1),transparent_50%)]" />
        
        {/* Animated Patterns */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-96 opacity-20 border border-amber-400/30 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Floating Decorative Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-12 text-amber-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {i % 2 === 0 ? <Crown className="size-full" /> : <Scissors className="size-full" />}
          </motion.div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.div 
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.8 }}
            >
              <Crown className="size-20 text-amber-400" />
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8"
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '0.15em', opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              ROYAL CUTS
            </motion.h1>
            
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + i * 0.1 }}
                >
                  <Star className="size-6 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              WHERE LUXURY MEETS LEGACY
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.button 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-amber-600 
                  px-12 py-4 text-lg font-medium uppercase tracking-wider text-white shadow-2xl
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent"
                  animate={{
                    x: ["0%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                Experience Royalty
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decorative Border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
      </motion.section>

      <Services />
      <Gallery />
      <Testimonials />
    </motion.main>
  );
}

