import { useState, useEffect, useCallback, use } from "react";
import {ModificarUsuario} from "./modificarUsuario";
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

  const modificar=useCallback((j)=>{ //useCollback memoriza la funcion
      setUsuarios((prevJuegos)=>
      prevJuegos.map(a=>a.id===j.id?{...a,modificado: !a.modificado}:a
      ));
  },[]);
  /*
  */
 
  return (
    <>
      <form onSubmit={agregarUsuario}>
        {/* name debe coincidir con la propiedad en el estado: nombreUsuario */}
        <input type="text" name="nombreUsuario"
          placeholder="Nombre" value={formulario.nombreUsuario} onChange={handleChange} required />
          
        <input type="text" name="email"
          placeholder="Su correo pues" value={formulario.email} onChange={handleChange} required />

       

        <button type="submit">Agregar</button>

      </form>
      {usuarios.length > 0 && <h2>Lista</h2>}
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
            <button onClick={() => modificar(u)}>Modificar</button>
          </li>
        ))}
      </ul>
    </>
  )

};
export default FormulariosWeb;