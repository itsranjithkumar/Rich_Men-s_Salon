'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Crown } from 'lucide-react';

const Header = () => {
  const navItems = ['Home', 'Services', 'Gallery', 'Testimonials'];
  
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed w-full z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-md border-b border-gold/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05),transparent)] pointer-events-none" />
      
      <nav className="container mx-auto flex justify-between items-center p-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 group"
        >
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Crown className="w-8 h-8 text-amber-400" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif tracking-wider text-white">
              ROYAL CUTS
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
              Luxury Salon
            </span>
          </div>
        </motion.div>

        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <motion.li 
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="relative group"
            >
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.li>
          ))}
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-amber-600 
              text-white px-8 py-3 rounded-full font-medium tracking-wider uppercase text-sm
              transition-all duration-300 hover:from-amber-600 hover:to-amber-700
              shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]">
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
              Book Now
            </button>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Header;
