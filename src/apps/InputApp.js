import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import InputFile from './input/InputFile.js';

class InputApp extends Component {

  constructor( props ) {
    super( props );

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <InputFile />
      </div>
    );
  }
}

export default InputApp;
