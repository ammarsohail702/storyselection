import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">

        <img width={80} src="https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/unnamed%20(4)-071ffbb.png/:/rs=w:199,h:200,cg:true,m/cr=w:199,h:200/qt=q:95" alt="" srcset="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#deets">HOME</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          PASSAGE PARCHMENTS
          </Nav.Link>
          <Nav.Link href="#features">GOVERNANCE & RECRIPROCOIN</Nav.Link>
          <Nav.Link href="#pricing">WRITERS /ARTIST</Nav.Link>
          <NavDropdown title="MORE" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Whitepaper</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              DAO (MEMBERS ONLY)
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header