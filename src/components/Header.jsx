import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logopic from "../assets/images/logo.webp";
import logotext from "../assets/images/logo-text.webp";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import userpic from "../assets/images/user.webp";

const Header = () => {
  return (
    <Navbar expand="false">
      <Container fluid>
        <Navbar.Brand href="/dashboard">
          <div className="logo-container">
            <Image src={logopic} alt="WCHL Logo" className="logo" />
            {/* d-inline-block align-top */}
            <div className="overlay">
              <Image
                src={logotext}
                alt="WCHL Logo expanded"
                className="logotext"
              />
            </div>
          </div>
          <h4 className="nav-heading fw-bold">Dashboard</h4>
        </Navbar.Brand>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>
            <Image src={userpic} alt="User Icon" className="avatar" />{" "}
          </Dropdown.Toggle>
          <Dropdown.Menu className="profile-view">
            <Dropdown.Item>
              <div class="menu-item px-3">
                <Row class="menu-content px-3">
                  <Col xs={12} xl={3} class="symbol me-5">
                    <Image src={userpic} alt="User Icon" className="avatar" />
                  </Col>

                  <Col xs={12} xl={9}>
                    <div class="fw-bold user-name">Admin</div>

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
            <Dropdown.Item href="/manageUser">
              <span className="user-action">Manage Users</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="user-action">Log Out</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
