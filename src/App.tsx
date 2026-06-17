import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductionSection from "@/components/sections/ProductionSection";
import Footer from "@/components/Footer";
import FlavorSection from '@/components/sections/FlavorSection';

function App() {

  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ProductionSection />
      <FlavorSection />
      <Footer />
    </main>
  );
}

export default App;
