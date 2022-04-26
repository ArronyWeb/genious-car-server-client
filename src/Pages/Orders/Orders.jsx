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
            const url = `http://localhost:5000/order?email=${email}`
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
    return (
        <div className='text-center'>
            <h3> Your orders : {orders.length}</h3>
        </div>
    );
};

export default Orders;