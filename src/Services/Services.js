import React from 'react';
import {GrDeliver} from 'react-icons/gr';

const Services = (props) => {
    const {name,description,photo,icon}=props.service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        {/* <{icon} size={70}></{icon}> */}
        {icon}
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p> {description}</p>
        
       
        
        </div>
      </div> 
    );
};

export default Services;