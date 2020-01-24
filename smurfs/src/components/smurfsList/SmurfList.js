import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSmurfs} from '../../actions';

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <div>
      <h4>Smurf list reporting for duty</h4>
    </div>
  );
};

const mapStateToProps = ({smurfs}) => {
  console.log(smurfs);
  return {
    smurfList: smurfs
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs}
)(SmurfList);
