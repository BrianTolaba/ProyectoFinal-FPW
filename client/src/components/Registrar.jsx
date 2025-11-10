import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from "axios"
import { set } from 'mongoose';

//const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 2

const PASSWORD_REGEX = {
    minLength: /^.{8,}$/,
    uppercase: /(?=.*[A-Z])/,
    lowercase: /(?=.*[a-z])/,
    number: /(?=.*\d)/,
    isValid: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
};

function FormularioRegistro() {

    const [regError, setRegError] = useState('');
    const [validado, setValidado] = useState(false);
    const [usuarios, setUsuarios] = useState([]);
    const [erroresPassword, setErroresPassword] = useState({
        minLength: false,
        uppercase: false,
        lowercase: false,
        number: false
    });
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        username: '',
        password: '',
        estado: true,
        role: 'ALUMNO'
        //fechaNacimiento
        //condicion
    });




    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setUsuario(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (name === 'password') {
            setErroresPassword({
                minLength: !PASSWORD_REGEX.minLength.test(value),
                uppercase: !PASSWORD_REGEX.uppercase.test(value),
                lowercase: !PASSWORD_REGEX.lowercase.test(value),
                number: !PASSWORD_REGEX.number.test(value),
            });
        }
    };

    const manejarSubmit = async (e) => {
        setRegError('');
        const form = e.currentTarget;
        const passwordValido = PASSWORD_REGEX.isValid.test(usuario.password);

        e.preventDefault();
        //event.stopPropagation();
        if (form.checkValidity() === false || !passwordValido) {
            setValidado(true);
            alert('Error en el formulario de registro');

        } else {
            alert('Formulario enviado con exito ' + usuario.apellido);
            //const nuevoUsuario = {
            // id: Date.now(),
            //...usuario

            try {
                const response = await axios.post('/api/registrarUsuario', usuario);
                if (response.data.success) {
                    console.log('Usuario registrado con exito en la BD.');
                } else {
                    setRegError(response.data.message || 'Error al registrar el usuario. Intente nuevamente.');
                }
            } catch (error) {
                console.error('Error de registro o conexion: ', error);
                setRegError(error.message || 'fallo de conexion. Intentelo mas tarde');
            }

            setUsuario({ nombre: '', apellido: '', username: '', password: '' });
            setValidado(false);
            setErroresPassword({ minLength: false, uppercase: false, lowercase: false, number: false });
        }
    };
    // Aqui iria lagica backend
    //setUsuarios(prevLista => [...prevLista, nuevoUsuario]);
    // setUsuario({ nombre: '', apellido: '', username: '', password: '' });
    //setValidado(false);
    // 2
    /*
    setErroresPassword({ minLength: false, uppercase: false, lowercase: false, number: false });
    */

const passwordInvalido = Object.values(erroresPassword).some(error => error);

return (
    <Form noValidate validated={validado} onSubmit={manejarSubmit} className="p-4" border rounded="4">
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validacionNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={manejarCambio}
                    placeholder="Ingrese su nombre"
                />
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese su nombre.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validacionApellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    required
                    type="text"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={manejarCambio}
                    placeholder="Ingrese su apellido"
                />
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese su apellido.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="validacionUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
                required
                type="text"
                name="username"
                value={usuario.username}
                onChange={manejarCambio}
                placeholder="Ingrese su usuario"
                minLength="5"  // Validacion de HTML5para minimo de 5 caracteres
            />
            <Form.Control.Feedback type="invalid">
                El nombre de usuario es requerido y debe tener al menos 5 caracters.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validacionPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                required
                type="password"
                name="password"
                value={usuario.password}
                onChange={manejarCambio}
                placeholder="Ingrese su contraseña"
                minLength="8"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
            />
            <Form.Control.Feedback type="invalid">
                La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número.
            </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Registrar</Button>
    </Form>
);
}

export default FormularioRegistro;

/*
<Form.Group className="mb-3" controlId="validacionPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    required
                    type="password"
                    name="password"
                    value={usuario.password}
                    onChange={manejarCambio}
                    placeholder="Ingrese su contraseña"
                    isInvalid={validado && passwordValido}
                />
                <Form.Control.Feedback type="invalid" className={validado && passwordInvalido ? 'd-block' : ''}>
                    <p className="mb-1 text-bold">La contraseña debe cumplir con:</p>

                    <small className={erroresPassword.minLength ? 'text-danger' : 'text-success'}>
                        {erroresPassword.minLength ? 'No cumple' : 'Cumple'} Al menos 8 caracteres.
                    </small><br />
                    <small className={erroresPassword.uppercase ? 'text-danger' : 'text-success'}>
                        {erroresPassword.uppercase ? 'No cumple' : 'Cumple'} Al menos una letra mayúscula.
                    </small><br />
                    <small className={erroresPassword.lowercase ? 'text-danger' : 'text-success'}>
                        {erroresPassword.lowercase ? 'No cumple' : 'Cumple'} Al menos una letra minúscula.
                    </small><br />
                    <small className={erroresPassword.number ? 'text-danger' : 'text-success'}>
                        {erroresPassword.number ? 'No cumple' : 'Cumple'} Al menos un número.
                    </small>
                </Form.Control.Feedback>
            </Form.Group>
            */