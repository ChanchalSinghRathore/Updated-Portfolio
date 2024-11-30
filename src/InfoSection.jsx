import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';

function InfoSection() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the target section when the hash changes
    const sectionId = location.hash.substring(1); // Extract the section ID from the hash
    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="qualification">
        <Qualification />
      </section>
    </div>
  );
}

export default InfoSection;
