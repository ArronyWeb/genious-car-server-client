import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://safe-plateau-81677.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='services-container mt-5'>
            <h1 className='services-title fs-1 pt-5 pb-4'>Our Services</h1>
            <div className="services">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;