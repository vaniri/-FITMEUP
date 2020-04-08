import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';

const NavBar = ({ location }) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> <img id="logo" alt="logo" src="https://b.radikal.ru/b00/2004/6a/5f57a4a2c31a.png" />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#pricing">
                    <Link className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>Home
                </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className={`nav_item ${location.pathname === '/posts' ? 'active' : ""}`} to='/posts'>Posts
                    </Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(NavBar);

