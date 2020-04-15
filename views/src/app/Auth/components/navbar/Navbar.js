import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = ({ location, logoutHandler }) => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Nav.Item href="#/action-1">
      <Link id="logo" className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/home'>FITMEUP
      </Link>
      </Nav.Item>
      <Nav className="mr-auto"></Nav>
      <Navbar.Brand href=""><img className="avatar" alt="logo" src={localStorage.userImg} /></Navbar.Brand>
      <NavDropdown title="click me" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#/action-1">
          <Link className={`nav_item ${location.pathname === '/newpost' ? 'active' : ""}`} to='/newpost'>New post
            </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="#/action-2">
          <Link className={`nav_item ${location.pathname === '/profile' ? 'active' : ""}`} to='/profile'>My page
            </Link>
        </NavDropdown.Item>
        <div id="logout-container">
          <Button id="logout-button" type="submit" onClick={logoutHandler}>Log out</Button>
        </div>
      </NavDropdown>
    </Navbar>
  )
}

export default withRouter(NavBar);