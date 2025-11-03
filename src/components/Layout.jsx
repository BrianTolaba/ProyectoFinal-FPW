import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import '../assets/css/CustomDropdown.css';

import { useNavigate } from 'react-router-dom';
import { useAutorizacion } from '../hooks/useAutorizacion.js';

function Layout() {

    const {user, isAuthenticated, logout} = useAutorizacion();
    const navigate = useNavigate();
    const manejarLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <>
            <header>
                <h1>Menu</h1>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">Trabajo final</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/games">Games</Nav.Link>

                                <NavDropdown title="Trabajos" id="trabajos-dropdown">
                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 2</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp2ej1">Ejercicio 1</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej2">Ejercicio 2</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej3">Ejercicio 3</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej4">Ejercicio 4</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej5">Ejercicio 5</NavDropdown.Item>
                                        </div>
                                    </div>
                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 3</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp3ej1">Ejercicio 1</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp3ej2">Ejercicio 2</NavDropdown.Item>
                                        </div>
                                    </div>
                                    <NavDropdown.Item href="/tp4">Trabajo Practico 4</NavDropdown.Item>
                                    <NavDropdown.Item href="/tp5">Trabajo Practico 5</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/aboutus">AboutUs</Nav.Link>
                                <Nav.Link href="/formulario">Formulario</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <h1>Cuerpo</h1>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;
