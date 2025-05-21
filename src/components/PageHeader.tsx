'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  language?: 'fr' | 'ar';
}

// Client-only particle component to avoid hydration errors
function AnimatedParticles() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null; // Don't render anything during SSR
  }
  
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-primary/40"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: Math.random() * 0.5 + 0.3 
          }}
          animate={{ 
            y: [
              `${Math.random() * 100}%`, 
              `${Math.random() * 100}%`
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 10 + 20,
            ease: "linear"
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i + 5}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-orange/40"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: Math.random() * 0.5 + 0.3 
          }}
          animate={{ 
            y: [
              `${Math.random() * 100}%`, 
              `${Math.random() * 100}%`
            ],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 10 + 20,
            ease: "linear"
          }}
        />
      ))}
    </>
  );
}

export default function PageHeader({ title, subtitle, language = 'fr' }: PageHeaderProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        initial={{ scale: 1.05, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ 
          backgroundImage: "url('/images/hero-background.jpg')", 
          backgroundPosition: 'center',
        }}
      >
        {/* Modern gradient overlay with green, orange and black */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-orange/50"
          style={{
            backgroundPosition: `${mousePosition.x / 100}px ${mousePosition.y / 100}px`
          }}
        ></div>
        
        {/* Secondary gradient overlay to create depth */}
        <div 
          className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/30"
        ></div>
        
        {/* Particle overlay - Now client-only */}
        <div className="absolute inset-0">
          <AnimatedParticles />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          
          {/* Decorative accent line */}
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-orange mx-auto mt-4 sm:mt-5 md:mt-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: ["0rem", "4rem", "5rem", "6rem"], opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="text-white fill-current w-full">
          <path d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
} 