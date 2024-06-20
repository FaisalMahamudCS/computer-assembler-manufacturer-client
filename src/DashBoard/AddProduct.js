import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/review').then(res => res.json()))

    const imageStorageKey='eebe38a3877f0f59e52a715fd16021ad';

    
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const image = result.data.url;
                const product = {
                    name: data.name,
                    image:image,
                    description: data.description,
                    minimumQuantity:data.minimumQuantity,
                    availableQuantity:data.availableQuantity,
                    price:data.price
                }
               
                fetch('process.env.REACT_APP_URL/part', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the Product');
                    }
                })

            }
            
        })
    }


    return (
        <div className='flex  mt-5 justify-center items-center'>
           <div className='card w-96 bg-base-100 shadow-xl'>
            <div  className="card-body" >
            <h2 className="text-2xl">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Parts Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                      <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'photo is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            },
                            pattern: {
                               
                                message: 'Provide a valid Description'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
               
              
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Minimum Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimumQuantity", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity is Required'
                            },
                            pattern: {
                               
                                message: 'Provide a valid Minimum Quantity'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'Available Quantity is Required'
                            },
                            pattern: {
                               
                                message: 'Provide a valid Available Quantity'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
               
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Enter Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            },
                            pattern: {
                               
                                message: 'Provide a price'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
               

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>  
        </div>  
        </div>
    );
};

export default AddProduct;