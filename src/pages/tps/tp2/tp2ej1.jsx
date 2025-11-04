import React, { useState } from 'react';


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

   

return (
    // Usa card y container de Bootstrap
    <div className="container mt-5">
        <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '450px' }}>
            <h1 className="h3 text-center mb-4 text-primary">Comparador de números 1000</h1>
            
            <form>
                <div className="mb-3">
                    <label htmlFor="numero1" className="form-label">Primer Número:</label>
                    <input 
                        type="number" 
                        id="numero1"
                        className="form-control" // Clase de input de Bootstrap
                        value={numero1} 
                        onChange={(e) => setNumero1(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="numero2" className="form-label">Segundo Número:</label>
                    <input 
                        type="number" 
                        id="numero2"
                        className="form-control" // Clase de input de Bootstrap
                        value={numero2} 
                        onChange={(e) => setNumero2(e.target.value)}
                    />
                </div>
            </form>
            
            <button 
                className="btn btn-primary w-100 mt-3" // Botón primario y ancho completo
                onClick={compararNumeros}
            >
                Comparar Números
            </button>

            {/* Muestra el resultado */}
            {resultado && (
                <p 
                    // Alerta de éxito o peligro (rojo/verde)
                    className={`alert mt-3 text-center fw-bold ${error ? 'alert-danger' : 'alert-success'}`}
                >
                    {resultado}
                </p>
            )}
        </div>
    </div>
);
};


export default Tp2Ej1;