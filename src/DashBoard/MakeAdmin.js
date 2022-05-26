import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://dry-fjord-32363.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
      
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><UserRow
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></UserRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MakeAdmin;