import React, { useState, useEffect } from 'react';
import { testimonials } from '../data';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Page from './Page';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Testimonials() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div data-aos='fade-up' className='text-[#000249] xl:px-[160px]'>
      <h1 className='sub-heading px-4 pb-[32px] pt-[144px] xl:pt-[180px]'>
        Testimonials
      </h1>
      {/* Desktop view */}
      <div className='hidden grid-cols-3 px-4 gap-[40px] xl:grid'>
        {testimonials.map((item, index) => {
          return (
            <div
              className='border-myRedLight space-y-[40px] rounded-lg border-[1.75px] px-[16px] py-[32px]'
              key={index}
            >
              <div>
                <p className='text-[18px] text-[#000249] font-normal  leading-[27.36px]'>
                  {item.testimonial}
                </p>
              </div>
              <div className='flex items-center gap-[16px]'>
                <div>
                  <img
                    className='h-[64px] w-[64px] rounded-full object-cover'
                    src={item.img}
                    alt='profile_pic'
                  />
                </div>
                <div className='space-y-[4px]'>
                  <div className='flex gap-[10.5px]'>
                    <p className='text-[20px] font-semibold xl:font-medium'>
                      {item.name}
                    </p>
                    <a href={item.link}>
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
                    </a>
                  </div>
                  <div>
                    <p>{item.post}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className='xl:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={testimonials.length}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
        >
          <div className='flex items-center h-full px-4 gap-7 pb-6'>
            <ButtonBack onClick={() => setNum(num - 1)}>
              <div className={`group ${num === 0 ? 'cursor-not-allowed' : ''}`}>
                <div
                  className={`arrowButton ${
                    num === 0
                      ? 'border-[#000249]  cursor-not-allowed	 opacity-[0.27]'
                      : 'border-myRed '
                  } `}
                >
                  <p
                    className={`  ${
                      num === 0
                        ? 'text-myRedLight cursor-not-allowed	'
                        : 'text-myRed'
                    }`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z'
                        fill={
                          num === 0
                            ? 'rgba(0, 2, 73, .27) 	'
                            : 'rgba(246,73,13,1)'
                        }
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </ButtonBack>
            <Page
              currentPage={num + 1}
              maxPage={testimonials.length}
              bgCol={'bg-myBlue'}
              textCol={'text-white'}
            />

            <ButtonNext onClick={() => setNum(num + 1)}>
              <div className={`group ${num === 3 ? 'cursor-not-allowed' : ''}`}>
                <div
                  className={`arrowButton ${
                    num === 2
                      ? 'border-[#000249]  cursor-not-allowed	 opacity-[0.27]'
                      : 'border-myRed '
                  } flex cursor-pointer items-center justify-center rounded-full border-[1.75px]  py-[6px] px-[6px]`}
                >
                  <p
                    className={`  ${
                      num === 2
                        ? 'text-myRedLight cursor-not-allowed	'
                        : 'text-myRed '
                    }`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                    >
                      <path fill='none' d='M0 0h24v24H0z' />
                      <path
                        fill={
                          num === 2
                            ? 'rgba(0, 2, 73, .27) 	'
                            : 'rgba(246,73,13,1)'
                        }
                        d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z'
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </ButtonNext>
          </div>
          <div>
            <div>
              <Slider>
                {testimonials.map((item, index) => {
                  return (
                    <Slide key={index} index={index}>
                      <div className='border-myRedLight flex flex-col  mx-4  h-full space-y-[40px] rounded-lg border-[1.75px] px-[12px] py-[24px]'>
                        <div>
                          <p className='text-[18px] text-[#000249] font-normal  leading-[27.36px]'>
                            {item.testimonial}
                          </p>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                          <div>
                            <img
                              className='h-[64px] w-[64px] rounded-full object-cover'
                              src={item.img}
                              alt='profile_pic'
                            />
                          </div>
                          <div className='space-y-[4px]'>
                            <div className='flex gap-[10.5px]'>
                              <p className='text-[20px] font-semibold xl:font-medium'>
                                {item.name}
                              </p>
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
                            <div>
                              <p>{item.post}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  );
                })}
              </Slider>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Testimonials;
