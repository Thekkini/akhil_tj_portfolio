import React from 'react';
import Hero from '../components/Hero';
import Playground from '../components/Playground';
import Projects from '../components/Projects';
import Subfooter from '../components/Subfooter';
import Testimonials from '../components/Testimonials';

function Home() {
  console.log(window.location.href);
  return (
    <div>
      <Hero />
      <Projects />
      <Playground />
      <Testimonials />
      <Subfooter />
    </div>
  );
}

export default Home;
