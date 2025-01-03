'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scissors, Crown, Sparkles, Wine, Coffee, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: 'Royal Signature Cut',
      description: 'Precision artistry by master stylists, including hot towel service and scalp massage',
      price: '$150',
      duration: '60 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Crown,
      features: ['Consultation', 'Premium Products', 'Styling']
    },
    { 
      title: 'Imperial Beard Design',
      description: 'Expert beard sculpting and grooming with premium oils and hot towel treatment',
      price: '$120',
      duration: '45 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Scissors,
      features: ['Trim & Shape', 'Oil Treatment', 'Styling']
    },
    { 
      title: 'Luxury Facial Revival',
      description: 'Advanced skincare treatment using premium products and techniques',
      price: '$200',
      duration: '75 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Sparkles,
      features: ['Deep Cleanse', 'Massage', 'Mask']
    },
    { 
      title: 'Executive Package',
      description: 'Complete grooming experience with premium refreshments and services',
      price: '$350',
      duration: '120 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Wine,
      features: ['All Services', 'Beverages', 'Snacks']
    },
    { 
      title: 'The Gentleman\'s Hour',
      description: 'Relaxing grooming session with artisanal coffee and premium care',
      price: '$180',
      duration: '90 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Coffee,
      features: ['Haircut', 'Coffee', 'Relaxation']
    },
    { 
      title: 'Express Excellence',
      description: 'Quick yet thorough premium grooming for the busy professional',
      price: '$100',
      duration: '30 min',
      image: '/placeholder.svg?height=600&width=800',
      icon: Clock,
      features: ['Quick Service', 'Quality Care', 'Styling']
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

  const itemVariants = {
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
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Content Container */}
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
            Exclusive Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Indulge in our premium grooming experiences, tailored for the distinguished gentleman
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-amber-500/10">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  </div>
                  
                  <div className="p-8 relative">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8 text-amber-400" />
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 font-serif text-2xl">{service.price}</span>
                        <span className="text-gray-400 text-sm">/ {service.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs bg-amber-400/10 text-amber-400 border border-amber-400/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-sm font-medium">{service.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
              Book Your Experience
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;

