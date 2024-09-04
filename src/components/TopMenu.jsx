import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const TopMenu=()=>{
    return(
        <>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://themewagon.github.io/MiniStore/images/main-logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="products">Products</Nav.Link>
            <Nav.Link as={Link} to="watches">Watches</Nav.Link>
            <Nav.Link as={Link} to="sale">Sale</Nav.Link>
            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item >Kids Watches</NavDropdown.Item>
              <NavDropdown.Item >Mens Watches</NavDropdown.Item>
              <NavDropdown.Item >Girls Watches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Premium Watches
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link ><IoSearch /></Nav.Link>
            <Nav.Link ><FaUserLarge /></Nav.Link>
            <Nav.Link ><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default TopMenu;