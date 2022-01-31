import React from 'react';
import { aboutData } from '../data';

function AboutHero() {
  return (
    <div className='px-0 lg:px-[160px]'>
      <div className=' gap-[-120px]  lg:grid lg:grid-cols-12'>
        <img
          className=' col-span-6 h-[375px] w-full object-cover lg:h-[503px]'
          src={aboutData.aboutMyself.img}
          alt='myPhoto'
        />

        <div className='bg-myLight z-50 col-span-4 px-[16px] pt-[24px]  lg:px-[20x] lg:pt-[20px] '>
          <h1 className='sub-heading '>{aboutData.aboutMyself.heading}</h1>
          <p className='main-para pt-[4px]'>
            <span className='text-myRed'>My Philosophy</span>: "
            {aboutData.aboutMyself.philosophy}"
          </p>
          <p className='para pt-[40px] lg:pt-[48px]'>
            {aboutData.aboutMyself.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
