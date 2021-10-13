import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavbarComp = () => {
  return (
    <Router>
      <div>
        <Navbar bg="info" expand="lg" className="p-3">
          <Navbar.Brand href="#">
            {" "}
            <img
              src='/logo.png'
              className="img-responsive"
              alt="logo"
              height="60"
              width="120"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/pets">
                Pets
              </Nav.Link>
              <Form className="d-flex input-group w-auto">
                <FormControl
                  type="search"
                  placeholder="Search pets..."
                  className="ml-2 "
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/home"></Route>
          <Route path="/pets"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavbarComp;