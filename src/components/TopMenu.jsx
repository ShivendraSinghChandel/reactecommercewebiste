import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const TopMenu=()=>{
  const mydata=useSelector((state)=>state.ourcart.cart);
  const [searchdata,setSearchdata]=useState("");
  let datacount=mydata.length;
  const navigate=useNavigate();

  const mycart=()=>{
    navigate("/mycart")
  }

  const handleSearch=()=>{
    navigate(`searchdata/${searchdata}`)
  }

    return(
        <>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">HatStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="products">Products</Nav.Link>
            <Nav.Link as={Link} to="sale">Sale</Nav.Link>
            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="men" >Men's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="women" >Women's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="kids" >Kids's</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <input type="search" value={searchdata} onChange={(e)=>{setSearchdata(e.target.value)}} style={{height:"30px",paddingLeft:"10px",marginTop:"10px",borderRadius:"50px 0px 0px 50px",border:"2px solid black",outline:"none"}} />
            <Nav.Link onClick={handleSearch} style={{height:"30px",marginTop:"10px",borderRadius:"0px 50px 50px 0px",backgroundColor:"black"}} >< IoSearch style={{marginBottom:"15px",color:"white"}} /></Nav.Link>
            <Nav.Link ><FaUserLarge /></Nav.Link>
            <Nav.Link onClick={mycart} ><FaShoppingCart /><sup>{datacount}</sup></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default TopMenu;