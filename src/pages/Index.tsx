import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="inicio">
        <Hero />
        <Accommodations />
        <Experiences />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
