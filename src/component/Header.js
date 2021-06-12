import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { Close, Menu, Lock, PersonAdd } from '@material-ui/icons';
import './css/header.css';

export default function Header() {
    const [open, setOpen] = useState(false);

    function handleDrawerOpen() {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
        console.log('Open');
    }

    function handleDrawerClose() {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
        console.log('Close');
    }

    return (
        <div className="header">
            <Navbar className="custom__navbar">
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src="https://react-bootstrap.github.io/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Nav className="nav__links">
                    <Link to="/">Home</Link>
                    <Link to="/add-movie">Add Movie</Link>
                    <Link to="/update-movie">Update Movie</Link>
                </Nav>
                <Nav.Item className="ml-auto">
                    <div className="nav__links">
                        <Link to="/login"><Lock className="mr-1" />Login</Link>
                        <Link to="/register"><PersonAdd className="mr-1" />Register</Link>
                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={open === true ? handleDrawerClose : handleDrawerOpen}
                        edge="start"
                        className="mobile__toggelBtnWrapper"
                    >
                        {
                            open === true ? <Close className="mobile__toggelBtn" /> : <Menu className="mobile__toggelBtn" />
                        }
                    </IconButton>
                </Nav.Item>
            </Navbar>
        </div>
    )
}
