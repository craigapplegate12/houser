import React, { Component } from 'react';
import './House.js'
import House from './House.js';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'


class Dashboard extends Component {
  constructor(props){
    super (props)

    this.state ={
        houses: []
    }
    this.getHouses = this.getHouses.bind(this);
    this.deleteHouse= this.deleteHouse.bind(this);
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

  deleteHouse = (id) => {
     console.log(id)
  //   // axios.delete(`/api/houses/${id}`)
  //   // .then(res => {
  //   //   console.log(res);
  //   //   console.log(res.data);
  //   // })
  //   // .catch(err => console.log('error', err))
  }

  render() {
    const properties = this.state.houses.map(e=> {
      const name= e.property_name;
      const address = e.property_address;
      const city = e.city;
      const geographicState = e.location_state;
      const zip = e.zip_code;
      const deleteHouseFN = this.deleteHouse(e.id)
      
    return House(name, address, city, geographicState, zip, deleteHouseFN )
    }
     
      )
    return (
      <div className='dash'>
         <div className='dash_heading'>Dashboard
         <Link to={'/wizard'}><button className='dash_subheader_button'>Add new property</button></Link></div> 
          {console.log(this.state)}
          <div className='dash_prop_container'>
          <div className='dash_prop_heading'>Home Listings</div>
          {properties}
          </div>
    
          
     </div>
    );
  }
}

export default Dashboard;
