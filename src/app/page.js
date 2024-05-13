// import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main
      className="text-indigo-700 body-font"
      style={{ background: "#EEEDE7", color: "#868B8E" }}
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
