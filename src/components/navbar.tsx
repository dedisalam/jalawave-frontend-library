import Hook from '../hooks';
import React from 'react';
import {
  Nav, NavDropdown, Container, Navbar as NavbarBS,
} from 'react-bootstrap';
import type { AxiosInstance } from 'axios';

interface NavbarProps {
  brand: string
  username: string,
  axios: AxiosInstance,
  auth: string
}
function Navbar(props: NavbarProps): JSX.Element {
  const {
    brand, username, axios, auth,
  } = props;

  const { mutate } = Hook.Logout(axios, auth);

  return (
    <NavbarBS bg="primary" sticky="top" variant="dark" expand="lg">
      <Container fluid>
        <NavbarBS.Brand href="/">{brand}</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="navbar-support" />
        <NavbarBS.Collapse id="navbar-support" className="justify-content-end">
          <Nav>
            <NavDropdown align="end" className="fw-bold" id="basic-nav-dropdown" title={username}>
              <NavDropdown.Item onClick={(): void => { mutate(); }}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;
