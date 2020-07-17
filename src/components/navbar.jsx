import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Media,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="myNav" color="white" expand="md" fixed="top">
        <NavbarBrand href="/">
            <img src="../../assets/casa2.png" width="200" height="50" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-4">
              <Link className="link cursive nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem className="mr-4">
              <Link className="link cursive nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem className="mr-4">
              <Link className="link cursive nav-link" to="/archive">Archive</Link>
            </NavItem>
            <NavItem className="mr-4">
              <Link className="link cursive nav-link" to="/contact">Contact</Link>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;