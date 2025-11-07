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
                <Navbar expand="lg" className="bg-body-tertiary ">
                    <Container className='bg-warning w-100 '>
                        <Navbar.Brand href="/">Trabajo final</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ">
                                <Nav.Link href="/">Home</Nav.Link>
                                {isAuthenticated && user?.role === 'ADMINISTRATIVO' && (
                                    <Nav.Link href="/games">Games</Nav.Link>
                                )}
                                <NavDropdown title="Ejemplo" id="ejemplo-dropdown">
                                    {isAuthenticated && user?.role === 'ADMINISTRATIVO' && 
                                    (<Nav.Link href="/games">Games2</Nav.Link>)
                                    || user?.role === 'ALUMNO'
                                    && (<Nav.Link href="/aboutus">AboutUs2</Nav.Link>)}
                                </NavDropdown>
                                <NavDropdown title="Trabajos" id="trabajos-dropdown">
                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 2</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp2ej1">Comparador de Números</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej2">Registro de mascotas</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej3">Cadena de caracteres (?)</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej4">Formulario de inscripción </NavDropdown.Item>
                                            <NavDropdown.Item href="/tp2ej5">Simulador de Salario</NavDropdown.Item>
                                        </div>
                                    </div>

                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 3</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp3ej1">Ejercicio 1</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp3ej2">Ejercicio 2</NavDropdown.Item>
                                        </div>
                                    </div>

                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 4</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp4ej1">Adivina el número</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp4ej2">Juego de botónes</NavDropdown.Item>
                                        </div>
                                    </div>

                                    <div className="dropdown-submenu">
                                        <span className="dropdown-item">Trabajo Practico 5</span>
                                        <div className="submenu">
                                            <NavDropdown.Item href="/tp5ej1">Atrapar la estrella</NavDropdown.Item>
                                            <NavDropdown.Item href="/tp5ej2">Formulario</NavDropdown.Item>
                                        </div>
                                    </div>
                                    
                                </NavDropdown>
                                <Nav.Link href="/aboutus">Nosotros</Nav.Link>
                                <Nav.Link href="/formulario">Formulario</Nav.Link>
                                <Nav.Link href="/registro">Registro</Nav.Link>
                                 {isAuthenticated ?
                                (<Button variant="outline-success" onClick={manejarLogout}>Logout</Button>)
                                : (<Nav.Link href="/">Login</Nav.Link>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;
