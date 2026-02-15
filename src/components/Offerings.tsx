"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Solo Vocal Performance", desc: "A captivating alto presence, perfect for intimate embassy dinners and cocktail hours." },
  { title: "Duo Performance", desc: "Vocalist paired with a master pianist or guitarist for a sophisticated acoustic atmosphere." },
  { title: "Full Live Band", desc: "The ultimate luxury experience—a high-energy, soulful ensemble for major celebrations." },
  { title: "Luxury Wedding Music", desc: "Curated soundtracks for your march down the aisle and the sophisticated reception to follow." },
  { title: "Corporate & Embassy Events", desc: "Tailored musical direction that aligns with the prestige of your brand or diplomatic mission." },
  { title: "Music Direction", desc: "Expert sound curation and event flow management for high-profile gatherings." },
];

export default function Offerings() {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Curated Performance <span className="text-luxury-gold italic">Experiences</span></h2>
          <div className="h-[1px] w-24 bg-luxury-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-10 border border-luxury-gold/10 bg-white/[0.02] transition-all duration-300"
            >
              <h3 className="font-serif text-2xl mb-4 text-luxury-gold">{service.title}</h3>
              <p className="text-luxury-white/70 leading-relaxed font-sans">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}