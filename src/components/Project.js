import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Project({
  type,
  id,
  img,
  heading,
  subheading,
  description,
  points,
  button,
}) {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div
      data-aos='fade-up'
      className={`grid-cols-2 pb-[112px] xl:grid  ${
        type === 'phone'
          ? 'mx-[16px] xl:mx-[160px] xl:gap-[88px]'
          : 'xl:gap-[20px]'
      }`}
    >
      <img
        className={`mx-auto rounded object-cover ${
          id % 2 === 0
            ? `order-last ${
                type === 'laptop' ? 'px-2 xl:px-0 xl:pr-[108px]' : ''
              }`
            : `order-first ${
                type === 'laptop' ? 'px-2 xl:px-0 xl:pl-[108px]' : ''
              }`
        }`}
        src={img}
        alt='project_img'
      />
      <div
        className={`justify-center xl:flex xl:flex-col ${
          type === 'laptop'
            ? `px-4 xl:px-0 ${id % 2 === 0 ? 'xl:pl-[160px]' : 'xl:pr-[160px]'}`
            : ''
        }`}
      >
        <h1 className='sub-heading pt-[32px] xl:pt-[0px]'>{heading}</h1>
        <h4 className='project-subheading pt-[16px]'>{subheading}</h4>
        <p className='para pt-[16px]'>{description}</p>
        <div className='para pt-[28px] xl:pt-[32px]'>
          <ul className='list-disc pl-[24px]'>
            {points?.map((point, index) => {
              return <li key={index}>{point.point}</li>;
            })}
          </ul>
        </div>
        <div className='flex items-start justify-start gap-[16px] '>
          {button.map((button, index) => {
            return (
              <a
                className='group w-full xl:w-fit'
                href={button.link}
                key={index}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <button className='button border-myRed group-hover:bg-myRed mt-[28px] flex w-full cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[1.5px] py-[16px] xl:mt-[32px] xl:w-fit xl:px-6 '>
                  <p className='text-myRed group-hover:text-myLight'>
                    {button.name}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
