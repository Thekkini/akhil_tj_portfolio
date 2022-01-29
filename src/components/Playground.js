import React from 'react';
import { playground } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Playground() {
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
    <div className='pt-[145px] pb-[32px] xl:pt-[180px]'>
      <h1 className='sub-heading pb-[32px]'>Playground</h1>

      {/* Desktop view */}
      <div className='hidden flex-wrap gap-[24px] lg:flex'>
        {playground.map((item, index) => {
          return (
            <img
              key={index}
              className='h-[333px] w-[333px] rounded object-cover'
              src={item.img}
              alt='playground'
            />
          );
        })}
      </div>

      {/* Mobile view */}
      <div className='lg:hidden'>
        <Slider {...settings}>
          {playground.map((item, index) => {
            return (
              <div>
                <img
                  className='h-[343px] w-full object-cover'
                  src={item.img}
                  alt='playground'
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Playground;
