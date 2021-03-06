import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar fixed = 'top' bg = 'white'>
        <Navbar.Toggle />
        <Navbar.Collapse className ='justify-content-first'>
          <div className ='blankbox'>
            nigol
          </div>
        </Navbar.Collapse>
          <Navbar.Collapse className = "justify-content-center" variant = 'white'>
            <Navbar.Brand variant ='light' href="/main">
              Photo-web
            </Navbar.Brand>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text bg ='white'>
              <a href="/login">login</a>
            </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;