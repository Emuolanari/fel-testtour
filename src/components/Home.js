import React from 'react';
//import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Menu from './inc/Menu';
import Skills from './inc/Skills';
import Bio from './inc/Bio';

const Home = () => {
    return (
        <div>
            <Menu />
            <Bio />
            <Skills />
        </div>
    )
}

export default Home
