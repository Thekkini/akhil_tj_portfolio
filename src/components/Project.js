import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MediaQuery from 'react-responsive';

function Project({
  type,
  id,
  img,
  img2,
  heading,
  subheading,
  description,
  points,
  button,
}) {
  const [btnLength] = useState(button.length);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <div
      data-aos='fade-up'
      className={`grid-cols-2 text-[#000249]  pb-[112px] xl:grid xl:pt-0  ${
        type === 'phone'
          ? 'mx-[16px] xl:mx-[160px] xl:gap-[88px]'
          : 'mx-[16px] xl:mx-0 xl:gap-[20px]'
      }`}
    >
      {type === 'laptop' ? (
        <div>
          <MediaQuery minWidth={1280}>
            <img
              className={`mx-auto w-full rounded object-cover ${
                id % 2 === 0
                  ? `order-last ${
                      type === 'laptop' ? 'xl:px-0 xl:pr-[108px]' : ''
                    }`
                  : `order-first ${
                      type === 'laptop' ? 'xl:px-0 xl:pl-[108px]' : ''
                    }`
              }`}
              src={img}
              alt='project_img'
            />
          </MediaQuery>
          <MediaQuery maxWidth={1280}>
            <img
              className={`mx-auto w-full rounded object-cover ${
                id % 2 === 0
                  ? `order-last ${
                      type === 'laptop' ? 'xl:px-0 xl:pr-[108px]' : ''
                    }`
                  : `order-first ${
                      type === 'laptop' ? 'xl:px-0 xl:pl-[108px]' : ''
                    }`
              }`}
              src={img2}
              alt='project_img'
            />
          </MediaQuery>
        </div>
      ) : (
        <img
          className={`mx-auto w-full rounded object-cover ${
            id % 2 === 0
              ? `order-last ${type === 'laptop' ? 'xl:px-0 xl:pr-[108px]' : ''}`
              : `order-first ${
                  type === 'laptop' ? 'xl:px-0 xl:pl-[108px]' : ''
                }`
          }`}
          src={img}
          alt='project_img'
        />
      )}

      <div
        className={`justify-center xl:flex xl:flex-col ${
          type === 'laptop'
            ? `${id % 2 === 0 ? 'xl:pl-[160px]' : 'xl:pr-[160px]'}`
            : ''
        }`}
      >
        <h1 className='sub-heading pt-[32px] xl:pt-[0px]'>{heading}</h1>
        <h4 className='project-subheading pt-[16px]'>{subheading}</h4>
        <p className='para pt-[16px] text-[#000249]'>{description}</p>
        <div className='para pt-[28px] xl:pt-[32px]'>
          <ul className='list-disc pl-[24px]'>
            {points?.map((point, index) => {
              return <li key={index}>{point.point}</li>;
            })}
          </ul>
        </div>
        {
          <div
            className={
              btnLength === 2
                ? 'grid grid-cols-2 gap-4 xl:flex xl:items-start xl:justify-start xl:gap-4'
                : 'w-fit'
            }
          >
            {button.map((btn, index) => {
              return (
                <div className='flex'>
                  <a
                    className='group w-full xl:w-fit'
                    href={btn.link}
                    key={index}
                  >
                    <button
                      className={`${
                        btnLength === 1 ? 'px-6' : ''
                      }  button mt-[28px] flex w-full  cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[2px] border-myRed py-[16px] group-hover:bg-myRed xl:mt-[32px] transition xl:w-fit xl:px-6 `}
                    >
                      <p className='text-myRed  group-hover:text-myLight'>
                        {btn.name}
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
              );
            })}
          </div>
        }
      </div>
    </div>
    // <div
    //   data-aos='fade-up'
    //   className={`mx-[16px]  grid-cols-2 pb-[112px] xl:mx-[160px]  xl:grid xl:gap-[88px] xl:pt-0`}
    // >
    //   {type === 'laptop' ? (
    //     <div>
    //       <MediaQuery minWidth={1280}>
    //         <img
    //           className={`mx-auto rounded object-cover ${
    //             id % 2 === 0 ? 'order-last' : 'order-first'
    //           }`}
    //           src={img}
    //           alt='project_img'
    //         />
    //       </MediaQuery>
    //       <MediaQuery maxWidth={1280}>
    //         <img
    //           className={`mx-auto w-full rounded object-cover ${
    //             id % 2 === 0 ? 'order-last' : 'order-first'
    //           }`}
    //           src={img2}
    //           alt='project_img'
    //         />
    //       </MediaQuery>
    //     </div>
    //   ) : (
    //     <img
    //       className={`mx-auto rounded object-cover ${
    //         id % 2 === 0 ? 'order-last' : 'order-first'
    //       }`}
    //       src={img}
    //       alt='project_img'
    //     />
    //   )}

    //   <div className={'justify-center xl:flex xl:flex-col'}>
    //     <h1 className='sub-heading pt-[32px] xl:pt-[0px]'>{heading}</h1>
    //     <h4 className='project-subheading pt-[16px]'>{subheading}</h4>
    //     <p className='para pt-[16px]'>{description}</p>
    //     <div className='para pt-[28px] xl:pt-[32px]'>
    //       <ul className='list-disc pl-[24px]'>
    //         {points?.map((point, index) => {
    //           return <li key={index}>{point.point}</li>;
    //         })}
    //       </ul>
    //     </div>
    //     {
    //       <div
    //         className={
    //           btnLength === 2
    //             ? 'grid grid-cols-2 gap-4 xl:flex xl:items-start xl:justify-start xl:gap-4'
    //             : 'w-fit'
    //         }
    //       >
    //         {button.map((btn, index) => {
    //           return (
    //             <div className='flex'>
    //               <a
    //                 className='group w-full xl:w-fit'
    //                 href={btn.link}
    //                 key={index}
    //               >
    //                 <button
    //                   className={`${
    //                     btnLength === 1 ? 'px-6' : ''
    //                   }  button mt-[28px] flex w-full  cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[1.5px] border-myRed py-[16px] group-hover:bg-myRed xl:mt-[32px] xl:w-fit xl:px-6 `}
    //                 >
    //                   <p className='text-myRed  group-hover:text-myLight'>
    //                     {btn.name}
    //                   </p>
    //                   <svg
    //                     xmlns='http://www.w3.org/2000/svg'
    //                     viewBox='0 0 24 24'
    //                     width='24'
    //                     height='24'
    //                   >
    //                     <path fill='none' d='M0 0h24v24H0z' />
    //                     <path
    //                       d='M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z'
    //                       fill='rgba(246,73,13,1)'
    //                       className='group-hover:fill-myLight'
    //                     />
    //                   </svg>
    //                 </button>
    //               </a>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     }
    //   </div>
    // </div>
  );
}

export default Project;
