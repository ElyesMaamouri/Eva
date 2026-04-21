import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Feature from "@/components/feature/Feature";
import Vision from "@/components/vision/Vision";
import Portfolio from "@/components/portfolio/Portfolio";
import Partners from "@/components/partners/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <Vision />
      <Portfolio />
      <Partners />
    </main>
  );
}
