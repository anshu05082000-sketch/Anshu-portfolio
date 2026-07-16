import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <main className="pt-20 min-h-screen bg-slate-950 text-white">
        <h1 className="text-5xl font-bold text-center mt-20">
          Welcome to My Portfolio
        </h1>
      </main>
    </>
  );
}