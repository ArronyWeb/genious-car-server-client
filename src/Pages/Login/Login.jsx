import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const form = event.currentTarget;


        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        console.log(email, password)
    };
    const handleGoogle = (e) => {
        e.preventDefault()
        signInWithGoogle()
            .then(res => console.log("done"))

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