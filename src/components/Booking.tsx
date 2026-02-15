"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Booking() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.currentTarget);
    
    // Replace 'your-form-id' with your actual Formspree ID
    const response = await fetch("https://formspree.io/f/xdalekga", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-[#0F0F10] relative">
      <div className="max-w-4xl mx-auto border border-luxury-gold/20 p-8 md:p-16 bg-white/[0.01]">
        
        <AnimatePresence mode="wait">
          {status === "SUCCESS" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <h2 className="font-serif text-4xl text-luxury-gold mb-4">Inquiry Received</h2>
              <p className="text-luxury-white/70 font-sans tracking-wide">
                Thank you for reaching out. Gineve Music will contact you shortly <br /> 
                to discuss curating the perfect sound for your event.
              </p>
              <button 
                onClick={() => setStatus("IDLE")}
                className="mt-8 text-xs uppercase tracking-[0.3em] text-luxury-gold underline underline-offset-8"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-4">
                  Let’s Curate the <span className="text-luxury-gold italic">Perfect Sound</span>
                </h2>
                <p className="text-luxury-white/60 font-sans tracking-wide">
                  Inquire for corporate events, embassies, and luxury private gatherings.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">Full Name</label>
                    <input type="text" name="name" required className="bg-transparent border-b border-luxury-white/20 py-3 focus:border-luxury-gold outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">Organization</label>
                    <input type="text" name="organization" className="bg-transparent border-b border-luxury-white/20 py-3 focus:border-luxury-gold outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">Event Type</label>
                    <select name="event-type" className="bg-transparent border-b border-luxury-white/20 py-3 focus:border-luxury-gold outline-none text-luxury-white/50">
                      <option value="corporate">Corporate Event</option>
                      <option value="embassy">Embassy Function</option>
                      <option value="wedding">Luxury Wedding</option>
                      <option value="private">Private Gathering</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">Event Date</label>
                    <input type="date" name="date" required className="bg-transparent border-b border-luxury-white/20 py-3 focus:border-luxury-gold outline-none text-luxury-white/50" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-luxury-gold/70">Message</label>
                  <textarea name="message" rows={4} required className="bg-transparent border-b border-luxury-white/20 py-3 focus:border-luxury-gold outline-none resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === "SUBMITTING"}
                  className="w-full bg-luxury-gold text-black font-sans font-bold py-5 tracking-[0.3em] uppercase mt-8 hover:bg-luxury-gold/90 transition-all disabled:opacity-50"
                >
                  {status === "SUBMITTING" ? "Sending..." : "Request Performance"}
                </button>
                {status === "ERROR" && <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}