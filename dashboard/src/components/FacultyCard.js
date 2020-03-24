import React from 'react';

const Card = ({ name, position, images }) => {
  return (
    <div className='tc grow bg-white w-40 br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={images} />
      <div>
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Card;