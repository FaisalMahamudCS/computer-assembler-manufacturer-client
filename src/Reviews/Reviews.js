import React from 'react';
import ReactStars from "react-rating-stars-component";
const Reviews = (props) => {
    const {_id,name,description,photo,rating}=props.review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p> {description}</p>
        
          <ReactStars
    count={5}
   value={rating}
    size={24}
    edit={false}
    activeColor="#ffd700"
  />
        
        </div>
      </div> 
    );
};

export default Reviews;