import { useState, useEffect, useCallback, use } from "react";
import { ModificarUsuario } from "./modificarUsuario";
import Button from 'react-bootstrap/Button';
//import{BuscarJuego}from "./BuscarJuego";

function FormulariosWeb() {
  const [usuarios, setUsuarios] = useState([]);

  const [formulario, setFormulario] = useState({
    id: "",
    nombreUsuario: "",
    email: "",
    estado: true,
    modificado: true,
  });

  //tal vez llamar a la BD para cargar los juegos ya almacenados
  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  }

  const agregarUsuario = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      ...formulario,
      id: Date.now(),
      nombreUsuario: formulario.nombreUsuario,
      email: formulario.email,
    }
    setUsuarios([...usuarios, nuevoUsuario]);
    setFormulario({
      id: "",
      nombreUsuario: "",
      email: "",
      estado: true,
      modificado: true,
    });
  };

  /*
  */
  const agregar_modificado = (usuario_modificado) => {
    const nuevo_arreglo = usuarios.map(j => {
      if (j.id === usuario_modificado.id) {
        return usuario_modificado;
      }
      return j;
    }
    )
    setUsuarios(nuevo_arreglo)
  };

  const modificar = useCallback((j) => { //useCollback memoriza la funcion
    setUsuarios((prevJuegos) =>
      prevJuegos.map(a => a.id === j.id ? { ...a, modificado: !a.modificado } : a
      ));
  }, []);
  /*
  */

  return (
    <>
      <div className="m-3 text-center">
        <h2>Ingrese un nombre de usuario</h2>
        <form onSubmit={agregarUsuario}>
          {/* name debe coincidir con la propiedad en el estado: nombreUsuario */}
          <input type="text" name="nombreUsuario"
            placeholder="Nombre de Usuario" value={formulario.nombreUsuario} onChange={handleChange} required />
          <h2>Ingrese un correo electronico</h2>
          <input type="text" name="email" placeholder="Correo electronico" value={formulario.email} onChange={handleChange} required />
          
          <div className="center gap-2 mb-2 m-3">
            <Button type="sumit" variant="primary" size="lg">Confirmar</Button>
          </div>

        </form>
      </div>

      {usuarios.length > 0 && <h2 className="bg-primary text-center text-light rounded-4">Usuarios hasta ahora</h2>}
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.modificado === false ? (
              <ModificarUsuario juego={u} funcion_modificar={agregar_modificado}></ModificarUsuario>
            ) : (
              <div>
                ID: {u.id} -
                Nombre: {u.nombreUsuario} -
                Email: {u.email} -
              </div>
            )}
            <Button variant="primary" size="sm" onClick={() => modificar(u)}>Modificar</Button>
          </li>
        ))}
      </ul>
    </>
  )

};
export default FormulariosWeb;