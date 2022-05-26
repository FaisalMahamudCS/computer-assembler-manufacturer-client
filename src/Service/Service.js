import React from 'react';
import  { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Service = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data));
      
    })
    return (
        <div className='mt-3'>
     <h2 className='text-center text-2xl '>Service We Provide</h2>
        <div className='container mx-auto'>
            
        <div className='grid lg:grid-cols-3  grid-cols-1 gap-3'>
            {
                service.map(service=><Services service={service} ></Services>)
            }
        </div>
        </div>
        </div>

    );
};

export default Service;