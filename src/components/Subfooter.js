import React from 'react';
import { subFooter } from '../data';

function Subfooter() {
  console.log(subFooter);
  return (
    <div className='inline-block px-4 xl:hidden'>
      <p className='main-para'>{subFooter[0].content}</p>
      <div className='flex items-center gap-2'>
        <p className='main-para text-myRed'>{subFooter[0].email}</p>
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
          />
        </svg>
      </div>
      <div className="flex">
        <a className='group  xl:w-fit' href={subFooter[0].link}>
          <button className='button mt-[28px] flex w-full cursor-pointer items-center justify-center gap-2 rounded-[4px] border-[1.5px] border-myRed py-[16px] group-hover:bg-myRed xl:mt-[32px] xl:w-fit xl:px-6 '>
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
  );
}

export default Subfooter;
