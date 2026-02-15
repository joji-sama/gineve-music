"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-performance.jpg')` }} // Placeholder: Add your image to /public
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Elevating Abuja’s Finest Events with <span className="text-luxury-gold italic">Soulful Live Music</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-luxury-white/80 mb-10 max-w-2xl mx-auto">
          Gineve Music curates refined live performances for corporate gatherings, 
          embassies, luxury weddings, and exclusive private events.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button 
    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-luxury-gold hover:bg-luxury-gold/90 text-black px-8 py-4 transition-all duration-300 font-medium"
  >
    Work With Gineve Music
  </button>
  <button 
    onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
    className="border border-luxury-white/30 hover:border-luxury-gold hover:text-luxury-gold px-8 py-4 transition-all duration-300"
  >
    Watch Performance
  </button>
</div>
      </motion.div>
    </section>
  );
}