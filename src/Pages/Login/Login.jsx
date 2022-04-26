import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToekn';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword, user
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || user1)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const form = e.currentTarget;
        await signInWithEmailAndPassword(email, password)
            .then(() => {
                if (token) {
                    navigate(from, { replace: true })
                }
            })



        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
    };
    const handleGoogle = async (e) => {
        e.preventDefault()
        await signInWithGoogle()
            .then(() => {
                if (token) {
                    navigate(from, { replace: true })
                }
            })
    }
    return (
        <div className='container w-50 mx-auto mt-4 border border-secondary rounded-2 p-5'>
            <h2 className='text-primary'>Please Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>New to Genious Car ? <span className='text-decoration-underline text-danger text-bold fs-5' onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>Register Yourself</span></p>
            <h3 onClick={handleGoogle} className='text-center'>Continue with google</h3>
        </div>
    );
};

export default Login;