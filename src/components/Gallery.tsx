"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  // Mapping based on your uploaded public folder images
  const images = [
    { src: "/gallery-1.jpg", alt: "Gineve Performance 1" },
    { src: "/gallery-2.jpg", alt: "Gineve Performance 2" },
    { src: "/gallery-3.jpg", alt: "Gineve Performance 3" },
    { src: "/gallery-4.jpg", alt: "Gineve Performance 4" },
    { src: "/gallery-5.jpg", alt: "Gineve Performance 5" },
    { src: "/gallery-6.jpg", alt: "Gineve Performance 6" },
    { src: "/gallery-7.jpg", alt: "Gineve Performance 7" },
  ];

  return (
    <section className="py-24 bg-luxury-black overflow-hidden">
      <div className="px-6 mb-12">
        <h2 className="font-serif text-4xl text-center italic">
          Visual <span className="text-luxury-gold font-sans not-italic font-light">Moments</span>
        </h2>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-4 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group border border-white/5"
          >
            <Image 
              src={img.src}
              alt={img.alt}
              width={800}
              height={1000}
              className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}