import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service;
    const navigate = useNavigate()
    const handleBookingBtn = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service card'>
            <img src={img} alt="" />
            <div className="card-body">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Price : {price}</p>
                <button className='btn btn-primary' onClick={() => handleBookingBtn(_id)}>Book Now</button>
                <Link to={`/checkout/${_id}`}>
                    <button className='btn btn-primary' >Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;