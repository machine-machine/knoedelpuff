import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Produkte from "@/components/Produkte";
import Catering from "@/components/Catering";
import Bestellen from "@/components/Bestellen";
import Standorte from "@/components/Standorte";
import UeberUns from "@/components/UeberUns";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Produkte />
        <Catering />
        <Bestellen />
        <Standorte />
        <UeberUns />
      </main>
      <Footer />
    </>
  );
}
