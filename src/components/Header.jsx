import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import logopic from '../assets/images/logo.webp';
import logotext from '../assets/images/logo-text.webp';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import DatePickerRange from "../components/DatePickerRange";
import SelectBox from "../components/SelectBox";
import calls from "../data/calls";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import userpic from '../assets/images/user.webp';

const Header = () => {
  // const [service, setServive] = useState(false);
  // const selectedValue = val => {
  //      val === 'c03' ? setServive(true) : setServive(false);
  //   }
    // Set your color here
// const entering = (e) => {
//   console.log(e);
//   e.children[0].style.borderTopColor = 'green';
//   e.children[1].style.backgroundColor = 'green';
// };
  return (
    <Navbar expand="false">
       
      {/* copy starts */}
      {/* <div class="container">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
  </div> */}
 <Container fluid>
         <Navbar.Brand href="/dashboard"> 
          <div className='logo-container'>
          <Image src={logopic} alt="WCHL Logo" className='logo'/>  
          {/* d-inline-block align-top */}
          <div className='overlay'>
            
            <Image src={logotext} alt="WCHL Logo expanded" className='logotext'/> 
         
          </div>
          </div>
         
      {/* <img
              src={logopic}
              
              alt="WCHL Logo"
            /> */}
      <h4 className="nav-heading fw-bold">Dashboard</h4>
      </Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Container fluid> */}
   
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
       {/* <Nav className="me-auto">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="abc" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Image src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" class="rounded-circle" />
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="d">Dashboard</a>
          <a class="dropdown-item" href="e">Edit Profile</a>
          <a class="dropdown-item" href="l">Log Out</a>
        </div>
      </li>   
    </ul>
  </div>
  </Nav> */}
    {/* <Nav className="mx-auto" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      <Container className="justify-content-center w-auto">
      {/* w-75 */}
      <Row>
        <Col xs={12} xl={6}>
          {/* <Form.Label>Date Range</Form.Label> */}
          <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip className="form-tooltip-bottom">
              <strong>Date Range</strong>.
            </Tooltip>
          }
        >
          <div>
    <DatePickerRange />
    </div>
    </OverlayTrigger>
    </Col>
        <Col xs={12} xl={6}>
          {/* <Form.Label>Type of Calls</Form.Label> */}
          {/* show={true} */}
          <OverlayTrigger 
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip className="form-tooltip-bottom" >
              <strong>Type of Calls</strong>.
            </Tooltip>
          }
        >
          <div>
          {/* getValue={selectedValue} */}
    <SelectBox  size="sm" type="calls" option='Type of calls' call={calls} />
    </div>
    </OverlayTrigger>
    </Col>
        {/* <Col xs={12} xl={4} className='text-center'> 
        <Form.Label>Age Range</Form.Label>
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip className="tooltip-bottom">
              <strong>Age Range</strong>.
            </Tooltip>
          }
        >
          <Form>
      <Form.Group as={Row}>
        <Col xs="9">
      <Form.Range max={100}
            min={0} step="1" value={val}
            onChange={e => setVal(e.target.value)} />
            </Col>
        <Col xs="3">
          <Form.Control value={val}/>
        </Col>
        </Form.Group>
            </Form>
    </OverlayTrigger>
      </Col> */}
      </Row>
    </Container>
        {/* <Card className="justify-content-center p-3 card-design">
      <h5 className="fw-bold title-text mb-3">Select Criteria to View Report</h5>
      <Row className="gy-3"> 
      <Col xl={12} className="mb-2">
        <Form.Label>Date Range</Form.Label>
    <DatePickerRange />
    </Col>
    <Col xl={12} className="mb-2"> 
    <Form.Label>Type of Calls</Form.Label>
    <SelectBox  size="sm" type="calls" option='Type of calls' call={calls} getValue={selectedValue}/>
    </Col>
    <Col xl={12} className="mb-2"> 
    <Button className="btn-sm float-end btn-style" variant="primary" type="submit">
        View
    </Button>
    </Col>
    </Row>
    </Card> */}
{/* <Nav pullRight className="me-auto">
            <NavDropdown eventKey={1} 
                title={
                    <div className="pull-left">
                        <img className="thumbnail-image" 
                            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                            alt="user pic"
                        />
                        Divya
                    </div>
                } 
                id="basic-nav-dropdown">

                <NavDropdown.Item eventKey={1.1} href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item divider />
                <NavDropdown.Item eventKey={1.3}>
                    <i className="fa fa-sign-out"></i> Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav> */}
 <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}><Image src={userpic} alt="User Icon" className="avatar"/> </Dropdown.Toggle>
      <Dropdown.Menu className="profile-view">
        <Dropdown.Item>
          {/* Hello there! */}
          <div class="menu-item px-3">
        <Row class="menu-content px-3">
            
            <Col xs={12} xl={3} class="symbol me-5">
                <Image src={userpic} alt="User Icon" className="avatar"/>
            </Col>

            <Col xs={12} xl={9}>
                <div class="fw-bold user-name">
                    Admin           
                </div>

                <a href="mail" class="text-muted mail-id">
                admin123@gmail.com              
                </a>
            </Col>
        </Row>
    </div>
        </Dropdown.Item>
        <div class="separator my-1"></div>
        <Dropdown.Item>
           <span className="user-action">Profile Settings</span>
          </Dropdown.Item>
          <Dropdown.Item>
          <span className="user-action">Log Out</span>
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

{/* <NavDropdown title="Profile" id="basic-nav-dropdown">
  <Image src={logopic} alt="WCHL Logo" className='logo'/> 
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
    </Container>
  </Navbar>
  )
}

export default Header