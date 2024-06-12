import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_URL}/api/products/reviews`)
        .then(res => res.json())
        .then(data => setReview(data));
      
    },[])
    return (
        <div className='container mx-auto'>
            
        <div className='grid lg:grid-cols-3  grid-cols-1 gap-3'>
            {
                review.map(review=><Reviews review={review} key={review._id}></Reviews>)
            }
        </div>
        </div>
    );
};

export default Review;