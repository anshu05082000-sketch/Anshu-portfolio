import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import WhyHireMe from "@/components/WhyHireMe";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <WhyHireMe /> 


      <main className="pt-20 min-h-screen bg-slate-950 text-white">
        <h1 className="text-5xl font-bold text-center mt-20">
          Welcome to My Portfolio
        </h1>
      </main>

      <Footer /> 
    </>
  );
}