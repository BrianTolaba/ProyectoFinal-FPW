import React, { useState } from 'react';



// Usamos el hook useMascotas para manejar el estado y la lógica CRUD
const useMascotas = () => {
    const [mascotas, setMascotas] = useState([]);

    const agregarMascota = (nombre, tipo, edad, duenio, vacunada) => {
        const nuevaMascota = {
            id: Date.now(), // Identificador Único
            nombre,
            tipo,
            edad: parseInt(edad, 10),
            duenio,
            vacunada: vacunada === 'true', // Asegura un booleano
        };
        // Agrega la nueva mascota al estado, inmutablemente
        setMascotas(prevMascotas => [...prevMascotas, nuevaMascota]);
    };

    const eliminarMascota = (id) => {
        // Elimina inmutablemente
        setMascotas(prevMascotas => prevMascotas.filter(m => m.id !== id));
    };

    // Lógica para estadísticas
    const total = mascotas.length;
    const vacunadas = mascotas.filter(m => m.vacunada).length;
    const noVacunadas = total - vacunadas;

    return { 
        mascotas, 
        agregarMascota, 
        eliminarMascota, 
        total, 
        vacunadas, 
        noVacunadas 
    };
};

// --- Componente de Formulario (Reemplaza la captura de datos en 'ejercicio02.js') ---

const MascotaFormulario = ({ agregarMascota }) => {
    // 1. Estados para capturar los inputs del formulario
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [edad, setEdad] = useState('');
    const [duenio, setDuenio] = useState('');
    const [vacunada, setVacunada] = useState('true'); // Estado para el radio button

    const handleSubmit = (e) => {
        e.preventDefault(); // Detiene el comportamiento de envío de HTML

        // Llama a la función de estado principal
        agregarMascota(nombre, tipo, edad, duenio, vacunada);

        // Limpia el formulario (similar a formulario.reset() en JS puro)
        setNombre('');
        setTipo('');
        setEdad('');
        setDuenio('');
        setVacunada('true');
    };

    return (
        // Añadimos una clase para estilos internos de la columna (si es necesario)
        <form id="formularioMascota" onSubmit={handleSubmit} className="mb-4">
            <h2 className="h4 text-primary mb-3">Registrar Mascota</h2>
            
            {/* Input: Tipo */}
            <div className="mb-3"> 
                <label htmlFor="tipo" className="form-label">Tipo:</label>
                <input type="text" id="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)} className="form-control" />
            </div>
            
            {/* Input: Edad */}
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad (Años):</label>
                <input type="number" id="edad" min="0" required value={edad} onChange={(e) => setEdad(e.target.value)} className="form-control" />
            </div>
            
            {/* Input: Nombre del dueño */}
            <div className="mb-3">
                <label htmlFor="duenio" className="form-label">Nombre del dueño:</label>
                <input type="text" id="duenio" required value={duenio} onChange={(e) => setDuenio(e.target.value)} className="form-control" />
            </div>
            
            {/* Radio Buttons (Clases de Formulario de Radio) */}
            <div className="mb-3">
                <label className="form-label d-block">¿Está vacunada?</label>
                <div className="form-check form-check-inline">
                    <input type="radio" name="vacunada" id="vacunadaSi" value="true" required checked={vacunada === 'true'} onChange={() => setVacunada('true')} className="form-check-input" />
                    <label className="form-check-label" htmlFor="vacunadaSi">Sí</label>
                </div>
                <div className="form-check form-check-inline">
                    <input type="radio" name="vacunada" id="vacunadaNo" value="false" required checked={vacunada === 'false'} onChange={() => setVacunada('false')} className="form-check-input" />
                    <label className="form-check-label" htmlFor="vacunadaNo">No</label>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-100 mt-2">
                Registrar Mascota
            </button>
        </form>
    );
};

// --- Componente Principal (tp3ej2.jsx) ---

const Tp3Ej2 = () => {
    // 3. Usa el Hook personalizado para manejar todo el estado de las mascotas
    const { mascotas, agregarMascota, eliminarMascota, total, vacunadas, noVacunadas } = useMascotas();

    return (
        // Uso de Grid: row para la fila principal, col-md-4 y col-md-8 para las columnas
        <div className="container my-5 tp3ej2-container">
            <div className="row">
                
                {/* Columna 1: Formulario (col-md-4) */}
                <div className="col-md-4 border-end pe-4">
                    <MascotaFormulario agregarMascota={agregarMascota} />
                </div>

                {/* Columna 2: Listado y Estadísticas (col-md-8) */}
                <div className="col-md-8 ps-4">
                    
                    {/* Estadísticas */}
                    <h3 className="text-secondary border-bottom pb-2 mb-3">Estadísticas</h3>
                    <p>Total de mascotas: <span className="badge bg-primary fs-6">{total}</span></p>
                    <p>Vacunadas: <span className="badge bg-success fs-6">{vacunadas}</span></p>
                    <p>No vacunadas: <span className="badge bg-warning text-dark fs-6">{noVacunadas}</span></p>
                    
                    {/* Listado */}
                    <h2 className="mt-4 border-bottom pb-2 mb-3 text-info">Listado de Mascotas</h2>
                    
                    {mascotas.length === 0 ? (
                        <div className="alert alert-info">Aún no hay mascotas registradas.</div>
                    ) : (
                        mascotas.map((m, index) => (
                            <div key={m.id} className="card p-3 mb-3 shadow-sm">
                                
                                <h5 className="card-title text-primary">Mascota {index + 1}: {m.nombre}</h5>
                                <p className="card-text mb-1">
                                    Tipo: **{m.tipo}** | Edad: {m.edad} años
                                </p>
                                <p className="card-text mb-1">Dueño: {m.duenio}</p>
                                
                                <span className={`badge ${m.vacunada ? 'bg-success' : 'bg-danger'}`}>
                                    Vacunada: {m.vacunada ? "Sí" : "No"}
                                </span>
                                
                                <button 
                                    onClick={() => eliminarMascota(m.id)} 
                                    className="btn btn-danger btn-sm mt-2 w-25" // Botón de eliminación pequeño
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tp3Ej2;