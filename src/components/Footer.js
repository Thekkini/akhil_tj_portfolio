import React from 'react';
import { socialMedia } from '../data';
import { footer } from '../data';
function Footer() {
  return (
    <div className='px-[16px] pb-[36px] xl:px-[160px]'>
      {/* Desktop view */}
      <div className='hidden justify-between  xl:flex '>
        <div className='flex gap-[26.5px] '>
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
        <div className='space-y-[8px]'>
          <p>
            Designed by <span className='font-semibold'>Akhil TJ</span>
          </p>
          <p>
            Developed by <span className='font-semibold'>Akshay Benny</span>
          </p>
        </div>
      </div>
      {/*Mobile View */}
      <div className='space-y-[32px] xl:hidden'>
        <div className='flex justify-center gap-[24px]'>
          {footer.map((item, index) => {
            return (
              <a
                target='_blank'
                rel='noreferrer'
                className='rounded-full'
                href={item.link}
                key={index}
              >
                <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black'>
                  {item.icon}
                </div>
              </a>
            );
          })}
        </div>
        <div>
          <p className='text-center'>
            Designed by <span className='font-semibold'>Akhil TJ</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
