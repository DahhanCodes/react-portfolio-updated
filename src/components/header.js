import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function header() {
    console.log()
    return (
        <Navbar bg="dark" expand="lg" fixed="top" className="">
            <Container >
                <Navbar.Collapse id="basic-navbar-nav " className=" flex-grow-0">
                    <Nav variant="tabs" className="mr-auto ">

                        <NavLink to="./" className="mx-md-3 nav-link mx-2 text-primary">
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="./AboutMe" className="mx-md-3 nav-link mx-2 text-primary">
                            <span> About Me</span>
                        </NavLink>
                        <NavLink to="./MyWork" className="mx-md-3 nav-link mx-2 text-primary">
                            <span>My Work</span>
                        </NavLink>
                        <NavLink to="./MyResume" className="mx-md-3 nav-link mx-2 text-primary">
                            <span>My Resume</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header;