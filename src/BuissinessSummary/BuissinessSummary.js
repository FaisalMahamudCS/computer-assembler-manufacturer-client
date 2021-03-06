import React from 'react';
import {FcCustomerSupport} from 'react-icons/fc';
import {MdOutlineProductionQuantityLimits} from 'react-icons/md';
const BuissinessSummary = () => {
    return (
        <div className='flex  mt-5 mb-5 justify-center items-center'>
       
      <div class="stats shadow">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
      <FcCustomerSupport size={70}></FcCustomerSupport>
    </div>
    <div class="stat-title">We Served</div>
    <div class="stat-value text-primary">1K+</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">We Have</div>
    <div class="stat-value text-secondary">100M Annual Revenue</div>
    <div class="stat-desc">10% more than last year</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
       <MdOutlineProductionQuantityLimits size={70}></MdOutlineProductionQuantityLimits>
        </div>
      </div>
    </div>
    <div class="stat-title">We manufacture</div>
    <div class="stat-value text-primary">50+ parts</div>
    <div class="stat-desc ">10% more than last year</div>
  </div>
  
</div>

      </div>
    );
};

export default BuissinessSummary;