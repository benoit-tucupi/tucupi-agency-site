import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToolsBanner from "@/components/ToolsBanner";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Realisations from "@/components/Realisations";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ToolsBanner />
        <Services />
        <Products />
        <Realisations />
        <Testimonials />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
