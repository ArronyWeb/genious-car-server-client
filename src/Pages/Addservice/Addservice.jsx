import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://safe-plateau-81677.herokuapp.com/service', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(receivedData => {
                console.log(receivedData)
            })
    };
    return (
        <div className='text-center mt-5 w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className="d-flex flex-column  mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-3' placeholder='Description'  {...register("description")} />
                <input className='mb-3' placeholder='Price' type="number" {...register("price", { min: 18, max: 500 })} />
                <input className='mb-3' placeholder='Photo Url' type="text" {...register("img", { min: 18, max: 99 })} />
                <input className='btn btn-primary mt-3' type="submit" value="add service" />
            </form>
        </div>
    );
};

export default Addservice;