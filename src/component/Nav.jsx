import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo1.svg'
import Navbutton from './Navbutton';
import '../App.css'
import { Link } from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navs() {
    
  return (
    <>
      {['md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className="  mb-3 nav-container w-100 px-2 ">
          <Container fluid>
            <Navbar.Brand >
                 <img src= {logo}   width="100"
              height="30"
              className="d-inline-block align-top logo" title="Home" alt="home"  />

            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 fs-5  nav-content pt-3">

                  <div className='link'  ><Navbutton title="Home" to="/Home" /></div>
                  <div className='link'  ><Navbutton title="Landlord" to="/Landlord" /></div>
                  <div className='link'  ><Navbutton title="Ternant" to="/Ternant" /></div>
                  <div className='link'  ><Navbutton title="Contact us" to="/Contactus" /></div>
                  {/* <Link className='link' to='/cart'><BsFillCartPlusFill size={20}/></Link> */}

                </Nav>

                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navs;


