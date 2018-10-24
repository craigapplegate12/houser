import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Wizard.css'


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
      <div className='wiz'>
          <div className='wiz_subheader'><h2 className='wiz_heading'>Add New Listing</h2> <Link to={'/'}><button className='wiz_subheader_button' onClick={this.clearState}>Cancel</button></Link></div>
          <div className='wiz_input_box'><p>Property Name</p><input type="text" value={this.state.name} onChange={this.changeName} placeholder='Name'></input></div>
          <div className='wiz_input_box'><p>Address</p><input type="text" value={this.state.address} onChange={this.changeAddress} placeholder='Address'></input></div>
          <div className='wiz_input_box'><p>City</p><input type="text" value={this.state.city} onChange={this.changeCity} placeholder='City'></input></div>
          <div className='wiz_input_box'><p>State</p><input type="text" value={this.state.geographicState} onChange={this.changeGeographicState} placeholder='State'></input></div>
          <div className='wiz_input_box'><p>Zip</p><input type="text" value={this.state.zipCode} onChange={this.changeZipCode} placeholder='Zip Code'></input></div>
          <div><Link to={'/'}><button className='wiz_button' onClick={this.submitProperty}>Complete</button></Link>  </div>
          
      </div>
    );
  }
}

export default Wizard;
