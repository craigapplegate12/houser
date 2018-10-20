import React, { Component } from 'react';
import './House.js'
import House from './House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component {
  constructor(props){
    super (props)

    this.state ={
        houses: []
    }
    this.getHouses = this.getHouses.bind(this);
  }
  componentDidMount(){
    this.getHouses()
  }
  getHouses(){
    axios.get('/api/houses')
    .then(res => {this.setState({houses: res.data})})
    .catch(err => alert(`Cannot get Houses error: ${err}`))
   //this.props.getHomes(this.state.houses)
  }
  // updateDataStoreFN() {
  //   axios.get('http://localhost:5001/api/houses')
  //   console.log('updated')
  //   .then( res => {
  //     this.setState({ houses: res.data });
  //   })
  //   .catch ((err) => {
  //     console.log('error', err)
  //   })
  // }
  // }

  render() {
    const properties = this.state.houses.map(e=> {
      const name= e.property_name;
      const address = e.property_address;
      const city = e.city;
      const geographicState = e.location_state;
      const zip = e.zip_code;
    return House(name, address, city, geographicState, zip )
    }
     
      )
    return (
      <div>
          Dashboard
          {console.log(this.state)}
          {properties}
          <div><Link to={'/wizard'}><button >Add new property</button></Link></div>
          
     </div>
    );
  }
}

export default Dashboard;
