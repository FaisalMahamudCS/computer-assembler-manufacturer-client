import React from 'react';
import { useNavigate } from 'react-router-dom';
const Parts = (props) => {
    const {_id,name,image,description,minimumQuantity,availableQuantity,price}=props.part;
    const navigate=useNavigate();
    const   partdetailsNavigation=(_id)=>{
    navigate(`/purchase/${_id}`)
    
    } 
    return (
        
           <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>Description: {description}</p>
    <p>Minimum Quantity:{minimumQuantity}</p>
    <p>Available Quantity:{availableQuantity}</p>
    <p>Price:{price}$</p>

    <div class="card-actions justify-center">
      <button class="btn btn-primary" onClick={()=>partdetailsNavigation(_id)}>Buy Now</button>
    </div>
  </div>
</div> 
        
    );
};

export default Parts;