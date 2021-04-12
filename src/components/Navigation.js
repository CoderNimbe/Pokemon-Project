import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Link to='/'>
        <Navbar.Brand>PokeFight</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link>
            <NavLink to='/sign-up'>Register</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to='/sign-in'>Login</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
