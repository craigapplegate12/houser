import React from 'react';


function House(name, address, city, state, zip){
     return (
      <div>
          <p>{name}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{zip}</p>
          <div><button>Delete</button></div>
     </div>
    );
  }


export default House;
