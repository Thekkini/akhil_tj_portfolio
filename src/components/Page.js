import React from 'react';

function Page({ currentPage, maxPage, bgCol, textCol }) {
  return (
    <div>
      <div
        className={`h-[36px] w-[36px] ${bgCol} flex items-center justify-center rounded-full`}
      >
        <p className={`${textCol} font-semibold text-[14px]`}>
          {currentPage}/{maxPage}
        </p>
      </div>
    </div>
  );
}

export default Page;
