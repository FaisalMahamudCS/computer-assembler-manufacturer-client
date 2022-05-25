import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';

const Part = () => {
    const [part,setPart]=useState([]);
  
        fetch('http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setPart(data));
  
    
  
    return (
        <div className='container mt-5 mb-10 mx-auto'>
        <div>
        <h1 className='text-2xl m-2 text-center'>Our Manufactured Parts</h1>
            <div className='grid lg:grid-cols-3  grid-cols-1 gap-4'>
          {
              part.map(part=> <Parts part={part}></Parts>)
          }
            </div>
            </div>
        </div>
    );
};

export default Part;