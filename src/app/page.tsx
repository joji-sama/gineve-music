import Hero from "@/components/Hero";
import About from "@/components/About";
import Sound from "@/components/Sound";
import Offerings from "@/components/Offerings";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials"; // New
import Booking from "@/components/Booking";
import Footer from "@/components/Footer"; // New

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Sound />
      <Offerings />
      <Highlights />
      <Gallery />
      <Video />
      <Testimonials />
      <div className="py-12 bg-luxury-black">
        <div className="h-[1px] w-1/2 mx-auto bg-luxury-gold/20" /> {/* Subtle Divider */}
      </div>
      <section id="booking">
        <Booking />
      </section>
      <Footer />
    </main>
  );
}