import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurfs} from '../../actions';
import Smurf from './Smurf';
import '../../styles/SmurfList.css';

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);

  return (
    <div className='smurf-list-container'>
      <h4>Smurf list reporting for duty</h4>
      <div className='smurf-list'>
        {props.smurfList.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({smurfs}) => {
  return {
    smurfList: smurfs
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs}
)(SmurfList);
