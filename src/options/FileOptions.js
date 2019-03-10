import React from 'react';
import { LabelWithCheck } from '../Utils.js';

import '../App.css';
//import './FileOptions.css';

function FileOptions(props){

    return(
        <div className="wrap-collabsible">
            <input id="collapsible-fileoptions" className="toggle" type="checkbox" />
            <label htmlFor="collapsible-fileoptions" className="lbl-toggle">File options</label>
            <div className="collapsible-content">
                <div className="content-inner">
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="usejson" label="Enable JSON output?" handler={props.handleOptionChange}/>
                    </div>
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="clobber"label="Overwrite files?" handler={props.handleOptionChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {FileOptions};