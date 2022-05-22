import React, { useEffect, useState } from 'react';
import Parts from '../Parts/Parts';

const Part = () => {
    const [part,setPart]=useState([]);
  
        fetch('http://localhost:5000/part')
        .then(res => res.json())
        .then(data => setPart(data));
  
    
  
    return (
        <div>
        
            <div className='grid lg:grid-cols-3  grid-cols-1 gap-4'>
          {
              part.map(part=> <Parts part={part}></Parts>)
          }
            </div>
        </div>
    );
};

export default Part;