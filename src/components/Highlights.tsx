"use client";
import { motion } from "framer-motion";

export default function Highlights() {
  const collaborations = [
    "Smokey’s Shineband", "Jojo Band", "Groovymax Band", "Sweet Sound Entertainment"
  ];

  const backupWork = [
    "Jessica Bongos", "Reeplay", "Firstklaz", "Nimix (UK)", "Kabusa Oriental Choir"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-black border-t border-luxury-gold/10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm">Prestigious Milestones</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 italic">Notable Recognition</h2>
        </motion.div>

        {/* Featured Highlight */}
        <div className="mb-20 text-center md:text-left border-l-2 border-luxury-gold pl-8 py-4">
          <h3 className="font-serif text-2xl md:text-3xl text-luxury-gold mb-2">U.S. Ambassador’s Private Residence</h3>
          <p className="text-xl opacity-80">Private Performance — May 2025</p>
          <p className="text-sm uppercase tracking-widest mt-2 opacity-50 font-sans">Abuja, Nigeria</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Collaborations */}
          <div>
            <h4 className="font-serif text-xl border-b border-luxury-gold/30 pb-4 mb-6">Key Collaborations</h4>
            <ul className="space-y-4 font-sans opacity-80">
              {collaborations.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-[1px] w-4 bg-luxury-gold"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Backup Vocals */}
          <div>
            <h4 className="font-serif text-xl border-b border-luxury-gold/30 pb-4 mb-6">Artist Support & Backup</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-4 font-sans opacity-80">
              {backupWork.map((item) => (
                <span key={item} className="hover:text-luxury-gold transition-colors duration-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* YES Academy Highlight */}
        <div className="mt-20 p-8 border border-luxury-gold/10 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent text-center">
          <p className="font-serif text-xl italic">
            "YES Academy 2025 Participant — U.S. Embassy & American Voices"
          </p>
        </div>
      </div>
    </section>
  );
}