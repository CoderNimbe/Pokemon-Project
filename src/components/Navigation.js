import { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <Navbar bg='light' expand='lg'>
      <Link to='/'>
        <Navbar.Brand>PokeFight</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {!isAuthenticated ? (
            <Fragment>
              <Nav.Link>
                <NavLink to='/sign-up'>Register</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/sign-in'>Login</NavLink>
              </Nav.Link>
            </Fragment>
          ) : (
            <Fragment>
              <Nav.Link>
                <NavLink to='/battleground'>Play</NavLink>
              </Nav.Link>
              <Nav.Link>
                <div onClick={logout}>Logout</div>
              </Nav.Link>
            </Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
