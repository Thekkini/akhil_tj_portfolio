import React, { useEffect } from 'react';
import { aboutData } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <div className='px-[16px]  pb-[108px] xl:px-[160px] xl:pb-[180px] xl:pt-[180px]'>
      <div className='grid-cols-2 gap-[20px] xl:grid'>
        <h1 className='sub-heading pb-[108px] xl:pb-0 '>
          {aboutData.skillHeading.heading}
        </h1>
        <div className='space-y-[32px] xl:space-y-[48px]'>
          <div>
            <h1 className='pb-[24px] text-[14px] font-semibold uppercase'>
              Skills
            </h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.skills.map((skill, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='bg-myRedVeryLight rounded-[4px] px-[9px] py-[5px]'
                    >
                      <p className='text-myRed text-[14px] font-semibold uppercase'>
                        {skill}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className='pb-[24px] text-[14px] font-semibold uppercase'>
              Tools
            </h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.tools.map((tool, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='bg-myRedVeryLight rounded-[4px] px-[9px] py-[5px]'
                    >
                      <p className='text-myRed text-[14px] font-semibold uppercase'>
                        {tool}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className='pb-[24px] text-[14px] font-semibold uppercase'>
              Technology
            </h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.technology.map((tech, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='bg-myRedVeryLight rounded-[4px] px-[9px] py-[5px]'
                    >
                      <p className='text-myRed text-[14px] font-semibold uppercase'>
                        {tech}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
