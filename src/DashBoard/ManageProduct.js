import React,{useState} from 'react';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify'
import Loading from '../Loading/Loading'
const ManageProduct = () => {
  
    
    const [part,setPart]=useState([]);
      
        fetch('process.env.REACT_APP_URL/part')
        .then(res => res.json())
        .then(data => setPart(data));
    
  
 
    const handleDelete=(id)=>{
   
        fetch(`process.env.REACT_APP_URL/part/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        // const remainItem =item.filter(item => item._id !== _id);
        //         setItem(remainItem);
        //  console.log(id)
          ;
           const remainProduct =part.filter(part => part._id !== id);
         setPart(remainProduct);
        
          
        if (data.deletedCount) {
           
            toast.success(` Product  deleted.`)
           
           
        }
    })
    
    }

    // const {_id,name,image,description,minimumQuantity,availableQuantity,price}=parts;

    return (
        <div>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        
                        <th>Minimum Quantity</th>
                        <th>Available Quantity </th>
                        <th>Price</th>
                        <th>Delete</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        part?.map((part, index) => <tr key={part._id}>
                            <td>{part._id}</td>
                            <td>{part.name}</td>
                           
                            <td>{part.minimumQuantity}</td>
                            <td>{part.availableQuantity}</td>
                            <td>{part.price}</td>
                             
                            
                            <td>
                               
   <label for="delete-confirm-modal" class=" btn btn-error">Delete</label> 
                            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
                                    
                                   
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete !</h3>
                   
                    <div class="modal-action">
                    <button onClick={() => handleDelete(part._id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div> 
                              

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

export default ManageProduct;