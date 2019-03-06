import React, { Component } from 'react';
import { DropdownInput, LabelWithCheck } from './Utils.js';
import './App.css';

const USE_COLLAPX_STRING = "Use COLLAPX";
const GROUPS = ["-", USE_COLLAPX_STRING, 66, 69, 100, 142, 162, 172, 175, 616, 709, 1102];

class App extends Component {

  constructor( props ) {
    super( props );

    this.handleGroupChange = this.handleGroupChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClobber = this.handleClobber.bind(this);
    this.handleJSON = this.handleJSON.bind(this);

    this.state = {
      name: "",
      group: null,
      clobber: false,
      usejson: false,
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

  handleClobber(e){
    var option = e.target.checked;
    this.setState({ clobber: option });
  }

  handleJSON(e){
    var option = e.target.checked;
    this.setState({ usejson: option });
  }

  getControlText(){
    var text = [];
    
    if(this.state.clobber){
      text.push("CLOBBER");
    }

    if(this.state.usejson){
      text.push("JSON");
    }

    if(this.state.group != null){
      var line = "GETXS 1 " + this.state.group;
      if(this.state.group === 0){
        line = "GETXS " + this.state.group;
      }
      text.push(line);
    }

    text.push("FISPACT");

    return text;
  }

  getInitialText(){
    var text = [];
    text.push("* " + this.state.name);
    
    return text;
  }

  getInventoryText(){
    var text = [];
    
    text.push("END");
    text.push("* end");

    return text;
  }

  render() {
    
    const controltext = this.getControlText();
    const initialkeys = this.getInitialText();
    const inventorykeys =  this.getInventoryText();

    const rawtext = controltext.join("\n") + "\n" +
                    initialkeys.join("\n") + "\n" +
                    inventorykeys.join("\n");
                    
    const rows = controltext.length + initialkeys.length + inventorykeys.length + 1;

    //console.log(rawtext);

    return (
      <div className="App">
        <h3>FISPACT-II File Maker</h3>
        <div className="App-left">
          <div className="App-content">
            <div>
              Run name: <input className="App-name-input" type="text" name="Name" onChange={this.handleNameChange}/>
            </div>

            <br/>
            <div>
              <span>GROUP: </span><DropdownInput classname="select" data={GROUPS} handler={this.handleGroupChange}/>
            </div>
            <br/>

            <div className="wrap-collabsible">
              <input id="collapsible" className="toggle" type="checkbox" />
              <label htmlFor="collapsible" className="lbl-toggle">File options</label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Enable JSON output?" handler={this.handleJSON}/>
                  </div>
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Overwrite files?" handler={this.handleClobber}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-collabsible">
              <input id="collapsible2" className="toggle" type="checkbox" />
              <label htmlFor="collapsible2" className="lbl-toggle">Nuclear data options</label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="EAF data libraries?"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-collabsible">
              <input id="collapsible3" className="toggle" type="checkbox" />
              <label htmlFor="collapsible3" className="lbl-toggle">Output options</label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Output halflives?"/>
                  </div>
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Output clearance data?"/>
                  </div>
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Output legal limits data?"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrap-collabsible">
              <input id="collapsible4" className="toggle" type="checkbox" />
              <label htmlFor="collapsible4" className="lbl-toggle">Run options</label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <div>
                    <LabelWithCheck classname="App-checkbox" name="Approximate gamma spectrum?"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="App-right">
          <textarea className="App-fileviewer" rows={rows} value={rawtext} readOnly/>
        </div>

      </div>
    );
  }
}

export default App;
