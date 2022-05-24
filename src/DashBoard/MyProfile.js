import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container mx-auto'>
            <div className='card'>
           <p>Name:{user.displayName}</p>
           <p>Email: {user.email}</p>
            </div>
            
        </div>
    );
};

export default MyProfile;