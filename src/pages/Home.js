import React from 'react';
import Hero from '../components/Hero';
import Playground from '../components/Playground';
import Projects from '../components/Projects';
import Subfooter from '../components/Subfooter';
import Testimonials from '../components/Testimonials';
import { ScrollerMotion } from 'scroller-motion';

function Home() {
  console.log(window.location.href);
  return (
    <div>
      <ScrollerMotion>
        <Hero />
        <Projects />
        <Playground />
        <Testimonials />
        <Subfooter />
      </ScrollerMotion>
    </div>
  );
}

export default Home;
