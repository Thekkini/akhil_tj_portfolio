import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import Skills from '../components/Skills';
import MyPictures from '../components/MyPictures';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import { ScrollerMotion } from 'scroller-motion';
// import MediaQuery from 'react-responsive';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      {' '}
      {/* <MediaQuery minWidth={1280}>
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
 </MediaQuery>
 <MediaQuery maxWidth={1280}>
   <div data-aos='fade-up'>
     <AboutHero />
   </div>
   <div data-aos='fade-up'>
     <Skills />
   </div>

   <div data-aos='fade-up'>
     <MyPictures />
   </div>
 </MediaQuery> */}
      <div data-aos='fade-up'>
        <AboutHero />
      </div>
      <div data-aos='fade-up'>
        <Skills />
      </div>
      <div data-aos='fade-up'>
        <MyPictures />
      </div>
    </>
  );
}

export default About;
