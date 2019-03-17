import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'

import './App.css';

class Header extends Component {

  constructor( props ) {
    super( props );

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="App-title">
          FISPACT-II File Maker
        </div>
        
        <Menu>
          <a id="input file" className="menu-item" href="/input">Input File</a>
          <a id="files file" className="menu-item" href="/files">Files File</a>
          <a id="fluxes file" className="menu-item" href="/fluxes">Fluxes File</a>
        </Menu>
      </div>
    );
  }
}

export default Header;
