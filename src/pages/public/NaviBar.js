import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
class NaviBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="pink" variant="light" >
        <Navbar.Brand href="/react-page-new/" bsPrefix="name"><span style={{ color: "rgb(218, 129, 14)" }}>You</span> Xiong</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/react-you1/" bsPrefix="tag">Home</Nav.Link>
            <Nav.Link href="/react-page2/" bsPrefix="tag">Resume</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default NaviBar;
