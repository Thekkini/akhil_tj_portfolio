import React, { useState } from 'react';
import { testimonials } from '../data';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Testimonials() {
  const [num, setNum] = useState(0);

  return (
    <div className='pb-[140px]'>
      <h1 className='sub-heading pb-[32px] pt-[144px] xl:pt-[180px]'>
        Testimonials
      </h1>
      {/* Desktop view */}
      <div className='hidden grid-cols-3 gap-[40px] lg:grid'>
        {testimonials.map((item, index) => {
          return (
            <div className=' space-y-[40px]' key={index}>
              <div>
                <p className='text-[18px] font-normal italic leading-[27.36px]'>
                  "{item.testimonial}"
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
      <div className='lg:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={90}
          totalSlides={3}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
        >
          <div>
            <div>
              <Slider>
                {testimonials.map((item, index) => {
                  return (
                    <Slide index={index}>
                      <div className='space-y-[40px]'>
                        <div>
                          <p className='text-[18px] font-normal italic leading-[27.36px]'>
                            "{item.testimonial}"
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

            <div className='mt-[32px] grid grid-cols-2 gap-[16px]'>
              <ButtonBack onClick={() => setNum(num - 1)}>
                <button
                  className={`button ${
                    num === 0 ? 'border-myRedLight' : 'border-myRed'
                  } flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 0 ? 'text-myRedLight' : 'text-myRed'
                    }`}
                  >
                    Previous
                  </p>
                </button>
              </ButtonBack>

              <ButtonNext onClick={() => setNum(num + 1)}>
                <button
                  className={`1button ${
                    num === 2 ? 'border-myRedLight' : 'border-myRed'
                  } flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 2 ? 'text-myRedLight' : 'text-myRed'
                    }`}
                  >
                    Next
                  </p>
                </button>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Testimonials;
