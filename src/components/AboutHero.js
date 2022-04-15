import React from 'react';
import { aboutData } from '../data';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

function AboutHero() {
  // useEffect(() => {
  //   Aos.init({ duration: 1500, once: true });
  // }, []);
  return (
    <div className=' xl:px-[160px]  xl:pt-[80px]'>
      <div className='flex justify-center'>
        <img
          className='aspect-square  w-full object-cover '
          src={aboutData.aboutMyself.img}
          alt='myPhoto'
        />

        <div className='bg-myLight  mb-[108px] px-[16px] pt-[24px] flex justify-center   xl:mb-[400px] xl:max-w-[750px]'>
          <div className="">
            <h1 className='sub-heading text-[#000249]'>
              Hi, I'm <span className='text-myRed'>Akhil T J</span>.
            </h1>
            <div>
              <p className='sub-heading text-[#000249]'>
                My peeps call me <span className='text-myRed'>T J</span> for
                short.
              </p>
            </div>
            <p className='main-para text-[#000249] pt-[4px]'>
              {aboutData.aboutMyself.philosophy}
            </p>
            <p className='para pt-[40px] xl:pt-[48px]'>
              <div className='space-y-[48px] pb-[24px]'>
                {aboutData.aboutMyself.bio.map((para, index) => {
                  return (
                    <div>
                      <p className='text-[#000249]'>{para.para}</p>
                    </div>
                  );
                })}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
