'use client';

import { motion } from 'framer-motion';
import { Star, Crown, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Thompson',
      quote: 'An unparalleled grooming sanctuary that transcends ordinary salon experiences. Every visit feels like stepping into a realm of pure luxury.',
      profession: 'CEO, Tech Innovations',
      rating: 5,
      image: '/placeholder.svg?height=400&width=400',
      membership: 'Platinum Member'
    },
    {
      name: 'David Rodriguez',
      quote: 'The epitome of sophistication. Their attention to detail and masterful techniques have redefined my expectations of premium grooming.',
      profession: 'Fashion Designer',
      rating: 5,
      image: '/placeholder.svg?height=400&width=400',
      membership: 'Elite Member'
    },
    {
        name: 'James Carter',
        quote: 'A gentleman\'s sanctuary where expertise meets elegance. The personalized service and luxurious atmosphere are simply unmatched.',
        profession: 'Investment Banker',
        rating: 5,
        image: '/placeholder.svg?height=400&width=400',
        membership: 'VIP Member'
      },
    {
      name: 'Alexander Wright',
      quote: 'Beyond exceptional. Each visit is a masterclass in luxury grooming, complemented by impeccable service and attention to detail.',
      profession: 'Executive Director',
      rating: 5,
      image: '/placeholder.svg?height=400&width=400',
      membership: 'Diamond Member'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <Crown className="h-12 w-12 text-amber-400" />
          </motion.div>
          <h2 className="text-5xl font-serif text-white mb-6">
            Esteemed Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what our distinguished clientele says about their luxurious experiences
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-amber-500/10">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-amber-500 rounded-full p-3 shadow-lg"
                >
                  <Quote className="w-6 h-6 text-gray-900" />
                </motion.div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-amber-400 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{testimonial.profession}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <p className="text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </motion.div>

                <div className="flex items-center justify-between pt-4 border-t border-amber-500/10">
                  <span className="text-amber-400 text-sm font-medium">
                    {testimonial.membership}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-amber-400/10 px-3 py-1 rounded-full"
                  >
                    <span className="text-amber-400 text-xs">Verified Client</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent transform -skew-x-12 group-hover:animate-shine" />
            <span className="relative text-white font-medium tracking-wider uppercase">
              Join Our Distinguished Clientele
            </span>
          </button>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block"
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
        >
          <Quote className="w-24 h-24 text-amber-400/10 transform -rotate-12" />
        </motion.div>
      ))}
    </section>
  );
}

export default Testimonials;

// Add this to your globals.css

