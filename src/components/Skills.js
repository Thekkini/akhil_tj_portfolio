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
            <h1 className='button pb-[24px]'>Skills</h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.skills.map((skill, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='rounded-[4px] bg-myRedVeryLight px-[9px] py-[5px]'
                    >
                      <p className='button text-myRed'>{skill}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className='button pb-[24px]'>Tools</h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.tools.map((tool, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='rounded-[4px] bg-myRedVeryLight px-[9px] py-[5px]'
                    >
                      <p className='button text-myRed'>{tool}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className='button pb-[24px]'>Technology</h1>
            <div className='flex flex-wrap gap-[8px]'>
              {aboutData.mySkills.technology.map((tech, index) => {
                return (
                  <div className='flex '>
                    <div
                      key={index}
                      className='rounded-[4px] bg-myRedVeryLight px-[9px] py-[5px]'
                    >
                      <p className='button text-myRed'>{tech}</p>
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
