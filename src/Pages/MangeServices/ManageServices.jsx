import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://safe-plateau-81677.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id) => {
        fetch(`https://safe-plateau-81677.herokuapp.com/service/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
    }
    return (
        <div className='text-center'>
            <h2>Manage Your Services {services.length}</h2>
            <div >
                {
                    services.map(service =>
                        <h5 key={service._id}>
                            {service.name}
                            <button onClick={() => handleDelete(service._id)} className="btn-danger">X</button>
                        </h5>
                    )
                }
            </div>
        </div>
    );
};

export default ManageServices;