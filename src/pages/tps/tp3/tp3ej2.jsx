import React, { useState } from 'react';

// --- Lógica de Manejo de Datos (Reemplaza 'data.js') ---

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
        <form id="formularioMascota" onSubmit={handleSubmit}>
            <h2>Registrar Mascota</h2>
            
            <label>Tipo:
                <input type="text" id="tipo" required value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </label>
            
            <label>Edad (Años):
                <input type="number" id="edad" min="0" required value={edad} onChange={(e) => setEdad(e.target.value)} />
            </label>
            
            <label>Nombre del dueño:
                <input type="text" id="duenio" required value={duenio} onChange={(e) => setDuenio(e.target.value)} />
            </label>
            
            {/* Radio Buttons */}
            <label>¿Está vacunada?</label>
            <div style={{ display: 'flex', gap: '15px', margin: '5px 0' }}>
                <label>Sí
                    <input type="radio" name="vacunada" value="true" required checked={vacunada === 'true'} onChange={() => setVacunada('true')} />
                </label>
                <label>No
                    <input type="radio" name="vacunada" value="false" required checked={vacunada === 'false'} onChange={() => setVacunada('false')} />
                </label>
            </div>
            
            <button type="submit" style={{ padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
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
        <div style={{ display: 'flex', gap: '40px' }}>
            {/* Columna 1: Formulario */}
            <MascotaFormulario agregarMascota={agregarMascota} />

            {/* Columna 2: Listado y Estadísticas (Reemplaza 'ui.js' y el HTML de listado) */}
            <div style={{ flexGrow: 1 }}>
                
                {/* Estadísticas */}
                <h3>Estadísticas</h3>
                <p>Total de mascotas: <span>{total}</span></p>
                <p>Vacunadas: <span>{vacunadas}</span></p>
                <p>No vacunadas: <span>{noVacunadas}</span></p>
                
                {/* Listado */}
                <h2 id="listadoMascotas" style={{ marginTop: '20px' }}>Listado de Mascotas</h2>
                
                {mascotas.length === 0 ? (
                    <p>Aún no hay mascotas registradas.</p>
                ) : (
                    mascotas.map((m, index) => (
                        // Renderizado de cada mascota (Reemplaza la creación de DIVs en 'ui.js')
                        <div key={m.id} className="mascota" style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <strong>Mascota {index + 1}</strong><br />
                            Tipo: {m.tipo}<br />
                            Nombre: {m.nombre}<br />
                            Edad: {m.edad} años<br />
                            Dueño: {m.duenio}<br />
                            Vacunada: {m.vacunada ? "Sí" : "No"}<br />
                            
                            <button 
                                onClick={() => eliminarMascota(m.id)} 
                                style={{ marginTop: '5px', background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Tp3Ej2;