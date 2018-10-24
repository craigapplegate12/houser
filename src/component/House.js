import React from 'react';

import './House.css'


function House(name, address, city, state, zip, deleteFunction){

     return (
       <div className='House'>
      <div className="house_detail_box">
          <p> Property Name: {name}</p>
          <p> Address: {address}</p>
          <p> City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
          <button className='house_delete_button'>Delete</button>
     </div>
     </div>
    );
  }


export default House;
