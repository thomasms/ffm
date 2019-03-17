import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import FluxesFile from './fluxes/FluxesFile.js';

class FluxesApp extends Component {

  constructor( props ) {
    super( props );

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <FluxesFile />
      </div>
    );
  }
}

export default FluxesApp;
