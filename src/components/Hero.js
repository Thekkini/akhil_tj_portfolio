import React from 'react';
import { socialMedia } from '../data';

function Hero() {
  return (
    <div className='pt-[66px] md:pt-[203px]'>
      <div>
        <p className='main-para pb-[4px]'>
          Hello, <span className='text-myRed'>I'm Akhil TJ.</span>
        </p>
        <h1 className='main-heading w-min pb-[4px] md:w-1/2'>
          Junior Designer, Specializing in UI/UX
        </h1>
        <p className='main-para pr-[30px]'>
          <span className='text-myRed'>My Philosophy</span>: "Add value to
          things, to people and to myself."
        </p>
      </div>
      <div className='flex justify-between pt-[201.5px]'>
        <div className='hidden gap-[26.5px]  md:flex '>
          {socialMedia.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                className='button flex items-center justify-center space-x-[10.5px]'
              >
                <p>{item.name}</p>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path
                      d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z'
                      fill='rgba(246,73,13,1)'
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
        <div className='hidden xl:flex'>
          <p className='button'>Scroll Down</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
