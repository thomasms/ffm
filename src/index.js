import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter } from 'react-router-dom';

import { PARTICLES } from './apps/Particle';
import { ALL_GROUPS, USE_COLLAPX_STRING } from './apps/Groups.js';

import InputApp from './apps/InputApp';
import FilesApp from './apps/FilesApp';
import FluxesApp from './apps/FluxesApp';

class Main extends Component {

    constructor( props ) {
      super( props );

      this.handleGroupChange = this.handleGroupChange.bind(this);
      this.handleParticleChange = this.handleParticleChange.bind(this);
      this.handleEAFChange = this.handleEAFChange.bind(this);

      this.state = {
        group: null,
        availableGroups: ALL_GROUPS,
        particle: PARTICLES[0],
        availableParticles: PARTICLES,
        options: {
          eaf: false,
        },
      }
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
  
    handleParticleChange(e){
      var particle = e.target.value;
      this.setState({ particle: particle });
    }
  
    handleEAFChange(e){
      const option = e.target.checked;
      var availableGroups = {...this.state.availableGroups};
      var availableParticles = {...this.state.availableParticles};
      var options = {...this.state.options};
      options["eaf"] = option;
  
      availableParticles = PARTICLES;
      availableGroups = ["-", USE_COLLAPX_STRING, 709];
      if(option){
          availableGroups = ["-", USE_COLLAPX_STRING, 66, 69, 100, 172, 175, 211, 315];
          availableParticles = ["neutron"];
      }
      var default_group = null;
  
      this.setState({
        group: default_group,
        availableGroups: availableGroups,
        availableParticles: availableParticles,
        options: options,
        particle: PARTICLES[0],
      });
    }

    createInputApp(){
        return (
            <InputApp 
                handleEAFChange={this.handleEAFChange}
                handleParticleChange={this.handleParticleChange} 
                handleGroupChange={this.handleGroupChange}
                availableGroups={this.state.availableGroups} 
                availableParticles={this.state.availableParticles} 
                eaf={this.state.options.eaf} 
                group={this.state.group} 
                particle={this.state.particle} />
        );
    }

    createFilesApp(){
        return (
            <FilesApp 
                handleEAFChange={this.handleEAFChange}
                handleParticleChange={this.handleParticleChange} 
                handleGroupChange={this.handleGroupChange}
                availableGroups={this.state.availableGroups} 
                availableParticles={this.state.availableParticles} 
                eaf={this.state.options.eaf} 
                group={this.state.group} 
                particle={this.state.particle} />
        );
    }

    render() {
        return (
        <div>
            <BrowserRouter forceRefresh={false}>
            <div>
                <Route exact path='/' render={() => this.createInputApp()} />
                <Route path='/input' render={() => this.createInputApp()} />
                <Route path='/files' render={() => this.createFilesApp()} />
                <Route path='/fluxes' component={FluxesApp} />
            </div>
            </BrowserRouter>
        </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
