import React from 'react';
import { projectCards } from '../data';

function Project() {
  //   const [highlight, setHighlight] = useState(false);
  //   const highlighter = (arr) => {
  //     let wordArray = arr.split(' ');

  //     for (var i = 0; i < wordArray.length; i++) {

  //       if (wordArray[i] === '*') {
  //         setHighlight(!highlight);
  //       }

  //       let newWordArray = [];
  //       newWordArray.push(
  //         <span className={highlight && 'text-myRed'}>{wordArray[i]}</span>
  //       );

  //       return <p>{newWordArray.map(item => {
  //           return <span>{item}</span>
  //       })}</p>;
  //     }
  //   };

  return (
    <div className='pt-[168.5px]'>
      {projectCards.map((item, index) => {
        return (
          <div
            key={index}
            className={`pb-[112px] xl:flex  ${
              item.type === 'phone' ? 'xl:gap-[88px]' : 'xl:gap-[20px]'
            }`}
          >
            <img
              className={`object-cover ${
                item.id % 2 === 0 ? 'order-last' : 'order-first'
              }`}
              src={item.img}
              alt='project_img'
            />
            <div className='justify-center xl:flex xl:flex-col'>
              <h1 className='sub-heading pt-[32px] xl:pt-[0px]'>
                {item.heading}
              </h1>
              <p className='para pt-[16px]'>{item.description}</p>
              <div className='para pt-[28px] xl:pt-[32px]'>
                <ul className='list-disc pl-[24px]'>
                  {item.points.map((point, index) => {
                    return <li key={index}>{point.point}</li>;
                  })}
                </ul>
              </div>
              <div className='button border-myRed mt-[28px] flex cursor-pointer items-center justify-center rounded-[4px] border-[1.5px] py-[16px] xl:mt-[32px] xl:max-w-[151px]'>
                <p>View Project</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
