import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

//Logo
import LogoImage from "./Logo";

function Header() {
    return (
        <Navbar className="Header-Container" expand="lg">
            <Navbar.Brand to="/">
                <LogoImage/>
                <h1 className="Logo-Title">La Chapelle-Curreaux</h1>
            </Navbar.Brand>
            <Navbar.Toggle className="Button-Toggle" aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="Nav">
                    <Nav.Link className="Link-Collapse" ><Link to="/">Accueil</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/info">Info</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/contact">Contact</Link></Nav.Link>
                    <a className="Link-Collapse Link-Auth" href="https://localhost:8000/login"><FaUserAlt/></a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

