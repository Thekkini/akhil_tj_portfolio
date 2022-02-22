import React, { useEffect } from 'react';
import { socialMedia } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className='px-[16px] pt-[140px] xl:min-h-screen xl:px-[160px] xl:pt-[265px]'>
      <div data-aos='fade-right'>
        <p className='main-para pb-[4px] xl:text-center'>
          Hello, I'm <span className='text-myRed'> Akhil TJ.</span>
        </p>
        <h1 className='main-heading pb-[4px] xl:text-center '>
          <span className='outline_text font-montserratblack xl:text-center'>
            Product cum
          </span>{' '}
          <span className='heading xl:text-center'>UX Designer</span>
        </h1>
        <p className='main-para max-w-[780px] xl:mx-auto xl:text-center'>
          <span className='text-myRed'>My Philosophy</span>: "is to add value to
          almost everything, including products, individuals, and myself"
        </p>
      </div>
      <div data-aos='fade-left' className='flex justify-between pt-[201.5px]'>
        <div className='hidden gap-[26.5px]  xl:flex '>
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
        <div className='hidden items-center justify-center gap-2 xl:flex'>
          <p className='button'>Scroll </p>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4H11.14zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801a5.452 5.452 0 0 1-2.268-2.268C4.278 17.953 4 16.873 4 14.859V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z'
                fill='rgba(246,73,13,1)'
              />
            </svg>
          </span>
          <p className='button'> Down</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
