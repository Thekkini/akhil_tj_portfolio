import React from 'react';

function Page({ currentPage, maxPage, bgCol, textCol }) {
  return (
    <div
      className={` ${bgCol} flex items-center justify-center rounded-full px-3 py-2`}
    >
      <p className={`${textCol} text-[14px] font-semibold`}>
        {currentPage}/{maxPage}
      </p>
    </div>
  );
}

export default Page;
