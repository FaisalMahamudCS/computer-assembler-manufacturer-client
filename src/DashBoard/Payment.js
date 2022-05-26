import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2a8yGIi5IetcrLOT8S6J6l3hU0Ioh3W25tLjgwVIYXimdTZ9V7JxjgUtVSJ7OF9D76LBvqZccilfYPTWN6IeyI003s7XUspm');


const Payment = () => {
    const { id } = useParams();
    const url = `https://dry-fjord-32363.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Greeting {order.userName}</p>
                <h2 class="card-title"> Pay for {order.productName}</h2>
           
                <p>Please pay: ${order.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;