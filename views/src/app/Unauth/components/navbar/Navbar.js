import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from "react-icons/fa";

const NavBar = ({ location }) => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Link id="logo" className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'><FaHome />  FITMEUP</Link>
      <Nav.Item>
        <Nav.Link eventKey="link-1"><Link className={`nav_item ${location.pathname === '/logIn' ? 'active' : ""}`} to='/logIn'>log-in
        </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default withRouter(NavBar);

