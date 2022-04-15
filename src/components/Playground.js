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

  // const arrayOfThreeFetcherFunction = () => {
  //   const size = 3;
  //   for (let i = 0; i < playground.length; i += size)
  //     setPlaygroundArrayOfThree(playground.slice(i, i + size));
  // };
  // arrayOfThreeFetcherFunction();
  // console.log(playgroundArrayOfThree);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div
      data-aos='fade-up'
      className='px-[16px] text-[#000249] pt-[145px] pb-[32px] xl:px-[160px] xl:pt-[180px]'
    >
      <h1 className='sub-heading pb-[32px]'>Playground</h1>

      {/* Desktop view */}
      <div>
        {/* ======================================================================= */}

        {/* ======================================================================= */}
        <div className='hidden grid-cols-3 gap-[24px] xl:grid'>
          {playground.map((item, index) => {
            return (
              <img
                key={index}
                className='aspect-square  rounded object-cover'
                src={item.img}
                alt='playground'
              />
            );
          })}
        </div>
      </div>

      {/* Mobile view */}
      <div data-aos='fade-up' className='relative xl:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={playground.length}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
        >
          <div className='flex items-center gap-7 pb-6'>
            <ButtonBack onClick={() => setNum(num - 1)}>
              <div className='group'>
                <div
                  className={`arrowButton ${
                    num === 0 ? 'border-myRedLight cursor-not-allowed	' : 'border-myRed '
                  } `}
                >
                  <p
                    className={`  ${
                      num === 0 ? 'text-myRedLight cursor-not-allowed	' : 'text-myRed'
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
                            ? 'rgba(246,73,13,0.54)'
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
              maxPage={playground.length}
              bgCol={'bg-black'}
              textCol={'text-myLight'}
            />
            <ButtonNext onClick={() => setNum(num + 1)}>
              <div className='group'>
                <div
                  className={`arrowButton ${
                    num === 5 ? 'border-myRedLight cursor-not-allowed	' : 'border-myRed '
                  } flex cursor-pointer items-center justify-center rounded-full border-[1.5px]  py-[6px] px-[6px]`}
                >
                  <p
                    className={`  ${
                      num === 5 ? 'text-myRedLight cursor-not-allowed	' : 'text-myRed '
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
                          num === 5
                            ? 'rgba(246,73,13,0.54)'
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
          <Slider>
            {playground.map((item, index) => {
              return (
                <Slide index={index}>
                  <img
                    className='aspect-square min-h-[343px] w-full object-cover'
                    src={item.img}
                    alt='playground'
                  />
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Playground;
