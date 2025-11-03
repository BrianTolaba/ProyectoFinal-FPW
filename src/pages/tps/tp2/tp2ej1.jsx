import React, { useState } from 'react';
// import './tp2ej1.css'; // Descomenta si tienes un archivo CSS específico para este componente.

const Tp2Ej1 = () => {
    // 1. Hook de Estado para los inputs
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    
    // Hook de Estado para el resultado
    const [resultado, setResultado] = useState('');
    const [error, setError] = useState(false);

    // 2. Función que maneja la comparación
    const compararNumeros = () => {
        // Limpiar errores y resultados anteriores
        setError(false);
        setResultado('');
        
        // Convertir los estados (que son strings) a números
        const numA = parseFloat(numero1);
        const numB = parseFloat(numero2);

        // Validación
        if (isNaN(numA) || isNaN(numB)) {
            setError(true);
            setResultado('Por favor, ingrese dos números válidos.');
            return;
        }

        let mensaje;
        if (numA > numB) {
            mensaje = `El Primer Número (${numA}) es MAYOR que el Segundo Número (${numB}).`;
        } else if (numA < numB) {
            mensaje = `El Segundo Número (${numB}) es MAYOR que el Primer Número (${numA}).`;
        } else {
            mensaje = `Ambos números son IGUALES (${numA}).`;
        }

        setResultado(mensaje);
    };

    // 3. Renderizado del Componente (JSX)
    return (
        // Usamos la clase de la sección del HTML original para mantener estilos
        <section className="section-formulario"> 
            {/* Título original del HTML */}
            <h1>Comparador de números 1000</h1> 
            
            <form className="formulario">
                {/* Input: Primer Número */}
                <label htmlFor="numero1">Primer Número:</label>
                <input 
                    type="number" 
                    id="numero1"
                    value={numero1} 
                    onChange={(e) => setNumero1(e.target.value)}
                />

                {/* Input: Segundo Número */}
                <label htmlFor="numero2">Segundo Número:</label>
                <input 
                    type="number" 
                    id="numero2"
                    value={numero2} 
                    onChange={(e) => setNumero2(e.target.value)}
                />
            </form>
            
            {/* Conexión de la función de React al botón */}
            <button 
                className="boton" 
                onClick={compararNumeros}
            >
                Comparar Números
            </button>

            {/* Muestra el resultado */}
            {resultado && (
                <p style={{ color: error ? 'red' : 'green', marginTop: '15px', fontWeight: 'bold' }}>
                    {resultado}
                </p>
            )}
        </section>
    );
};

export default Tp2Ej1;