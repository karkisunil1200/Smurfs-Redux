import React, {Component} from 'react';
import './App.css';
import SmurfList from './smurfsList/SmurfList';
import AddSmurfForm from './addSmurf/AddSmurfForm';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
