import React, { Component } from 'react';
import { saveAs } from 'file-saver';

import { getRawText } from './KeywordCreator.js'
import { ALL_GROUPS, USE_COLLAPX_STRING } from '../Groups.js';
import { DropdownInput } from '../Utils.js';
import { Table } from './periodictable/Table.js';

import { FileOptions } from './options/FileOptions.js';
import { OutputOptions } from './options/OutputOptions.js';
import { NuclearDataOptions } from './options/NuclearDataOptions.js';
import { RunOptions } from './options/RunOptions.js';

import '../App.css';

class InputFile extends Component {

  constructor( props ) {
    super( props );

    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDownloadFile = this.handleDownloadFile.bind(this);
    this.handleElements = this.handleElements.bind(this);
    this.handleFuel = this.handleFuel.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      name: "",
      group: null,
      options: {
        clobber: false,
        usejson: false,
        spek: false,
        eaf: false,
        half: false,
        clear: false,
        atwo: false,
        showElements: false,
      },
      selectedElements: [],
    }
  }

  handleNameChange(e){
    var name = e.target.value;
    this.setState({ name: name });
  }

  handleGroupChange(e){
    var group = e.target.value;
    var groupValue = null;

    if(group === USE_COLLAPX_STRING){
      groupValue = 0
    }
    else if(!isNaN(group)){
      groupValue = parseInt(group, 10);
    }
    else{
      groupValue = null;
    }

    this.setState({ group: groupValue });
  }

  handleSelectedElements(elements){
      this.setState({ selectedElements: elements });
  }

  handleOptionChange = (e) => {
    const { name } = e.target;
    const option = e.target.checked;
    var options = {...this.state.options};
    options[name] = option;
    this.setState({
      options: options,
    });
  }

  handleElements(){
    this.setState({
      showElements: !this.state.showElements
    });
  }

  handleFuel(){
    //todo: implement
  }

  handleDownloadFile(){
    const rawtext = getRawText(this.state);
    const blob = new Blob([rawtext[0]], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "input.i");
  }

  render() {
    const data = getRawText(this.state);

    return (
      <div>

        <div className={this.state.showElements ? 'hidden' : ''}>
          <div className="App-left">
            <div className="App-content">
              <div>
                Run name: <input className="App-name-input" type="text" name="Name" onChange={this.handleNameChange}/>
              </div>

              <br/>
              <div>
                <span>Group structure: </span><DropdownInput classname="select" data={ALL_GROUPS} handler={this.handleGroupChange}/>
              </div>
              <br/>

              <FileOptions handleOptionChange={this.handleOptionChange}/>
              <NuclearDataOptions handleOptionChange={this.handleOptionChange}/>
              <OutputOptions handleOptionChange={this.handleOptionChange}/>
              <RunOptions handleOptionChange={this.handleOptionChange}/>

            </div>

            <div className="App-mass">
              <h4>Mass</h4>
              <button className="App-button" onClick={this.handleElements}>Set elemental composition</button>
            </div>
            <div className="App-fuel">
              <h4>Fuel</h4>
              <button className="App-button" onClick={this.handleFuel}>Set fuel composition</button>
            </div>
          </div>

          <div className="App-right">
            <textarea className="App-fileviewer" value={data[0]} rows={data[1]} readOnly/>
            <button className="App-button" onClick={this.handleDownloadFile}>Download input file</button>
          </div>
        </div>
        
        <div className={this.state.showElements ? '': 'hidden'}>
          <div className="App-wrapper">
            <Table handleClose={this.handleElements} 
                   handleSelectedElements={(elements) => this.setState({ selectedElements: elements })} 
                   selectedElements={this.state.selectedElements}/>
          </div>
        </div>
      </div>
    );
  }
}

export default InputFile;