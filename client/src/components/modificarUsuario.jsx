import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ModificarUsuario = ({ juego: usuario, funcion_modificar , cancelar }) => {
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [email, setEmail] = useState("");
    


    const cambiaNombreUsuario = (event) => { setNombreUsuario(event.target.value); }
    const cambiaEmail = (event) => { setEmail(event.target.value); }
    

    const usuario_mod = {
        id: usuario.id,
        nombreUsuario: nombreUsuario === "" ? usuario.nombre : nombreUsuario,
        email: email === "" ? usuario.email : email,
        modificado: false
    }

    return (
        <>
            <div>
                ID = {usuario.id}
                Nombre = <input placeholder={usuario.nombre} type="text"onChange={cambiaNombreUsuario} />
                Email = <input placeholder={usuario.email} type="text" onChange={cambiaEmail} />   
            </div>
            
            <Button variant="primary" size="sm" onClick={() => funcion_modificar(usuario_mod)}>Guardar</Button>
        </>
    )
}