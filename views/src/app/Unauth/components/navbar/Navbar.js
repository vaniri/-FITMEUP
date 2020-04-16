import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ location }) => {
    return (
      <Navbar bg="light" variant="light">
        <Nav.Link href="/"><Link id="logo" className={`nav_item ${location.pathname === '/' ? 'active' : ""}`} to='/'>FITMEUP
                </Link></Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
          <Link className={`nav_item ${location.pathname === '/posts' ? 'active' : ""}`} to='/posts'>Posts
                    </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default withRouter(NavBar);

