import React, { Component } from 'react';
import './App.css';
import router from './router'



import Header from './component/Header';

class App extends Component {
  render() {
    return (
      
        <div className="App">
           <div><Header/></div>
           {router}
        </div>
     
    );
  }
}

export default App;
