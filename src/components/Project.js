import React, { useEffect } from 'react';
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
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div>
      <div
        data-aos='fade-up'
        className={`grid-cols-2 pb-[112px] xl:grid  ${
          type === 'phone' ? 'xl:gap-[88px]' : 'xl:gap-[20px]'
        }`}
      >
        <img
          className={`rounded  object-cover ${
            id % 2 === 0 ? 'order-last' : 'order-first'
          }`}
          src={img}
          alt='project_img'
        />
        <div className='justify-center xl:flex xl:flex-col'>
          <h1 className='sub-heading pt-[32px] xl:pt-[0px]'>{heading}</h1>
          <h4 className='project-subheading pt-[16px]'>{subheading}</h4>
          <p className='para pt-[16px]'>{description}</p>
          <div className='para pt-[28px] xl:pt-[32px]'>
            <ul className='list-disc pl-[24px]'>
              {points.map((point, index) => {
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
                >
                  <button className='button mt-[28px] flex w-full cursor-pointer items-center justify-center  rounded-[4px] border-[1.5px] border-myRed py-[16px] px-[24px] group-hover:bg-myRed xl:mt-[32px] xl:w-fit '>
                    <p className='text-myRed group-hover:text-myLight'>
                      {button.name}
                    </p>
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
