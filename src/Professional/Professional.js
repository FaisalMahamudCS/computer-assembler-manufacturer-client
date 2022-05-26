import React from 'react';
import  { useEffect, useState } from 'react';
import Professionals from '../Professionals/Professionals';

const Professional = () => {
    const [professional,setProfessional]=useState([]);
    useEffect(()=>{
        fetch('https://dry-fjord-32363.herokuapp.com/professional')
        .then(res => res.json())
        .then(data => setProfessional(data));
      
    })
    return (
        <div>
            <h2 className='text-center'>Our  Professional Engineer</h2>
            <div className='container mx-auto'>
            
            <div className='grid lg:grid-cols-3  grid-cols-1 gap-3'>
                {
                    professional.map(professional=><Professionals professional={professional} ></Professionals>)
                }
            </div>
            </div>
        </div>
    );
};

export default Professional;