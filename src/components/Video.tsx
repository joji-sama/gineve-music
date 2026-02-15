export default function Video() {
  return (
    <section id="video" className="py-24 px-6 bg-[#0B0B0C]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 italic">The <span className="text-luxury-gold">Performance</span></h2>
        
        {/* Instagram Embed Container */}
        <div className="flex justify-center border border-luxury-gold/10 p-4 bg-white/[0.02]">
          <iframe
            src="https://www.instagram.com/reel/DF8SK5xIHR9/embed" 
            width="400"
            height="600"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="rounded-sm shadow-2xl"
          ></iframe>
        </div>
        <p className="mt-6 text-sm opacity-50 tracking-widest">FOLLOW @GINEVE_MUSIC FOR MORE</p>
      </div>
    </section>
  );
}