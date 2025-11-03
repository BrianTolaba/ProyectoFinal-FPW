import { useState } from "react";

export const ModificarJuego = ({ juego, funcion_modificar , cancelar }) => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);
    const [tipo, setTipo] = useState("");
    const [estado, setEstado] = useState("");


    const cambiaNombre = (event) => { setNombre(event.target.value); }
    const cambiaPrecio = (event) => { setPrecio(event.target.value); }
    const cambiaTipo = (event) => { setTipo(event.target.value); }
    const cambiaEstado = (event) => { setEstado(event.target.value); }

    const producto_mod = {
        id: juego.id,
        nombre: nombre === "" ? juego.nombre : nombre,
        precio: precio === 0 ? juego.precio : precio,
        tipo: tipo === "" ? juego.tipo : tipo,
        estado: estado === "" ? juego.estado : estado,
        modificado: false
    }

    return (
        <>
            <div>
                ID = {juego.id}
                Nombre = <input placeholder={juego.nombre} type="text"onChange={cambiaNombre} />
                Precio = <input placeholder={juego.precio} type="number" onChange={cambiaPrecio} />
                Tipo = <input placeholder={juego.tipo} type="text" onChange={cambiaTipo} />
                Estado = <input placeholder={juego.estado} type="text" onChange={cambiaEstado} />

                <button onClick={() => funcion_modificar(producto_mod)}>Guardar</button>
            </div>
        </>
    )
}