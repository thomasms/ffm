import React, { Component } from 'react';

import './App.css';
import Header from './Header.js';
import FilesFile from './files/FilesFile.js';

class FilesApp extends Component {

  constructor( props ) {
    super( props );

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <FilesFile />
      </div>
    );
  }
}

export default FilesApp;
