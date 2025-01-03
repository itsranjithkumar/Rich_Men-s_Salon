'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Crown } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'Royal Treatment Room',
      description: 'Where luxury meets tranquility'
    },
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'Executive Lounge',
      description: 'Premium relaxation space'
    },
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'Master Styling Station',
      description: 'Precision and elegance combined'
    },
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'VIP Suite',
      description: 'Ultimate grooming experience'
    },
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'Luxury Wash Station',
      description: 'Indulgent hair treatments'
    },
    {
      src: '/placeholder.svg?height=800&width=1200',
      title: 'Premium Product Display',
      description: 'Curated grooming essentials'
    }
  ];

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImageIndex + 1) % galleryImages.length
      : (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImageIndex(newIndex);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(251,191,36,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(251,191,36,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(251,191,36,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(251,191,36,0.1) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
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
            Our Prestigious Space
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Step into a world of refined luxury and sophisticated grooming
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 border border-amber-500/10"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative h-80">
                  <Image 
                    src={image.src} 
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-serif text-white mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg"
            >
              <motion.button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImageIndex(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              <motion.div className="flex items-center justify-between w-full px-4">
                <motion.button
                  className="text-white/70 hover:text-white transition-colors p-2"
                  onClick={() => navigateGallery('prev')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>

                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative max-w-5xl max-h-[80vh] w-full"
                >
                  <Image 
                    src={galleryImages[selectedImageIndex].src}
                    alt={galleryImages[selectedImageIndex].title}
                    width={1200}
                    height={800}
                    className="rounded-2xl object-contain w-full h-full"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                  >
                    <h3 className="text-2xl font-serif text-white mb-2">
                      {galleryImages[selectedImageIndex].title}
                    </h3>
                    <p className="text-gray-300">
                      {galleryImages[selectedImageIndex].description}
                    </p>
                  </motion.div>
                </motion.div>

                <motion.button
                  className="text-white/70 hover:text-white transition-colors p-2"
                  onClick={() => navigateGallery('next')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Gallery;
