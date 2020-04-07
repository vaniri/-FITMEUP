import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = ({ location, logoutHandler }) => {
    return (
        <div className="nav_menu">
            <img alt="logo" />
            <Link className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>Home
            </Link>
            <Link className={`nav_item ${location.pathname === '/posts' ? 'active' : ""}`} to='/posts'>Posts
            </Link>
        </div>
    )
}

export default withRouter(Nav);