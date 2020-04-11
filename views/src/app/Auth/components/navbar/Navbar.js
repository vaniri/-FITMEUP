import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, DropdownButton, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = ({ location, logoutHandler }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"><img id="logo" alt="logo" src="https://b.radikal.ru/b00/2004/6a/5f57a4a2c31a.png" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#pricing">
          <Link className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>Home
            </Link>
        </Nav.Link>
        <DropdownButton className="pull-right" id="dropdown-basic-button" title="click me">
          <Dropdown.Item href="#/action-1">
            <Link className={`nav_item ${location.pathname === '/newpost' ? 'active' : ""}`} to='/newpost'>New post
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Link className={`nav_item ${location.pathname === '/profile' ? 'active' : ""}`} to='/profile'>My page
            </Link>
          </Dropdown.Item>
          <Dropdown.Item variant="outline-info"><button type="submit" onClick={logoutHandler}>Log out</button>
          </Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Navbar>
  )
}

export default withRouter(NavBar);