export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-luxury-gold/10 bg-luxury-black text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="font-serif text-2xl tracking-tighter mb-2">GINEVE MUSIC</h2>
          <p className="text-xs uppercase tracking-[0.4em] text-luxury-gold">Abuja, Nigeria</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 text-sm font-sans tracking-widest opacity-60">
          <a href="mailto:ginevebase@gmail.com" className="hover:text-luxury-gold transition-colors">EMAIL</a>
          <a href="https://instagram.com/gineve_music" className="hover:text-luxury-gold transition-colors">INSTAGRAM</a>
          <a href="https://www.youtube.com/@ginevebase" className="hover:text-luxury-gold transition-colors">YOUTUBE</a>
          <p>+234 (0) 808 680 5415</p>
        </div>

        <div className="text-[10px] opacity-40 font-sans tracking-widest">
          © 2026 GINEVE MUSIC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}