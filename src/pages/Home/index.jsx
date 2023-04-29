import About from './components/About';
import Partner from './components/Partner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Talents from './components/Talent';
import Hero from './components/Hero';
import Tracks from './components/Tracks';

const index = () => {
  return (
    <>
      <Hero />
      <About />
      <Tracks />
      <Partner />
      <Talents />
      <Projects />
      <Contact />
    </>
  );
};

export default index;
