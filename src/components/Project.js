import React, { useState } from 'react';
import { projectCards } from '../data';

function Project() {
  const [highlight, setHighlight] = useState(false);
  const highlighter = (arr) => {
    let wordArray = arr.split(' ');

    for (var i = 0; i < wordArray.length; i++) {

      if (wordArray[i] === '*') {
        setHighlight(!highlight);
      }

      let newWordArray = [];
      newWordArray.push(
        <span className={highlight && 'text-myRed'}>{wordArray[i]}</span>
      );

      
      return <p>{newWordArray.map(item => {
          return <span>{item}</span>
      })}</p>;
    }
  };

  return (
    <div>
      {projectCards.map((item, index) => {
        return highlighter(item.description);
      })}
    </div>
  );
}

export default Project;
