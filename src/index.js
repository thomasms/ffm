import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter } from 'react-router-dom';

import InputApp from './apps/InputApp';
import FilesApp from './apps/FilesApp';
import FluxesApp from './apps/FluxesApp';

class Main extends React.Component {
    render() {
        return (
        <div>
            <BrowserRouter>
            <div>
                <Route exact path='/' component={InputApp} />
                <Route path='/input' component={InputApp} />
                <Route path='/files' component={FilesApp} />
                <Route path='/fluxes' component={FluxesApp} />
            </div>
            </BrowserRouter>

            <div className="footer3">
                <p align="center">Thomas Stainer &copy; 2018</p>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
