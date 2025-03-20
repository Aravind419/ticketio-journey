
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2940&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/80 to-brand-gray-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="stagger-animate"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6 animate-fade-in">
              The Smoothest Way to Travel
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Book Your <span className="text-brand-red">Journey</span> With Confidence
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in">
              Discover comfortable, reliable, and affordable bus services
              for your next adventure. Book online in seconds.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <button className="px-8 py-3 bg-brand-red hover:bg-brand-darkRed text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                Book Your Ticket
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-lg border border-white/30 transition-all duration-300">
                View Routes
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Scroll for more</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
