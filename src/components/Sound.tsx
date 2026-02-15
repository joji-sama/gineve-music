"use client";
import { motion } from "framer-motion";

const genres = [
  { title: "Jazz", desc: "Sophisticated standards and improvisational elegance." },
  { title: "R&B / Soul", desc: "Velvet vocals paired with deep, emotive grooves." },
  { title: "Afro-soul", desc: "A fusion of heritage rhythms and contemporary soul." },
  { title: "Pop", desc: "Refined renditions of modern classics." },
  { title: "Gospel", desc: "Powerful, uplifting, and spiritually resonant." },
  { title: "Contemporary", desc: "Versatile sounds tailored for any atmosphere." },
];

export default function Sound() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 italic">
          Signature <span className="text-luxury-gold">Sound</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genres.map((genre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-luxury-white/5 hover:border-luxury-gold/30 transition-all duration-500"
            >
              <h3 className="font-serif text-2xl mb-3 text-luxury-gold/90 group-hover:text-luxury-gold">
                {genre.title}
              </h3>
              <p className="text-luxury-white/60 font-sans leading-relaxed">
                {genre.desc}
              </p>
              {/* Subtle gold underline animation */}
              <div className="mt-4 h-[1px] w-0 bg-luxury-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}