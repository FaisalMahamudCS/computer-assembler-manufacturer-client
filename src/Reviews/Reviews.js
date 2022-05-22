import React from 'react';
import ReactStars from "react-rating-stars-component";
const Reviews = (props) => {
    const {_id,name,description,photo,review}=props.review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p> {description}</p>
        
          <ReactStars
    count={5}
   value={review}
    size={24}
    activeColor="#ffd700"
  />
        
        </div>
      </div> 
    );
};

export default Reviews;