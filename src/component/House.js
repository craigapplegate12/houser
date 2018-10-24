import React from 'react';
import axios from 'axios';

// function deleteHouse(id) {
//   console.log('deleted')
//   axios.delete(`/api/houses/:${id}`)
//   .then(res => {
//     console.log(res);
//     console.log(res.data);
//   })
//   .catch(err => console.log('error', err))
// }
function House(name, address, city, state, zip, id){
  
     return (
      <div>
          <p>{name}</p>
          <p>{address}</p>
          <p>{city}</p>
          <p>{state}</p>
          <p>{zip}</p>
          <div><button onClick={}>Delete</button></div>
     </div>
    );
  }


export default House;
