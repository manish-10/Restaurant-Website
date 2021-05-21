import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, } from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" height="30" width="41" alt="Risotorante Con Fusion" /></NavbarBrand>

          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>

              <NavItem >
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span>{" "} Home
                </NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span>{" "}About Us
                </NavLink>
                </NavItem>

              <NavItem >
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span>{" "}Menu
                  </NavLink>
              </NavItem>
              <NavItem >
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span>{" "}Contact
                </NavLink>
              </NavItem>
              <NavItem>
              <a href="https://rzp.io/l/I8qNtpm" target="_blank"><Button color="primary">Donate Now</Button></a>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}


export default Header;