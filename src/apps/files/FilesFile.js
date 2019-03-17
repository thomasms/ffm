import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { LabelWithCheck } from '../Utils.js';
import { DropdownInput } from '../Utils.js';
import { getRawText } from './PathCreator.js';
import { GROUPS } from '../Groups.js';

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

    this.state = {
      base_dir: "",
      group: 709,
      availableGroups: GROUPS,
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

  handleEAFChange = (e) => {
    const option = e.target.checked;
    var availableGroups = {...this.state.availableGroups};
    var options = {...this.state.options};
    options["eaf"] = option;

    var default_group = GROUPS[0];
    availableGroups = GROUPS;
    if(option){
        availableGroups = [66, 69, 100, 172, 175, 211, 315]
    }
    this.setState({
      group: default_group,
      availableGroups: availableGroups,
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
                Nuclear data directory: <input className="App-name-input" type="text" name="Base directory" onChange={this.handleDirChange}/>
                </div>
                <div  className="Files-note">
                *Note that paths are set for the distributed directories of FISPACT-II
                </div>
                <div className="Files-option">
                    <LabelWithCheck classname="App-checkbox" name="eaf" label="EAF data libraries?" handler={this.handleEAFChange}/>
                </div>
                <div>
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
