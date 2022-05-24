import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify'
import { useQuery } from 'react-query';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const { data: order, isLoading, refetch } = useQuery('myorder', () => fetch(`http://localhost:5000/myorder?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        
        res.json()
    
    }));


    useEffect(() => {
    

        if (user) {
            fetch(`http://localhost:5000/myorder?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                   
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setMyOrder(data);
                });
        }
     },[]) 
    console.log(myOrder)
  


  
const handleDelete=(id)=>{
   
    fetch(`http://localhost:5000/order/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

.then(res => res.json())
.then(data => {
    console.log(data);
    // const remainItem =item.filter(item => item._id !== _id);
    //         setItem(remainItem);
      console.log(id)
      ;
      const remainItem =myOrder.filter(myOrder => myOrder._id !== id);
      setMyOrder(remainItem);
    //   console.log(_id)
    //   console.log(remainItem)
    //   console.log(myOrder._id)
      
    if (data.deletedCount) {
        refetch()
        toast.success(` Order  deleted.`)
       
       
    }
})

}

const deleteItem=(_id)=>{
    alert(_id)


}
    return (
        <div>
        <h2>My Orders: {myOrder.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Product Name</th>
                        <th>Payment </th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        myOrder.map((order, index) => <tr key={order._id}>
                            <th>{order._id}</th>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.productName}</td>
                            
                            <td>
                                {(order.price && !order.paid) &&<> <Link to={`/dashboard/payment/${order._id}`}><button className='btn  btn-success '>pay</button></Link><button className='ml-3 btn btn-error' onClick={()=>handleDelete(order._id)} >Delete</button><label for="delete-confirm-modal" class="btn modal-button">open modal</label>  <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {order.productName} !</h3>
                   
                    <div class="modal-action">
                    <button onClick={() => handleDelete(order._id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div> </>}
                                {(order.price && order.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                </div>}
                            </td>
                           
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
        <div>
           
        </div >
    </div>
    );
};

export default MyOrders;