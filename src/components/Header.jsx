import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import logopic from '../assets/images/logo2.webp';
import logotext from '../assets/images/logo-text.png';

const Header = () => {
  return (
    <Navbar expand="false">
       
      {/* copy starts */}
      {/* <div class="container">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
  </div> */}

         <Navbar.Brand href="/dashboard"> 
          <Container className='logo-container'>
          <Image src={logopic} alt="WCHL Logo" className='logo'/>  
          <div className='overlay'>
            
            <Image src={logotext} alt="WCHL Logo expanded" className='logotext'/> 
         
          </div>
          </Container>
         
      {/* <img
              src={logopic}
              
              alt="WCHL Logo"
            /> */}
      </Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Container fluid>
      <h4 className=" nav-heading fw-bold">Dashboard</h4>
      {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
  )
}

export default Header