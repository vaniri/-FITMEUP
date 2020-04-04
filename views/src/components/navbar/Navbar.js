import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Nav = ({ location }) => {
    return (
        <div className="nav_menu">
            <img />
            <Link className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>Home
            </Link>
            <Link className={`nav_item ${location.pathname === '/login' ? 'active' : ""}`} to='/login'>Log In
            </Link>
            <Link className={`nav_item ${location.pathname === '/register' ? 'active' : ""}`} to='/register'>Register
            </Link>
        </div>
    )
}

export default withRouter(Nav);