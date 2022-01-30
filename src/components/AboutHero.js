import React from 'react';
import { aboutData } from '../data';

function AboutHero() {
  return (
    <div className='px-0 lg:px-[160px]'>
      <div className=' lg:grid lg:grid-cols-2'>
        <img
          className=' h-[375px] w-full object-cover lg:h-[503px] '
          src={aboutData.aboutMyself.img}
          alt='myPhoto'
        />

        <div className='bg-myLight  px-[16px] pt-[24px]  lg:px-[20x] lg:pt-[20px] '>
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
