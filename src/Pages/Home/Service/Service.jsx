import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate()
    const handleBookingBtn = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price : {price}</p>
            <button onClick={() => handleBookingBtn(id)}>Book Now</button>
        </div>
    );
};

export default Service;