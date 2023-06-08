import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Sidebar from "react-bootstrap-sidebar-menu";

const SideMenu = () => {
  return (
    <Navbar>
      <Navbar.Brand href="/">MyBrand</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          ABC
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //     <Sidebar variant="light" bg="light" expand="sm">
    //     <Sidebar.Collapse>
    //       <Sidebar.Header>
    //         <Sidebar.Brand>Logo</Sidebar.Brand>
    //         <Sidebar.Toggle />
    //       </Sidebar.Header>
    //       <Sidebar.Body>
    //         <Sidebar.Nav>
    //           <Sidebar.Nav.Link eventKey="menu_title">
    //             <Sidebar.Nav.Icon>1</Sidebar.Nav.Icon>
    //             <Sidebar.Nav.Title>Menu Title</Sidebar.Nav.Title>
    //           </Sidebar.Nav.Link>
    //           <Sidebar.Sub eventKey={0}>
    //             <Sidebar.Sub.Toggle>
    //               <Sidebar.Nav.Icon />
    //               <Sidebar.Nav.Title>Submenu</Sidebar.Nav.Title>
    //             </Sidebar.Sub.Toggle>
    //             <Sidebar.Sub.Collapse>
    //               <Sidebar.Nav>
    //                 <Sidebar.Nav.Link eventKey="sum_menu_title">
    //                   <Sidebar.Nav.Icon>1.1</Sidebar.Nav.Icon>
    //                   <Sidebar.Nav.Title>Sub menu item</Sidebar.Nav.Title>
    //                 </Sidebar.Nav.Link>
    //               </Sidebar.Nav>
    //             </Sidebar.Sub.Collapse>
    //           </Sidebar.Sub>
    //         </Sidebar.Nav>
    //       </Sidebar.Body>
    //     </Sidebar.Collapse>
    //   </Sidebar>
  );
};

export default SideMenu;
