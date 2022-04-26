import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/axiosPrivate';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getOrder = async () => {
            const email = user?.email;
            const url = `https://safe-plateau-81677.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setOrders(data)
            } catch (error) {
                console.log(error.message)
                if (error.response.status === 403 || error.response.status) {
                    signOut(auth)
                    navigate('/login')
                }

            }
        }
        getOrder()

    }, [user])
    console.log(orders)
    return (
        <div className='text-center'>
            <h3> Your orders : {orders.length}</h3>
            {
                orders.map(order => <div key={order._id}>
                    <p>  {order.email}
                        {order.name}</p>
                </div>)
            }
        </div>
    );
};

export default Orders;