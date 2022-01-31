import React from 'react';
import AboutHero from '../components/AboutHero';
import Plans from '../components/Plans';
import Skills from '../components/Skills';
import MyPictures from '../components/MyPictures';

function About() {
  return (
    <div>
      <AboutHero />
      <Skills />
      <Plans />
      <MyPictures />
    </div>
  );
}

export default About;
