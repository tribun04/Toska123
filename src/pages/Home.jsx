import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import WhyUs from "../components/WhyUs"


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
            <WhyUs />
            

    </main>
  );
}