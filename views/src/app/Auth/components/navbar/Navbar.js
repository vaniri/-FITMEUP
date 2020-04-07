import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

const Nav = ({ location, logoutHandler }) => {
    return (
        <div className="nav_menu">
            <img alt="logo" />
            <Link className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>Home
            </Link>
            <Link className={`nav_item ${location.pathname === '/profile' ? 'active' : ""}`} to='/profile'>My page
            </Link>
            <Link className={`nav_item ${location.pathname === '/newpost' ? 'active' : ""}`} to='/newpost'>New post
            </Link>
            <button type="submit" onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default withRouter(Nav);