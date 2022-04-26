import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from "../../../images/others/logo.png"
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar bg="primary" expand="lg" sticky='top'>
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height='40px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='text-white text-bold' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='text-white text-bold' as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className='text-white text-bold' href="home#services">Services</Nav.Link>
                        <Nav.Link className='text-white text-bold' href="home#experts">Experts</Nav.Link>
                        <NavDropdown className='text-white text-bold' title="Explore" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        {
                            user && <>
                                <Nav.Link className=' text-bold' as={Link} to="/manage" >
                                    <button className="btn btn-danger">Manage Serivice</button>
                                </Nav.Link>
                                <Nav.Link className=' text-bold' as={Link} to="/orders" >
                                    <button className="btn btn-danger">Orders</button>
                                </Nav.Link>
                            </>
                        }
                        {
                            user ?
                                <Nav.Link onClick={() => signOut(auth)} className='text-white text-bold btn btn-danger' as={Link} to="/Login" >
                                    log out
                                </Nav.Link>
                                :
                                <Nav.Link className='text-white text-bold' as={Link} to="/Login" >
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;