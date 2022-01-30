import React from 'react';
import { playground } from '../data';


import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Playground() {
  return (
    <div className='pt-[145px] pb-[32px] xl:pt-[180px]'>
      <h1 className='sub-heading pb-[32px]'>Playground</h1>

      {/* Desktop view */}
      <div>
        <div className='hidden  grid-cols-3 gap-[24px] xl:grid'>
          {playground.map((item, index) => {
            return (
              <img
                key={index}
                className='h-[333px] w-full rounded object-cover'
                src={item.img}
                alt='playground'
              />
            );
          })}
        </div>
      </div>

      {/* Mobile view */}
      <div className='xl:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={6}
        >
          <Slider>
            {playground.map((item, index) => {
              return (
                <Slide index={index}>
                  <img
                    className='h-[343px] w-full object-cover'
                    src={item.img}
                    alt='playground'
                  />
                </Slide>
              );
            })}
          </Slider>

          <div className='grid grid-cols-2 gap-[16px]'>
            <ButtonBack>
              <button className='button border-myRed flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]'>
                <p className='text-myRed'> Previous</p>
              </button>
            </ButtonBack>
            <ButtonNext>
              <button className='button border-myRed flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]'>
                <p className='text-myRed'>Next</p>
              </button>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Playground;
