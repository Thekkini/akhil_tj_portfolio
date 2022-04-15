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
              <button className='button mt-[28px] flex w-full transition cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[2px] border-myRed px-6 py-[16px] group-hover:bg-myRed xl:mt-[32px] xl:w-fit xl:px-6 '>
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
        <div className='absolute top-[8px] left-[8px] z-50'>
          <Page
            currentPage={num + 1}
            maxPage={aboutData.myPictures.length}
            bgCol={'bg-myLight'}
            textCol={'text-black'}
          />
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={aboutData.myPictures.length}
          lockOnWindowScroll={true}
          touchEnabled={false}
          isIntrinsicHeight={true}
        >
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

          <div className='mt-[32px] grid grid-cols-2 gap-[16px]'>
            <ButtonBack onClick={() => setNum(num - 1)}>
              <div className='group'>
                <button
                  className={`button ${
                    num === 0
                      ? 'border-myRedLight cursor-not-allowed'
                      : 'border-myRed group-hover:bg-myRed'
                  } flex w-full  transition  items-center justify-center rounded-[4px] border-2 py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 0
                        ? 'text-myRedLight cursor-not-allowed'
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
                  className={`button ${
                    num === 3
                      ? 'border-myRedLight cursor-not-allowed'
                      : 'border-myRed group-hover:bg-myRed'
                  } flex w-full   items-center transition justify-center rounded-[4px] border-2 py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 3
                        ? 'text-myRedLight cursor-not-allowed'
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

export default MyPictures;
