import React from 'react';
import Hero from '../components/Hero';
import Playground from '../components/Playground';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Playground />
      <Testimonials />
    </div>
  );
}

export default Home;
