import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AboutAndHours from "@/components/sections/about-and-hours";
import ClientsAndBarbers from "@/components/sections/clients-and-barbers";
import CtaParallax from "@/components/sections/cta-parallax";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#5a6368]">
      <Header />
      <main>
        <Hero />
        <AboutAndHours />
        <ClientsAndBarbers />
        <CtaParallax />
      </main>
      <Footer />
    </div>
  );
}
