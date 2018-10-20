import React, { Component } from 'react';
import './App.css';
import router from './router'

import {HashRouter} from 'react-router-dom';

import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
           <div><Header/></div>
           {router}
        </div>
      </HashRouter>
    );
  }
}

export default App;
