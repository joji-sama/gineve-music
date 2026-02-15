"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    quote: "Gineve's performance at the residence was nothing short of breathtaking. A true professional with a world-class voice.",
    name: "Embassy Representative",
    event: "Diplomatic Gala",
  },
  {
    quote: "The band transformed our wedding into a cinematic experience. The soul and energy were exactly what we envisioned.",
    name: "Chidi & Amaka",
    event: "Luxury Wedding, Abuja",
  },
  {
    quote: "Sophisticated, punctual, and musically flawless. Gineve is our first choice for high-level corporate hosting.",
    name: "Operations Director",
    event: "Corporate Product Launch",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 italic text-luxury-gold">Kind Words</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 border border-luxury-gold/10 bg-white/[0.01] flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-serif text-luxury-gold leading-none">“</span>
                <p className="text-luxury-white/80 italic font-sans mb-6 leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div>
                <p className="font-serif text-lg text-luxury-gold">{item.name}</p>
                <p className="text-xs uppercase tracking-widest opacity-50 mt-1">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}