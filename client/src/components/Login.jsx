import { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { useAutorizacion } from "../hooks/useAutorizacion.js";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    // obtiene la funcion de login, esstado de auth y user
    const { login, isAuthenticated, user } = useAutorizacion();


    // redirigir si ya esta autenticado
    useEffect(() => {
        if (isAuthenticated) {
            if (user.role === "ADMINISTRATIVO") {
                navigate("/", { replace: true });
            } else if (user.role === "ALUMNO") {
                navigate("/", { replace: true });
            } else {
                navigate("/error", { replace: true });
            }
        }
    }, [isAuthenticated, navigate, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError(''); // resetear error previo

        if (!username || !password) {
            setLoginError("Por favor ingrese usuario y contraseña");
            return;
        }
        const result = await login({ username, password });
        if (!result.success) {
            setLoginError(result.message || "Error en el login");
        }
    };

    return (
        <Container
            fluid className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "1vh" }}>
            <Card style={{ width: '100%', maxWidth: '400px' }} className="shadow-sm">
                <Card.Body className="p-4">
                    <Card.Title as="h2" className="text-center mb-4">
                        Iniciar Sesión
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBaseicUsername">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text" placeholder="Ingrese su usuario"
                                value={username} onChange={(e) => setUsername(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password" placeholder="Ingrese su contraseña"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                required />
                        </Form.Group>

                        {loginError && (
                            <Alert variant="danger" className="mt-3">
                                {loginError}
                            </Alert>
                        )}
                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Iniciar Sesión
                        </Button>
                        <Button variant="primary" className="w-100 mt-3" onClick={() => navigate('/registro')}>
                            Crear Cuenta
                        </Button>
                        
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};