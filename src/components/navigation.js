"use strict"

const React = require('react');

const { Navbar, NavItem, Nav } = require('react-bootstrap');
const { LinkContainer } = require('react-router-bootstrap');
const { navbarStyle } = require('./styles/styles')

const Navigation = React.createClass({

    render() {
      return (
        <Navbar collapseOnSelect style={navbarStyle}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">API Callz</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/movies">
                <NavItem eventKey={1}>Movies</NavItem>
              </LinkContainer>
              <LinkContainer to="/maps">
                <NavItem eventKey={2}>Maps</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
});

module.exports = Navigation
