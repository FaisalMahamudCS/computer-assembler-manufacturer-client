import React from 'react';

const Professionals = (props) => {
    const {name,designation,photo}=props.professional;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        {/* <{icon} size={70}></{icon}> */}
     
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p> {designation}</p>
        
       
        
        </div>
      </div> 
    );
};

export default Professionals;