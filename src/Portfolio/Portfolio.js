import React from 'react';
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (
        <div className='flex  mt-5 justify-center items-center container mx-auto'>
            
        <div className='card  '>
            <div className='card-body'>
        <div className='grid lg:grid-cols-2 mt-5  grid-cols-1 '>
            <div className=''>
                <h2 className='font-bold text-2xl'>Personal Information</h2>
            {/* <img src="https://i.ibb.co/XXrZCbD/CV-image-removebg.png" height="" className='mt-[50px]  ' alt="" srcset="" /> */}
             <p> <b>Name:</b> Faisal Mahamud</p>
            <p><b> Email:</b>fmfahim1202@gmail.com</p>
            <p> <b>Educational Background:</b> 
           <b> Degree:</b> B.s.c Hon's in CSE <br></br>(2018-2022)  present (8th semester)<br></br>
         

            </p>
            <p><b>Institution:</b> Bgc Trust University ,Bangladesh</p>
            
            <p><b> Skill:</b> Node Js,Express Js,React Js,MongoDB <br></br>Firebase,Tailwind,Bootstrap,Mysql,php,laravel</p>

            </div>
            <div>
       < h1 className='text-2xl'><b>Projects</b> </h1>   
         <p><b>Project Name</b> Sports Gear Inventory</p> 
<p><b> Live Website :</b> <a href='https://sports-gear-inventory.web.app' className='btn btn-link'> https://sports-gear-inventory.web.app</a></p>
{/* <Link to='https://sports-gear-inventory.web.app'>Visit </Link> */}
<p> <b>Project Name</b> Laptop World</p>
<p><b> Live Website :</b> <a className='btn btn-link' href='https://laptops-world.netlify.app/'>https://laptops-world.netlify.app/</a>  </p>  
<p><b>Project Name</b>  Watch Store </p>
<p><b> Live Website :</b> <a href="https://watches-store.netlify.app/ " className='btn btn-link'>https://watches-store.netlify.app/ </a> 
</p> 
</div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Portfolio;