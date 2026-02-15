"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[650px] w-full"
        >
          {/* Elegant Gold Border Frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-luxury-gold/30 z-0" />
          <div className="relative h-full w-full z-10 overflow-hidden">
             <Image 
                src="/potrait.jpg" 
                alt="Gineve Music Portrait" 
                fill 
                className="object-cover"
                priority
             />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 border-b border-luxury-gold/20 pb-4">
            The Voice of <span className="text-luxury-gold">Sophistication</span>
          </h2>
          
          <div className="space-y-6 font-sans text-luxury-white/90 text-lg leading-relaxed">
            <p>
              Based in the heart of Abuja, Gineve Music is a premium live music brand 
              dedicated to the art of atmosphere. Led by a vocalist with a commanding 
              alto presence, we specialize in soulful curation.
            </p>
            <p>
              With a repertoire spanning Jazz, R&B, and Afro-soul, our performances 
              are trusted by embassies and luxury brands to deliver musical excellence 
              that feels both cinematic and intimate.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-luxury-gold/20 pt-8">
            <div>
              <p className="text-luxury-gold font-serif text-xl mb-1">U.S. Embassy</p>
              <p className="text-sm opacity-70 italic">Private Performance, 2025</p>
            </div>
            <div>
              <p className="text-luxury-gold font-serif text-xl mb-1">YES Academy</p>
              <p className="text-sm opacity-70 italic">American Voices Alumni</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}