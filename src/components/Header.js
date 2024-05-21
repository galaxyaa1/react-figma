import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
const Header = () => {
  return (
    <Navbar  expand="lg" className="px-5">
      <Navbar.Brand className="brand ms-5">
        <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link to="/" className="nav-link" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/find-a-doctor" className="nav-link" style={{ marginRight: '10px' }}>find a doctor</Link>
          <Link to="/apps" className="nav-link" style={{ marginRight: '10px' }}>Apps</Link>
          <Link to="/testimonials" className="nav-link" style={{ marginRight: '10px' }}>Testimonials</Link> {/* Assuming you have a route set up for apply */}
          <Link to="/about-us" className="nav-link" style={{ marginRight: '10px' }}>About us</Link> {/* Assuming you have a route set up for apply */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;