import { useState, useEffect, useCallback, use } from "react";
import {ModificarJuego} from "./modificarFormulario";
//import{BuscarJuego}from "./BuscarJuego";

function FormulariosWeb() {
  const [juegos, setJuegos] = useState([]);

  const [formulario, setFormulario] = useState({
    id: "",
    nombre: "",
    precio: "",
    tipo: "",
    estado: true,
    modificado: true,
  });

  //tal vez llamar a la BD para cargar los juegos ya almacenados
  useEffect(() => {
    console.log(juegos);
  }, [juegos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  }

  const agregarJuego = (e) => {
    e.preventDefault();
    const nuevoJuego = {
      ...formulario,
      id: Date.now(),
      nombre: formulario.nombre,
      precio: parseFloat(formulario.precio),
      tipo: formulario.tipo,
    }
    setJuegos([...juegos, nuevoJuego]);
    setFormulario({
      id: "",
      nombre: "",
      precio: "",
      tipo: "",
      estado: true,
      modificado: true,
    });
  };

  /*
  */
  const agregar_modificado = (juego_modificado) => {
    const nuevo_arreglo = juegos.map(j => {
      if (j.id === juego_modificado.id) {
        return juego_modificado;
      }
      return j;
    }
    )
    setJuegos(nuevo_arreglo)
  };

  const modificar=useCallback((j)=>{ //useCollback memoriza la funcion
      setJuegos((prevJuegos)=>
      prevJuegos.map(a=>a.id===j.id?{...a,modificado: !a.modificado}:a
      ));
  },[]);
  /*
  */
 
  return (
    <>
      <form onSubmit={agregarJuego}>
        <input type="text" name="nombre"
          placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
          
        <input min="0" type="number" name="precio"
          placeholder="Precio Unitario" value={formulario.precio} onChange={handleChange} required />

        <input type="text" name="tipo"
          placeholder="Tipo" value={formulario.tipo} onChange={handleChange} required />

        <button type="submit">Agregar</button>

      </form>
      {juegos.length > 0 && <h2>Lista</h2>}
      <ul>
        {juegos.map((j) => (
          <li key={j.id}>
            {j.modificado === false ? (
              <ModificarJuego juego={j} funcion_modificar={agregar_modificado}></ModificarJuego>
            ) : (
            <div>
              ID: {j.id} -
              Nombre: {j.nombre} -
              Precio: ${j.precio} -
              Tipo: {j.tipo}
            </div>
            )}
            <button onClick={() => modificar(j)}>Modificar</button>
          </li>
        ))}
      </ul>
    </>
  )

};
export default FormulariosWeb;