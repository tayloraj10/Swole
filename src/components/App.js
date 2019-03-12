import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from './Header';
import Spreadsheet from './Spreadsheet';
import ExercisesSheet from './ExercisesSheet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='Spreadsheet'>
          {/* <Spreadsheet /> */}
          <ExercisesSheet />
        </div>
      </div>
    );
  }
}

export default App;
