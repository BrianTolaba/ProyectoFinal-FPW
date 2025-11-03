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
        <form id="formulario" style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Datos Universitarios</h2>
            
            {/* Array para renderizar inputs de forma eficiente */}
            {[
                { label: "Nombre:", state: nombre, setter: setNombre, placeholder: "Ingrese su nombre" },
                { label: "Apellido:", state: apellido, setter: setApellido, placeholder: "Ingrese su apellido" },
                { label: "Libreta Universitaria:", state: libreta, setter: setLibreta, placeholder: "APU999999" }
            ].map((field, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                    <label htmlFor={field.label}>{field.label}</label>
                    <input 
                        type="text" 
                        id={field.label} 
                        placeholder={field.placeholder}
                        value={field.state}
                        onChange={(e) => field.setter(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    {/* El HTML original usaba <br><br> para saltos de línea */}
                    <div style={{ height: '5px' }}></div>
                </div>
            ))}
            
            <button 
                type="button" 
                onClick={mostrarDatos}
                style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}
            >
                Mostrar Datos
            </button>
            
            {/* Muestra el error */}
            {error && <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>{error}</p>}

            {/* Muestra el resultado */}
            {resultado && <p style={{ color: 'blue', marginTop: '15px' }}>{resultado}</p>}
        </form>
    );
};

export default Tp2Ej4;