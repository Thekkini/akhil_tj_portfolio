import React, { useState } from 'react';
import { subFooter } from '../data';
import { aboutData } from '../data';
import Page from './Page';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function MyPictures() {
  const [num, setNum] = useState(0);

  return (
    <div className='gap-[20px]  pb-[108px] xl:grid xl:grid-cols-2 px-[16px] xl:px-[160px]'>
      <div>
        <h1 className='sub-heading pb-[108px]  xl:pb-0 '>
          {aboutData.myPictureHeading}
        </h1>
        <div className='hidden xl:block'>
          <div className='flex gap-2 items-center'>
            <p className='main-para text-myRed pt-1'>akhiltj.dev@gmail.com</p>
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
                className='group-hover:fill-myLight'
              />
            </svg>
          </div>
          <div className='flex'>
            <a className='group  xl:w-fit' href={subFooter[0].link}>
              <button className='button mt-[28px] flex w-full transition cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[1.75px] border-myRed px-6 py-[16px] group-hover:bg-myRed xl:mt-[32px] xl:w-fit xl:px-6 '>
                <p className='text-myRed group-hover:text-myLight'>
                  {subFooter[0].button}
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
                    className='group-hover:fill-myLight'
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div className='hidden space-y-3 xl:grid'>
        <div>
          <img
            src={aboutData.myPictures[0].img}
            className='aspect-square max-h-[547px] w-full'
            alt='myPictures'
          />
        </div>
        <div className='grid grid-cols-3 gap-3'>
          <div className='bg-slate-100'>
            <img
              className='aspect-square  w-full object-cover'
              src={aboutData.myPictures[1].img}
              alt='myPictures'
            />
          </div>
          <div className='bg-slate-100'>
            <img
              className='aspect-square  w-full object-cover'
              src={aboutData.myPictures[2].img}
              alt='myPictures'
            />
          </div>
          <div>
            <img
              className='aspect-square  w-full object-cover'
              src={aboutData.myPictures[3].img}
              alt='myPictures'
            />
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className='relative xl:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={aboutData.myPictures.length}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
        >
          <div className='flex items-center gap-7 pb-6'>
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
              maxPage={aboutData.myPictures.length}
              bgCol={'bg-myBlue'}
              textCol={'text-myLight'}
            />
            <ButtonNext onClick={() => setNum(num + 1)}>
              <div className={`group ${num === 3 ? 'cursor-not-allowed' : ''}`}>
                <div
                  className={`arrowButton ${
                    num === 3
                      ? 'border-[#000249]  cursor-not-allowed	 opacity-[0.27]'
                      : 'border-myRed '
                  } flex cursor-pointer items-center justify-center rounded-full border-[1.75px]  py-[6px] px-[6px]`}
                >
                  <p
                    className={`  ${
                      num === 3
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
                          num === 3
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
          <Slider>
            {aboutData.myPictures.map((item, index) => {
              return (
                <Slide index={index}>
                  <img
                    className='rounded aspect-square w-full object-cover'
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

export default MyPictures;
