import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="page-shell">
      <div className="site-shell">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Philosophy />
          <Programs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
