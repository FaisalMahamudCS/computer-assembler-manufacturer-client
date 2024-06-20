import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import {Loading} from '../Loading/Loading'
const AddReview = () => {
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
                const photo = result.data.url;
                const review = {
                    name: data.name,
                    description: data.description,
                    photo: photo,
                    rating:data.rating


                }
               
                fetch(`${process.env.REACT_APP_URL}/api/products/add/review`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(review)
                })
                .then(res =>{
                    if(res.ok){
                        toast.success('Review added successfully')
                        reset();
                            
                    }
                    else {
                        toast.error('Failed to add the Review');

                    }
                return    res.json()
            })
                .then(
                
                //     inserted =>{

                //     if(inserted.insertedId){
                //         toast.success('Review added successfully')
                //         reset();
                //     }
                //     else{
                //         toast.error('Failed to add the Review');
                //     }
                // }
            )

            }
            
        })
    }

    return (
        <div className='flex  mt-5 justify-center items-center'>
            <div className='card shadow' >
          <div className='card-body'>
            <h2 className="text-xl font-bold">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
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
               
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
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
                        <span className="label-text">Review</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Rating"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            },
                            pattern: {
                               
                                message: 'Provide a valid Rating'
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

export default AddReview;