import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/Logo.svg';
import { HeaderStyle, NavItem } from './styles/headerElementStyles';
import { LinkContainer } from 'react-router-bootstrap';
import { theme } from '../Theme/theme';
import { ThemeProvider } from 'styled-components';
import { RouterProps } from 'react-router';

interface Props extends RouterProps {}

export const Header = (props: Props) => {
    if (props.history.location.pathname === '/') {
        return (
            <ThemeProvider theme={theme}>
                <HeaderStyle>
                    <Navbar expand="lg" className="navbar">
                        <div className="brand-wrapper">
                            <Navbar.Brand href="#home">
                                <LinkContainer to="/">
                                    <img src={logo} alt="Logo" />
                                </LinkContainer>
                            </Navbar.Brand>
                        </div>
                        <div className="navbar-wrapper">
                            <Nav activeKey="/home" className="nav-main">
                                <LinkContainer to="/">
                                    <NavItem
                                        primary={
                                            props.history.location.pathname ===
                                            '/'
                                                ? 'true'
                                                : 'false'
                                        }>
                                        All Contacts
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/favorites">
                                    <NavItem primary={'false'}>
                                        My favorites
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                        </div>
                    </Navbar>
                </HeaderStyle>
            </ThemeProvider>
        );
    } else if (props.history.location.pathname === '/favorites') {
        return (
            <ThemeProvider theme={theme}>
                <HeaderStyle>
                    <Navbar expand="lg" className="navbar">
                        <div className="brand-wrapper">
                            <Navbar.Brand href="#home">
                                <LinkContainer to="/">
                                    <img src={logo} alt="Logo" />
                                </LinkContainer>
                            </Navbar.Brand>
                        </div>
                        <div className="navbar-wrapper">
                            <Nav activeKey="/home" className="nav-main">
                                <LinkContainer to="/">
                                    <NavItem primary={'false'}>
                                        All Contacts
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/favorites">
                                    <NavItem primary={'true'}>
                                        My favorites
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                        </div>
                    </Navbar>
                </HeaderStyle>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <HeaderStyle>
                    <Navbar expand="lg" className="navbar">
                        <div className="brand-wrapper">
                            <Navbar.Brand href="#home">
                                <LinkContainer to="/">
                                    <img src={logo} alt="Logo" />
                                </LinkContainer>
                            </Navbar.Brand>
                        </div>
                    </Navbar>
                </HeaderStyle>
            </ThemeProvider>
        );
    }
};
