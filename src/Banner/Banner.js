import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/PggzFYq/banner-ung.jpg" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
     
    
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/1vLRGjq/Mother1.png" class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/RTT3GKF/Mother2.png" class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://i.ibb.co/VNnpXkP/IMG-20220526-232300-551.png" class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
             {/* <div>
        <h2> Single Item</h2>

        <Slider {...settings}>
          <div>
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="" srcset="" />

            <h3>1</h3>
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="" srcset="" />

            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
        </div>
    );
};

export default Banner;