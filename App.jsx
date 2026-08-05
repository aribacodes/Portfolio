import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;