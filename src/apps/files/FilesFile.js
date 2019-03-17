import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { LabelWithCheck } from '../Utils.js';
import { DropdownInput } from '../Utils.js';
import { getRawText } from './PathCreator.js';
import { PARTICLES } from '../Particle';

import './FilesFile.css';
import '../App.css';

class FilesFile extends Component {

  constructor( props ) {
    super( props );

    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleDownloadFile = this.handleDownloadFile.bind(this);
    this.handleEAFChange = this.handleEAFChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleParticleChange = this.handleParticleChange.bind(this);

    this.state = {
      base_dir: "",
      group: 709,
      availableGroups: [709],
      particle: PARTICLES[0],
      availableParticles: PARTICLES,
      options: {
        eaf: false,
      },
      files: {
        fluxes: "",
      }
    }
  }

  handleDirChange(e){
    var base_dir = e.target.value;
    this.setState({ base_dir: base_dir });
  }

  handleDownloadFile(){
    const rawtext = getRawText(this.state);
    const blob = new Blob([rawtext[0]], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "fispact.files");
  }

  handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.value;
    var files = {...this.state.files};
    files[name] = file;
    this.setState({
      files: files,
    });
  }

  handleGroupChange(e){
    var group = parseInt(e.target.value, 10);
    this.setState({ group: group });
  }

  handleParticleChange(e){
    var particle = e.target.value;
    this.setState({ particle: particle });
  }

  handleEAFChange = (e) => {
    const option = e.target.checked;
    var availableGroups = {...this.state.availableGroups};
    var availableParticles = {...this.state.availableParticles};
    var options = {...this.state.options};
    options["eaf"] = option;

    availableParticles = PARTICLES;
    availableGroups = [709];
    if(option){
        availableGroups = [66, 69, 100, 172, 175, 211, 315];
        availableParticles = ["neutron"];
    }
    var default_group = availableGroups[0];

    this.setState({
      group: default_group,
      availableGroups: availableGroups,
      availableParticles: availableParticles,
      options: options,
    });
  }

  render() {
    const data = getRawText(this.state);

    return (
      <div>
        <div className="App-left">
            <div className="App-content">
                <div>
                <p>Nuclear data directory:</p>
                <input className="Files-path-input" type="text" name="Base directory" onChange={this.handleDirChange}/>
                </div>
                <div  className="Files-note">
                *Note that paths are set for the distributed directories of FISPACT-II
                </div>
                <div className="Files-option">
                    <LabelWithCheck classname="App-checkbox" name="eaf" label="EAF data libraries?" handler={this.handleEAFChange}/>
                </div>
                <div className="Files-option">
                    <span>Incident particle: </span><DropdownInput classname="select" data={this.state.availableParticles} handler={this.handleParticleChange}/>
                </div>
                <div className="Files-option">
                    <span>Group structure: </span><DropdownInput classname="select" data={this.state.availableGroups} handler={this.handleGroupChange}/>
                </div>
                <br />
                <div>
                Fluxes filename: <input className="App-name-input" type="text" name="fluxes" onChange={this.handleFileChange}/>
                </div>
            </div>
        </div>

        <div className="App-right">
            <textarea className="Files-fileviewer" value={data[0]} rows={data[1]} readOnly/>
            <button className="App-button" onClick={this.handleDownloadFile}>Download files file</button>
        </div>
        
      </div>
    );
  }
}

export default FilesFile;
