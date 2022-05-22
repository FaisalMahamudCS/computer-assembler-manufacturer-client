import React from 'react';

const Parts = (props) => {
    const {name,image,description,minimumQuantity,availableQuantity,price}=props.part;
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
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
        
    );
};

export default Parts;