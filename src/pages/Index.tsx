import { BrandsStrip } from "@/components/site/BrandsStrip";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { Services } from "@/components/site/Services";
import { Since2009 } from "@/components/site/Since2009";
import { Hero } from "@/components/site/hero/Hero";
import { HowWeWork } from "@/components/site/how/HowWeWork";
import { Results } from "@/components/site/results/Results";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main" className="flex-grow">
        <Hero />
        <BrandsStrip />
        <HowWeWork />
        <Results />
        <Since2009 />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
