import React from 'react';
import Hero from '../components/Hero';
import Playground from '../components/Playground';
import Projects from '../components/Projects';
import Subfooter from '../components/Subfooter';
import Testimonials from '../components/Testimonials';
// import { ScrollerMotion } from 'scroller-motion';
// import MediaQuery from 'react-responsive';
function Home() {
  return (
    <div>
      {/* <MediaQuery minWidth={1280}>
        <ScrollerMotion>
          <Hero />
          <Projects />
          <Playground />
          <Testimonials />
          <Subfooter />
        </ScrollerMotion>
      </MediaQuery>
      <MediaQuery maxWidth={1280}>
        <Hero />
        <Projects />
        <Playground />
        <Testimonials />
        <Subfooter />
      </MediaQuery> */}
      <Hero />
      <Projects />
      <Playground />
      <Testimonials />
      <Subfooter />
    </div>
  );
}

export default Home;
