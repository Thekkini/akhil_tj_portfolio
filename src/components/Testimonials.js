import React from 'react';
import { testimonials } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Testimonials() {
  var settings = {
    dots: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        <Slider {...settings}>
          {testimonials.map((item, index) => {
            return (
              <div className='space-y-[40px]' key={index}>
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
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
