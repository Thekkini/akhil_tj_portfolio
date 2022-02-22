import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import Skills from '../components/Skills';
import MyPictures from '../components/MyPictures';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ScrollerMotion } from 'scroller-motion';

function About() {
  console.log(window.location.href);
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div>
      <ScrollerMotion>
        <div data-aos='fade-up'>
          <AboutHero />
        </div>
        <div data-aos='fade-up'>
          <Skills />
        </div>

        <div data-aos='fade-up'>
          <MyPictures />
        </div>
      </ScrollerMotion>
    </div>
  );
}

export default About;
