import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import Plans from '../components/Plans';
import Skills from '../components/Skills';
import MyPictures from '../components/MyPictures';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div>
      <div data-aos='fade-up'>
        <AboutHero />
      </div>
      <div data-aos='fade-up'>
        <Skills />
      </div>
      <div data-aos='fade-up'>
        <Plans />
      </div>
      <div data-aos='fade-up'>
        <MyPictures />
      </div>
    </div>
  );
}

export default About;
