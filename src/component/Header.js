import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { IconButton, Avatar, Popper, MenuItem, MenuList, Grow, Paper, ClickAwayListener, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Close, Menu, Lock, PersonAdd, ExitToApp, AccountCircle } from '@material-ui/icons';
import './css/header.css';

export default function Header(props) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'))

    const history = useHistory();

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    function handleDrawerOpen() {
        if (openDrawer) {
            setOpenDrawer(false)
        } else {
            setOpenDrawer(true)
        }
        console.log('Open');
    }

    function handleDrawerClose() {
        if (setOpenDrawer) {
            setOpenDrawer(false)
        } else {
            setOpenDrawer(true)
        }
        console.log('Close');
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        history.push('/login');
    }

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <div className="header">
            <Navbar className={`${props.navbar} custom__navbar`}>
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
                    {
                        localStorage.getItem('user') &&
                        <>
                            <Link to="/add-movie">Add Movie</Link>
                            <Link to="/update-movie">Update Movie</Link>
                        </>
                    }
                </Nav>
                <Nav.Item className="ml-auto">
                    <div className="nav__links">
                        {
                            !localStorage.getItem('user') ?
                                <>
                                    <Link to="/login"><Lock className="mr-1" />Login</Link>
                                    <Link to="/register"><PersonAdd className="mr-1" />Register</Link>
                                </>
                                :
                                <>
                                    <Avatar alt={user?.name} className={`${classes.small} ml-1`} src="/static/images/avatar/1.jpg" />
                                    <Button>
                                        <p ref={anchorRef}
                                            aria-controls={open ? 'menu-list-grow' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle} className="logged__user ml-2">
                                            {
                                                user?.name
                                            }
                                        </p>
                                    </Button>
                                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                            >
                                                <Paper className="adminName__popup">
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                            <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>
                                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                    <a className="logout__btn ml-2" onClick={handleLogout}><ExitToApp className="mr-1" />Logout</a>
                                </>
                        }
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
