import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
            })

    }

    return (
        <div className='container w-50 mx-auto border border-secondary rounded-3 mt-5  p-3'>
            <h3 className='text-center'>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input style={{ height: "50px" }} className='ps-3 w-100  mt-3 rounded-3' type="email" ref={emailRef} name="email" id="email" placeholder='Your Email' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="password" ref={passwordRef} name="password" id="password" placeholder='Your Password' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="text" name="name" id="name" placeholder='Your Name' />
                <input style={{ height: "50px" }} className='ps-3 w-100 mt-3 rounded-3' type="submit" value="Register" />
                <p className='mt-2'>ALready Register ? <span onClick={() => navigate("/login")}>Please Login</span></p>
            </form>
        </div>
    );
};

export default Register;