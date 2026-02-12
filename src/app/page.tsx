import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Produkte from "@/components/Produkte";
import WerWirSind from "@/components/WerWirSind";
import Festivals from "@/components/Festivals";
import Weihnachtsmaerkte from "@/components/Weihnachtsmaerkte";
import Bestellen from "@/components/Bestellen";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Produkte />
        <WerWirSind />
        <Festivals />
        <Weihnachtsmaerkte />
        <Bestellen />
      </main>
      <Footer />
    </>
  );
}
