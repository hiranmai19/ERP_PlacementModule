import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../home_style.css"
import { Outlet, Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

function BasicExample() {
  return (
    <Navbar  expand="lg" className="Navbar">
      <Container>
      <Navbar.Brand href="/student-home">
            <img 
              src="https://hdstockimages.com/wp-content/plugins/image-downloader-custom/temp/HDStockImages_premium_RITSC6.jpg"
              width="90"
              height="60"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/student-home">E-Governance Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" class="navmenu">
          <Nav className="me-auto" >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success"><Search/></Button> */}
          </Form>
            <Nav.Link href="/student-home" className="navitems">Home</Nav.Link>
            <Nav.Link href="/Userform" className="navitems">Resume</Nav.Link>
            <NavDropdown href="/student-home" title="References" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://cdc.iittp.ac.in/images/iit/IITT%20CDC%20Annual%20Report-2021-2022.pdf" target="_blank">Previous year stats</NavDropdown.Item>
              <NavDropdown.Item  href="https://udaaniitt.in/" target="_blank">
                Experiences
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.codingninjas.com/codestudio/test-series/amazon-online-test-series" target="_blank">Mock tests</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown href="/student-home" title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/" >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
