import React, {useState} from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../../actions';

const AddSmurfForm = props => {
  const [state, setState] = useState({
    id: Date.now(),
    name: '',
    age: '',
    height: ''
  });

  const onChangeHandler = e => {
    setState({...state, [e.target.name]: e.target.value});
    console.log({[e.target.name]: e.target.value});
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    props.addSmurf(state);
    console.log('I have been submitted');

    setState({
      id: Date.now(),
      name: '',
      age: '',
      height: ''
    });
  };

  return (
    <div>
      <h3>THis is the add form </h3>
      <div className='smurf-form-container'>
        <form onSubmit={onSubmitHandler}>
          <div className='inputs'>
            <label>Name: </label>
            <input type='text' name='name' value={state.name} onChange={onChangeHandler} />
          </div>

          <div className='inputs'>
            <label>Age: </label>
            <input type='text' name='age' value={state.age} onChange={onChangeHandler} />
          </div>

          <div className='inputs'>
            <label>Height: </label>
            <input type='text' name='height' value={state.height} onChange={onChangeHandler} />
          </div>
          <button>Add me</button>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  {addSmurf}
)(AddSmurfForm);
