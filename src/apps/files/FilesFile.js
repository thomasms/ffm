import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { getRawText } from './PathCreator.js';

import './FilesFile.css';
import '../App.css';

class FilesFile extends Component {

  constructor( props ) {
    super( props );

    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleDownloadFile = this.handleDownloadFile.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);

    this.state = {
      base_dir: "",
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

  render() {
    var input = Object.assign({}, this.state);
    input['group'] = this.props.group;
    input['particle'] = this.props.particle;
    input['eaf'] = this.props.eaf;
    const data = getRawText(input);

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
