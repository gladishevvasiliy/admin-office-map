import * as React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./style.css";
const TopNavigation = ({ changeOffice }) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Admin Office Map</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Офис" id="basic-nav-dropdown">
          <MenuItem onClick={() => changeOffice(1)} eventKey={1.1}>
            2 этаж. 1 офис.
          </MenuItem>
          <MenuItem onClick={() => changeOffice(2)} eventKey={1.2}>
            2 этаж. 2 офис.
          </MenuItem>
          <MenuItem eventKey={1.3}>3 этаж. 1 офис.</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNavigation;
