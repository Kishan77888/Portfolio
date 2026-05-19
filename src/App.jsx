import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
