import React, { useEffect } from 'react';
import { projectCards } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
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
    <div className=''>
      {projectCards.map((item, index) => {
        return (
          <div
            data-aos='fade-up'
            key={index}
            className={`pb-[112px] xl:flex  ${
              item.type === 'phone' ? 'xl:gap-[88px]' : 'xl:gap-[20px]'
            }`}
          >
            <img
              className={`rounded object-cover ${
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
              <div className='flex items-start justify-start gap-[16px] '>
                {item.button.map((button, index) => {
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
        );
      })}
    </div>
  );
}

export default Project;
