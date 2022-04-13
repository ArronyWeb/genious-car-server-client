import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <div className='container w-50 mx-auto border border-secondary rounded-3 mt-5  p-3'>
            <h3 className='text-center'>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input style={{ height: "50px" }} className='ps-3 w-100  mt-3 rounded-3' type="email" name="email" id="email" placeholder='Your Email' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="password" name="password" id="password" placeholder='Your Password' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="text" name="name" id="name" placeholder='Your Name' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="submit" value="Register" />
                <p className='mt-2'>ALready Register ? <span onClick={() => navigate("/login")}>Please Login</span></p>
            </form>
        </div>
    );
};

export default Register;