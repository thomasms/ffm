import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

import { DropdownInput, LabelWithCheck } from './Utils.js';

import './App.css';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="App-title">
          FISPACT-II File Maker
        </div>
        
        <Menu>
          <Link id="input file" className="menu-item" to="/input">Input File</Link>
          <Link id="files file" className="menu-item" to="/files">Files File</Link>
          <Link id="fluxes file" className="menu-item" to="/fluxes">Fluxes File</Link>
          <div className="bm-item-entry">
            <div className="bm-item-subentry">
                <LabelWithCheck 
                    classname="App-checkbox" 
                    name="eaf" 
                    label="EAF data libraries?" 
                    handler={this.props.handleEAFChange}
                    value={this.props.eaf}/>
            </div>
            <div className="bm-item-subentry">
              Particle: <DropdownInput 
                          classname="select" 
                          data={this.props.availableParticles} 
                          handler={this.props.handleParticleChange}
                          selected={this.props.particle}/>
            </div>
            <div className="bm-item-subentry">
              Group: <DropdownInput 
                        classname="select" 
                        data={this.props.availableGroups} 
                        handler={this.props.handleGroupChange}
                        selected={this.props.group}/>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

export default Header;
