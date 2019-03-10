import React from 'react';
import { LabelWithCheck } from '../Utils.js';

import '../App.css';
//import './RunOptions.css';

function RunOptions(props){

    return(
        <div className="wrap-collabsible">
            <input id="collapsible-runoptions" className="toggle" type="checkbox" />
            <label htmlFor="collapsible-runoptions" className="lbl-toggle">Nuclear data options</label>
            <div className="collapsible-content">
                <div className="content-inner">
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="spek" label="Approximate gamma spectrum?" handler={props.handleOptionChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {RunOptions};