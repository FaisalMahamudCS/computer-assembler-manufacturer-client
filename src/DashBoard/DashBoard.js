import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
             <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                { !admin && <>
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review"> Review</Link></li>
                    </>} 
                    {/* <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review"> Review</Link></li> */}
                     <li><Link to="/dashboard/myprofile">My Profile</Link></li> 
                     { admin && <>
                        <li><Link to="/dashboard/manageOrder">Manage Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add a product</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    </>} 
                </ul>

            </div>
        </div>
        </div>
    );
};

export default DashBoard;