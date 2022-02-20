import React from 'react';
import Project from './Project';
import { projectCards } from '../data';

function Projects() {
  return (
    <div className='pt-[140px]  '>
      {projectCards.map((item, index) => {
        return (
          <Project
            key={index}
            type={item.type}
            id={item.id}
            img={item.img}
            heading={item.heading}
            subheading={item.subheading}
            description={item.description}
            points={item.points}
            button={item.button}
          />
        );
      })}
    </div>
  );
}

export default Projects;
