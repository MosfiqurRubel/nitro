import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductionSection from "@/components/sections/ProductionSection";
import Footer from "@/components/layout/Footer";
import FlavorSection from "@/components/sections/FlavorSection";
import FloatingNitroCan from "@/components/FloatingNitroCan";
import NitroJourney from "@/components/NitroJourney";

function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <FloatingNitroCan />
      <NitroJourney />
      
      <Navbar />
      <Hero />
      <Footer />
      <ProductionSection />
      <FlavorSection />
    </main>
  );
}

export default App;
