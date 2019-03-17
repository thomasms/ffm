import React from 'react';
import { LabelWithCheck } from '../../Utils.js';

import '../../App.css';
//import './NuclearDataOptions.css';

function NuclearDataOptions(props){

    return(
        <div className="wrap-collabsible">
            <input id="collapsible-ndoptions" className="toggle" type="checkbox" />
            <label htmlFor="collapsible-ndoptions" className="lbl-toggle">Nuclear data options</label>
            <div className="collapsible-content">
                <div className="content-inner">
                    <div>
                        <LabelWithCheck classname="App-checkbox" name="eaf" label="EAF data libraries?" handler={props.handleOptionChange}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {NuclearDataOptions};