import React, { Component } from 'react';
import './App.css';
import router from './router'



import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div className="App">
           
           {router}
        </div>
        </div>
    );
  }
}

export default App;
