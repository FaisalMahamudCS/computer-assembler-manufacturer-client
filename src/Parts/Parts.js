import React from 'react';
import { useNavigate } from 'react-router-dom';
const Parts = (props) => {
    const {_id,name,image,description,minimumQuantity,availableQuantity,price}=props.part;
    const navigate=useNavigate();
    const   partdetailsNavigation=(_id)=>{
    navigate(`/purchase/${_id}`)
    
    } 
    return (
      // <div className="p-4 flex flex-col justify-between h-full ">

      <div className='flex flex-col gap-[6px] p-4 box-border border border-gray-200 rounded-[16px] shadow-[0_0_8px_0_rgba(59,130,246,0.12)] bg-white justify-between h-full'>
           <div class=" flex-grow ">
 <img className='h-[300px] w-[400px] p-2' src={image} alt="Shoes" />
    <h2 class="font-bold py-2">{name}</h2>
    <p><b>Description:</b> {description}</p>
    <p><b>Minimum Quantity:</b> {minimumQuantity}</p>
    <p><b>Available Quantity:</b> {availableQuantity}</p>
    <p><b>Price:</b> {price}$</p>

    </div>.

  <div class=" justify-center px-4 py-2 flex">
      <button class="btn btn-primary"  onClick={()=>partdetailsNavigation(_id)}>Buy Now</button>
    
</div> 
     </div>
    //  </div>   
    );
};

export default Parts;