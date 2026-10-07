import "./App.css"; //src-এর ভিতরের App.css ব্যবহার করো

import Navbar from "./components/Navbar";
//components folder-এর ভিতরের Navbar.jsx  file ব্যবহার করো
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;