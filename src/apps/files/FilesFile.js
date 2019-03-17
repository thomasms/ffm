import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { DropdownInput } from '../Utils.js';

import '../App.css';

class FilesFile extends Component {

  constructor( props ) {
    super( props );

    this.handleDirChange = this.handleDirChange.bind(this);
    this.handleDownloadFile = this.handleDownloadFile.bind(this);

    this.state = {
      base_dir: "",
    }
  }

  handleDirChange(e){
    var base_dir = e.target.value;
    this.setState({ base_dir: base_dir });
  }

  handleDownloadFile(){
    const rawtext = "ToDo";
    const blob = new Blob([rawtext[0]], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "files");
  }

  render() {

    return (
      <div>
        <div className="App-left">
            <div className="App-content">
                <div>
                Nuclear data directory: <input className="App-name-input" type="text" name="Base directory" onChange={this.handleDirChange}/>
                </div>
            </div>
        </div>

        <div className="App-right">
            <textarea className="App-fileviewer" value={""} rows={""} readOnly/>
            <button className="App-button" onClick={this.handleDownloadFile}>Download files file</button>
        </div>
        
      </div>
    );
  }
}

export default FilesFile;
