import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
const MyProfile = () => {
    const [user] = useAuthState(auth);
   
    const { register, formState: { errors },reset, handleSubmit } = useForm();
    console.log(user);
    const {email}=user;

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/${email}`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
   
    const onSubmit = data => {
        const profile = {
            name:user.displayName,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkedin:data.linkedin


        }
        fetch(`http://localhost:5000/userUpdate/${email}`, {
        method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
        .then(res =>res.json())
        .then(inserted =>{
            if(inserted.modifiedCount){
                toast.success('profile edited successfully')
                reset();
                refetch(); 
            }
            else{
                toast.error('Failed profile edit');
            }
        })
    }
     if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=' flex  mt-5 justify-center items-center'>
            <div className='card shadow-xl w-96'>
                <div className='card-body'>
                    <img src={user.photoURL} alt="" />
           <p><b>Name:</b> {user.displayName}</p>
           <p><b>Email:</b>  {user.email}</p>
           <p><b>Eduction: </b>{users.education}</p>
           <p><b>Location: </b>{users.location}</p>
           <p><b>Phone: </b>{users.phone}</p>
           <p><b>Linkedin:</b>{users.linkedin}</p>
            </div>
            </div>
            {/* <div className='ml-2 card shadow-xl w-96'>
                <div className='card-body'>
                    <img src={user.photoURL} alt="" />
           <p><b>Name:</b> {user.displayName}</p>
           <p><b>Email:</b>  {user.email}</p>
            </div>
            </div> */}
               <div className='card shadow-xl ml-10 w-96'>
                <div className='card-body'></div>   
            <form className='ml-5' onSubmit={handleSubmit(onSubmit)}>
           
<div className="form-control  w-full max-w-xs">
    <label className="label">
        <span className="label-text">Education</span>
    </label>
    <input
        type="text"
        placeholder="Enter Educational Qualification"
        className="input input-bordered w-full max-w-xs"
        {...register("education", {
            required: {
                value: true,
                message: 'Education is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Enter Location City/District</span>
    </label>
    <input
        type="text"
        placeholder="Enter Location"
        className="input input-bordered w-full max-w-xs"
        {...register("location", {
            required: {
                value: true,
                message: 'Location is Required'
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
        <span className="label-text">Phone Number</span>
    </label>
    <input
        type="text" placeholder='Phone Number'
        className="input input-bordered w-full max-w-xs"
        {...register("phone", {
            required: {
                value: true,
                message: 'Phone is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Linkedin Profile Link</span>
    </label>
    <input
        type="text"
        placeholder="Enter Profile Link"
        className="input input-bordered w-full max-w-xs"
        {...register("linkedin", {
            required: {
                value: true,
                message: 'Linkedin is Required'
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
        
    );
};

export default MyProfile;