import React from 'react';
import { LabelWithCheck } from '../Utils.js';

import '../App.css';
//import './OutputOptions.css';

function OutputOptions(props){

    return(
        <div className="wrap-collabsible">
            <input id="collapsible-outputoptions" className="toggle" type="checkbox" />
            <label htmlFor="collapsible-outputoptions" className="lbl-toggle">Output options</label>
            <div className="collapsible-content">
                <div className="content-inner">
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="half" label="Output halflives?" handler={props.handleOptionChange}/>
                    </div>
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="clear"label="Output clearance data?" handler={props.handleOptionChange}/>
                    </div>
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="atwo" label="Output legal limits data?" handler={props.handleOptionChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {OutputOptions};