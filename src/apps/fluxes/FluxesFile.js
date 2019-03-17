import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { DropdownInput } from '../Utils.js';

import '../App.css';

class FluxesFile extends Component {

  constructor( props ) {
    super( props );

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDownloadFile = this.handleDownloadFile.bind(this);

    this.state = {
      name: "",
    }
  }

  handleNameChange(e){
    var name = e.target.value;
    this.setState({ name: name });
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
                Flux name: <input className="App-name-input" type="text" name="Name" onChange={this.handleNameChange}/>
                </div>
            </div>
        </div>

        <div className="App-right">
            <textarea className="App-fileviewer" value={""} rows={""} readOnly/>
            <button className="App-button" onClick={this.handleDownloadFile}>Download fluxes file</button>
        </div>
        
      </div>
    );
  }
}

export default FluxesFile;
