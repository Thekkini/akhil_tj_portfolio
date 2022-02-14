import React, { useState } from 'react';
import { aboutData, myPictures } from '../data';
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
  const [imgOne, setImgOne] = useState(0);
  const [imgTwo, setImgTwo] = useState(1);
  const [imgThree, setImgThree] = useState(2);
  const [imgFour, setImgFour] = useState(3);
  const [num, setNum] = useState(0);
  return (
    <div className='gap-[20px] px-[16px] pb-[108px] xl:grid xl:grid-cols-2 xl:px-[160px]'>
      <h1 className='sub-heading pb-[108px]  lg:pb-0 '>
        {aboutData.myPictureHeading}
      </h1>
      {/* Desktop View */}
      <div className='hidden xl:grid'>
        <div>
          <img src={myPictures[imgOne].img} alt='' />
        </div>
        <div className='flex'>
          <div>
            {' '}
            <img src={myPictures[imgTwo].img} alt='' />
          </div>
          <div>
            {' '}
            <img src={myPictures[imgThree].img} alt='' />
          </div>
          <div>
            {' '}
            <img src={myPictures[imgFour].img} alt='' />
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
                    className='h-[343px] w-full object-cover'
                    src={item.original}
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
                    num === 3
                      ? 'border-myRedLight'
                      : 'border-myRed group-hover:bg-myRed'
                  } flex w-full cursor-pointer  items-center justify-center rounded-[4px] border-[1.5px] py-[16px] px-[24px]`}
                >
                  <p
                    className={`  ${
                      num === 3
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

export default MyPictures;
