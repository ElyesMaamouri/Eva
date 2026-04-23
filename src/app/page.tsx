import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Feature from "@/components/feature/Feature";
import Vision from "@/components/vision/Vision";
import Showcase from "@/components/showcase/Showcase";
import Portfolio from "@/components/portfolio/Portfolio";
import Partners from "@/components/partners/Partners";
import Blog from "@/components/blog/Blog";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <Vision />
      <Portfolio />
      <Partners />
      <Showcase />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
