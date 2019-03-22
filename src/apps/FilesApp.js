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
        <Header handleEAFChange={this.props.handleEAFChange} 
                handleParticleChange={this.props.handleParticleChange} 
                handleGroupChange={this.props.handleGroupChange}
                availableGroups={this.props.availableGroups} 
                availableParticles={this.props.availableParticles} 
                group={this.props.group} 
                particle={this.props.particle}
                eaf={this.props.eaf} 
        />
        <FilesFile group={this.props.group} 
                   particle={this.props.particle}
                   eaf={this.props.eaf} 
        />
      </div>
    );
  }
}

export default FilesApp;
