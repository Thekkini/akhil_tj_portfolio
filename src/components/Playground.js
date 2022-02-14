import React, { useState, useEffect } from 'react';
import { playground } from '../data';

import Page from './Page';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Playground() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className='pt-[145px] pb-[32px] xl:pt-[180px]'>
      <h1 className='sub-heading pb-[32px]'>Playground</h1>

      {/* Desktop view */}
      <div>
        <div
          data-aos='fade-up'
          className='hidden  grid-cols-3 gap-[24px] xl:grid'
        >
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
      <div data-aos='fade-up' className='relative xl:hidden'>
        <div className='absolute top-[8px] left-[8px] z-50'>
          <Page
            currentPage={num + 1}
            maxPage={playground.length}
            bgCol={'bg-myLight'}
            textCol={'text-black'}
          />
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={playground.length}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
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

          <div className='mt-[32px] grid grid-cols-2 gap-[16px]'>
            <ButtonBack onClick={() => setNum(num - 1)}>
              <div className='group'>
                <button
                  className={`button ${
                    num === 0
                      ? 'border-myRedLight'
                      : 'border-myRed group-hover:bg-myRed'
                  } flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 0
                        ? 'text-myRedLight'
                        : 'text-myRed group-hover:text-myLight'
                    }`}
                  >
                    Previous
                  </p>
                </button>
              </div>
            </ButtonBack>

            <ButtonNext onClick={() => setNum(num + 1)}>
              <div className='group'>
                <button
                  className={`1button ${
                    num === 5
                      ? 'border-myRedLight'
                      : 'border-myRed group-hover:bg-myRed'
                  } flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 5
                        ? 'text-myRedLight'
                        : 'text-myRed group-hover:text-myLight'
                    }`}
                  >
                    Next
                  </p>
                </button>
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Playground;
