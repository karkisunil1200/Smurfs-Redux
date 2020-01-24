import React from 'react';

const Smurf = ({smurf}) => {
  return (
    <div className='smurf-container'>
      <div className='smurf'>
        <h4>Name: {smurf.name}</h4>
        <h4>Age: {smurf.age}</h4>
        <h4>Height: {smurf.height}</h4>
      </div>
    </div>
  );
};

export default Smurf;
