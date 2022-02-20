import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Playground from '../components/Playground';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';

function Home() {
  console.log(window.location.href);
  return (
    <div className='px-[16px] xl:px-[160px]'>
      <Hero />

      <Projects />

      <Playground />
      <Testimonials />
    </div>
  );
}

export default Home;
