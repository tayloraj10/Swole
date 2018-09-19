import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Header from './Header';
import Spreadsheet from './Spreadsheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='Spreadsheet'>
          <Spreadsheet />
        </div>
      </div>
    );
  }
}

export default App;
