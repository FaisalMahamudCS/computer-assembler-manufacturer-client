import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify'
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading'
const ManageOrder = () => {
      
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [status,setStatus]=useState('');

    const { data: order, isLoading, refetch } = useQuery('order', () => fetch(`${process.env.REACT_APP_URL}/api/products/getAllOrders`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(order)
 
    // useEffect(() => {
    

    //     if (user) {
    //         fetch(`http://localhost:5000/order`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
                   
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken');
    //                     navigate('/');
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => {

    //                 setOrder(data);
    //             });
    //     }
    //  },[]) 
   
  


  
const handleDelete=(id)=>{
   
    fetch(`${process.env.REACT_APP_URL}/order/${id}`, {
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
     // const remainItem =order.filter(order => order._id !== id);
   //   //setOrder(remainItem);
    //   console.log(_id)
    //   console.log(remainItem)
    //   console.log(myOrder._id)
      
    if (data.deletedCount) {
       refetch();
        toast.success(` Order  deleted.`)
       
       
    }
})

}

const deleteItem=(_id)=>{
    alert(_id)


}
const updateStatus=(id)=>{
    fetch(`${process.env.REACT_APP_URL}/order/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Status Update Failed');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Updated Status`);
                }

            })
}

// if(isLoading){
//     return <Loading></Loading>
// }

    return (
        <div>
        {/* <h2>My Orders: {order.length}</h2> */}
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Product Name</th>
                        <th>Delete </th>
                        <th>Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        
                     order.map((order, index) => <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.productName}</td>
                            
                            <td>
                                <> <label for="delete-confirm-modal" class="btn btn-error">Delete</label>  <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete <br></br> {order.productName} !</h3>
                   
                    <div class="modal-action">
                    <button onClick={() => handleDelete(order._id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div> </>
                           
                            </td>
                            <td>
                              <button className='btn btn-success' onClick={()=>updateStatus(order._id)}> {order.status}</button> 
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

export default ManageOrder;