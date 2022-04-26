import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth)
    const [validated, setValidated] = useState(false);
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const form = e.currentTarget;
        await signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate(from, { replace: true })
            })
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem("accessToken", JSON.stringify(data))
        if (user) {
            navigate('/home')
        }
        console.log(email, data)
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        console.log(email, password)
    };
    const handleGoogle = (e) => {
        e.preventDefault()
        signInWithGoogle()
            .then(res => {
                // const handleNavigate = async () => {
                //     const email = user?.email
                //     const { data } = await axios.post('http://localhost:5000/login', email)
                //     localStorage.setItem("accessToken", JSON.stringify(data))
                //     navigate('/home')
                //     console.log(email, data)
                // }
                // handleNavigate()
                console.log(res)
            })

    }
    return (
        <div className='container w-50 mx-auto mt-4 border border-secondary rounded-2 p-5'>
            <h2 className='text-primary'>Please Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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