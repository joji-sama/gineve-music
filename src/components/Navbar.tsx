"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-luxury-black/90 backdrop-blur-md py-4 border-b border-luxury-gold/10" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-xl tracking-widest cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          GINEVE <span className="text-luxury-gold">MUSIC</span>
        </div>
        
        <button 
          onClick={() => scrollToSection('booking')}
          className="border border-luxury-gold text-luxury-gold px-6 py-2 text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all duration-300"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
