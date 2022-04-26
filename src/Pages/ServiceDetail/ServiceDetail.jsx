import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://safe-plateau-81677.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='text-center mt-5'>
            <h1>Welcome to service detail : {serviceId}</h1>
            <h2>{service.name}</h2>
            <h3>{service.description}</h3>
            <Link to='/addservice'>
                <button className='btn btn-primary'>Add service</button>
            </Link>

        </div>
    );
};

export default ServiceDetail;