import React, { Component } from 'react';
import {Navigation} from './components';
import GetUser from './context/GetUser'
import {mainContainer} from './sharedStyles/styles.css'

class App extends Component {
  render() {
    return (
      <div className={mainContainer}>
        <GetUser>
          <Navigation/>
          {this.props.children}
        </GetUser>
      </div>
    );
  }
}

export default App;
