import React, { Component } from 'react';
import {Navigation} from './components';

import {mainContainer} from './sharedStyles/styles.css'

class App extends Component {
  render() {
    return (
      <div className={mainContainer}>
          <Navigation/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
