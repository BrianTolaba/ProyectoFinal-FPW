import React, { useState } from 'react';

const Tp2Ej4 = () => {
    // 1. Estado para los 3 campos del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [libreta, setLibreta] = useState('');
    
    // Estado para el resultado/mensaje de error
    const [resultado, setResultado] = useState('');
    const [error, setError] = useState('');

    // 2. Función que maneja la validación y muestra de datos (reemplaza 'mostrarDatos()')
    const mostrarDatos = () => {
        setError('');
        setResultado('');
        
        // Expresión regular del JS original (solo letras, incluyendo tildes y Ñ)
        const sololetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; 

        // Validación
        if (!sololetras.test(nombre)) {
            setError("El nombre solo puede contener letras.");
            return;
        }
        if (!sololetras.test(apellido)) {
            setError("El apellido solo puede contener letras.");
            return;
        }
        
        // Validación simple para la libreta (debe tener algo)
        if (libreta.length === 0) {
            setError("La Libreta Universitaria no puede estar vacía.");
            return;
        }

        // Si todo es válido, muestra el resultado
        setResultado(
            `Datos ingresados: Nombre: ${nombre}, Apellido: ${apellido}, Libreta Universitaria: ${libreta}`
        );
        
        // Opcional: limpiar inputs aquí
    };

    return (
        <div className="container my-5">
            <form className="card shadow-lg p-4 mx-auto border-info" style={{ maxWidth: '450px' }}>
                <h2 className="text-info text-center mb-4">Datos Universitarios</h2>
                
                {/* Campos del formulario */}
                {[
                    { label: "Nombre:", state: nombre, setter: setNombre, placeholder: "Ingrese su nombre" },
                    { label: "Apellido:", state: apellido, setter: setApellido, placeholder: "Ingrese su apellido" },
                    { label: "Libreta Universitaria:", state: libreta, setter: setLibreta, placeholder: "APU999999" }
                ].map((field, index) => (
                    <div key={index} className="mb-3">
                        <label className="form-label">{field.label}</label>
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder={field.placeholder}
                            value={field.state}
                            onChange={(e) => field.setter(e.target.value)}
                        />
                    </div>
                ))}
                
                <button 
                    type="button" 
                    onClick={mostrarDatos}
                    className="btn btn-info text-white w-100 mt-3"
                >
                    Mostrar Datos
                </button>
                
                {/* Muestra el error */}
                {error && <div className="alert alert-danger mt-3">{error}</div>}

                {/* Muestra el resultado */}
                {resultado && <div className="alert alert-success mt-3">{resultado}</div>}
            </form>
        </div>
    );
};

export default Tp2Ej4;