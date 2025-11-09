import { Navigate } from "react-router-dom";
import { useAutorizacion } from "../hooks/useAutorizacion.js";
import {Spinner, Container, Alert, Nav} from "react-bootstrap";

const ProtectorRutas = ({allowedRoles, children}) => {
    const {isAuthenticated, user } = useAutorizacion();

    /*
    // 1. Mostrar un spinner mientras se carga el estado de autenticacion
    if (isLoading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando autenticacion...</span>
                </Spinner>
                <p className="mt-2">Verificando sesion...</p>
            </Container>
        );
    }
    */

    // 2. Si no esta autenticado, redirigir al login
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // 3. Si esta autenticado, verifica el rol (si se especificaron los roles permitidos)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    // 4. Si esta autenticado y autorizado por rol, renderizar el componente hijo
    return children;
};

export default ProtectorRutas;