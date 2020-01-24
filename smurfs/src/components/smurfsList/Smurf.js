import React from 'react';

import '../../styles/Smurf.css';

const Smurf = ({smurf}) => {
  return (
    <div className='smurf-container'>
      <div className='smurf'>
        <h4>Name: {smurf.name}</h4>
        <h4>Age: {smurf.age}</h4>
        <h4>Height: {smurf.height}</h4>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Smurf;
