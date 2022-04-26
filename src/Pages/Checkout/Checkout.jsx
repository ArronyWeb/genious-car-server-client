import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth)
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://safe-plateau-81677.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const order = {
            email: user?.email,
            name: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }
        axios.post('https://safe-plateau-81677.herokuapp.com/order', order)
            .then(res => {
                const { data } = res;
                if (data) {
                    toast("Your order is Booked")
                }
            })
        e.target.reset()
    }
    return (
        <div className='text-center w-50 mx-auto'>
            <h1>Checkout page</h1>
            <form onSubmit={handleSubmit}>
                <input className='w-100 form-control mb-2' type="name" name="Name" value={user?.displayName || ""} id="name" readOnly />
                <br />
                <input className='w-100 form-control mb-2' type="email" name="email" value={user?.email || ''} id="email" readOnly />
                <br />

                <input className='w-100 form-control mb-2' type="service" name="Service" value={service.name} id="service" />
                <br />
                <input className='w-100 form-control mb-2' type="address" name="Address" id="address" autoComplete='off' placeholder='Address' />
                <br />
                <input className='w-100 form-control mb-2' type="phone" name="Phone" id="phone" placeholder='Phone' autoComplete='off' />
                <br />
                <button type='submit' className="btn btn-primary">Book Now</button>
            </form>

        </div>
    );
};

export default Checkout;