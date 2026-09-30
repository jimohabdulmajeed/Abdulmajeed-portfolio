import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Work />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
