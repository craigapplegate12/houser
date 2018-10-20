import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Wizard extends Component {
  constructor(props){
    super (props)

    this.state ={
      name: '',
      address: '',
      city: '',
      geographicState: '',
      zipCode: 0
    }
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeGeographicState = this.changeGeographicState.bind(this);
    this.changeZipCode = this.changeZipCode.bind(this);
    this.clearState = this.clearState.bind(this);
    this.submitProperty = this.submitProperty.bind(this);
  }
  changeName(event){
    this.setState({name: event.target.value});
   
  }
  changeAddress(event){
    this.setState({address: event.target.value});
 
  }
  changeCity(event){
    this.setState({city: event.target.value});
   
  }
  changeGeographicState(event){
    this.setState({geographicState: event.target.value});
   
  }
  changeZipCode(event){
    this.setState({zipCode: event.target.value});
   
  }
  clearState(){
    this.setState({
    name: '',
    address: '',
    city: '',
    geographicState: '',
    zipCode: 0
  })
  console.log(this.state)
  }
  submitProperty(){
    return axios.post('/api/houses', {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.geographicState,
      zip: this.state.zipCode
    })
    .then (() => {
      this.clearState();
    })
    .catch(err => {
      console.log(err, 'error');
    })
  }
//<input type="text" value={this.state.imageURL} onChange={this.handleChangeURL}/>
  render() {
    return (
      <div>
        
          <input type="text" value={this.state.name} onChange={this.changeName} placeholder='Name'></input>
          <input type="text" value={this.state.address} onChange={this.changeAddress} placeholder='Address'></input>
          <input type="text" value={this.state.city} onChange={this.changeCity} placeholder='City'></input>
          <input type="text" value={this.state.geographicState} onChange={this.changeGeographicState} placeholder='State'></input>
          <input type="text" value={this.state.zipCode} onChange={this.changeZipCode} placeholder='Zip Code'></input>
          <div><Link to={'/'}><button onClick={this.submitProperty}>Complete</button></Link>  </div>
          <div><Link to={'/'}><button onClick={this.clearState}>Cancel</button></Link>  </div>
      </div>
    );
  }
}

export default Wizard;
