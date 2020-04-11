import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = ({ location, logoutHandler }) => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Navbar.Brand href="/"><img id="logo" alt="logo" src="https://b.radikal.ru/b00/2004/6a/5f57a4a2c31a.png" />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Navbar.Brand id="" href=""><img className="avatar" alt="logo" src={localStorage.userImg} /></Navbar.Brand>
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