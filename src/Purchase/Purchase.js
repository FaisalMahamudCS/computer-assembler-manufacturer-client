import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify'
const Purchase = () => {
    const { id } = useParams();
    const [disabled,setDisabled]=useState(false);
    const [purchase,setPurchase]=useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [quantity,setQuantity]=useState('');
    const [input, setInput] = useState('')
    const [priceing,setPriceing]=useState('');
    const [available,setAvailable]=useState('');
    const [prices,setPrices]=useState('')
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL}/api/products/${id}`,{
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        })
            .then(res => res.json())
            .then(data =>{ setPurchase(data)
            setQuantity(data.minimumQuantity)
            setAvailable(data.availableQuantity)
            setPriceing(data.minimumQuantity*data.price)
            setPrices(data.price)
            }
                );
    }, [id])
    const handlePurchase = event => {
        event.preventDefault();
      

        const purchase = {
            purchaseId: _id,
            quantity:quantity,
            price:priceing,
            productName: name,
            email: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            status:'pending'
        }

        fetch(`${process.env.REACT_APP_URL}/api/products/purchase`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
              console.log("Data",data)
                 if(data){
                  setAvailable(available-quantity);
                  console.log(available-quantity);
                  const availables=available-quantity;
                 const availableQuantity={availables};
          
                  fetch(`${process.env.REACT_APP_URL}/api/products/restock/${id}`, {
                    method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(availableQuantity)
                    })
                    .then(res =>{
                      if(res.ok){
                        toast.success('profile edited successfully')
  
                      }
                      else{
                        toast.error('Failed profile edit');

                      }
                      res.json()
                })
                    .then(data=>data)
                    toast('order placed')
                }
                else{
                    toast.error(`Failed`)
                }
                
            });
    }
    console.log(priceing)
const quantityIncrement=()=>{
    let quan;
    quan=quantity+1
    setQuantity(quan)
    // let prc,quant;
    // quant=quantity+1;

    setPriceing(prices *quan)
    console.log("pricing", priceing)
    console.log(quantity)
}
const quantityDecrement=()=>{
    let quan;
    quan=quantity-1
    setQuantity(quan)
    setPriceing(prices *quan)
    console.log(priceing)
}
const changeHandle = e => {
    //setInput(quantity)
    let a=e.target.value;
    console.log(parseInt(a))
    setInput(a)
    setQuantity(a);
   setPriceing(quantity*priceing)
}
const changeHandleing = e => {
  
  setQuantity(e.target.value)  
  setPriceing(quantity*priceing)

}
    const {_id,name,image,description,minimumQuantity,availableQuantity,price}=purchase;
    return (
        <div className=''>
        <div className='container mx-auto'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie"/></figure>
              <div class="card-body">
              <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p>Minimum Quantity:{minimumQuantity}</p>
    <p>Available Quantity:{available}</p>
    <p>Price:{price}$</p>
    
  </div>
</div>
         
</div>
<div className='flex  mt-5 justify-center items-center'>
<div className='card p-4 w-[800] bg-base-100 shadow-xl'>
<div className="card-body p-10">
<h2 className="text-center text-2xl font-bold"> Purchase</h2>
<form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

             

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Quantity</span>
   
  </label>
  <div className="flex">
                            <button  type='button' className="btn btn-circle btn-outline" onClick={quantityIncrement}>
                            <span className='text-2xl'>+</span> 
</button>    <input type="number"  onChange={changeHandle} name="quantity" placeholder="Quantity" defaultValue={quantity} className="input input-bordered " />
<button type='button' className="btn btn-circle btn-outline"  onClick={quantityDecrement} >
  {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
 <span className='text-2xl'>-</span> 
</button>
</div>
<span>{minimumQuantity>quantity?<span className='text-red-500 text-center'>Less than Minimun Order Quantity</span> :'' }</span>
<span>{availableQuantity<quantity?<span className='text-red-500 text-center'>Not Available</span> :'' }</span>  
</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Price</span>
   
  </label>
  <input type="number"   name="price" placeholder="price"  onChange={changeHandleing} defaultValue={priceing} disabled className="input input-bordered " />

</div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
   
  </label>
  <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

</div>

<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
   
  </label>
  <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />

</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Phone Number</span>
   
  </label>
  <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

</div>
               
                 
                      
     <input type="submit" value="Submit" disabled={minimumQuantity>quantity || availableQuantity<quantity} className="btn btn-primary w-full max-w-xs" />
                    </form>

</div>
        </div>
        </div>
        </div>
    );
};

export default Purchase;