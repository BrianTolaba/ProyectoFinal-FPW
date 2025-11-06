import React, { useState } from 'react';

const Tp2Ej2 = () => {
    // 1. Estado para los 3 números de entrada
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    
    // Estado para el resultado del promedio
    const [promedio, setPromedio] = useState(null);
    const [error, setError] = useState('');

    // 2. Función para calcular el promedio (reemplaza la lógica de prompt/alert)
    const calcularPromedio = () => {
        setError('');
        setPromedio(null);

        // Convertir a números
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        const n3 = parseFloat(num3);

        // Validación de números
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            setError('Por favor, ingrese tres números válidos.');
            return;
        }

        const resultado = (n1 + n2 + n3) / 3;
        setPromedio(resultado.toFixed(2));
        
        // Limpiar inputs si se desea
        // setNum1(''); setNum2(''); setNum3('');
    };

    // 3. Renderizado (JSX)
    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4 mx-auto border-success" style={{ maxWidth: '400px' }}>
                <h1 className="h3 text-center mb-4 text-success">Calcular Promedio de Tres Números</h1>
                <p className="text-center text-muted">Ingrese tres números para promediarlos.</p>

                <form>
                    {[
                        { label: 'Primer Número:', setter: setNum1, value: num1 },
                        { label: 'Segundo Número:', setter: setNum2, value: num2 },
                        { label: 'Tercer Número:', setter: setNum3, value: num3 }
                    ].map((input, index) => (
                        <div key={index} className="mb-3">
                            <label className="form-label">{input.label}</label>
                            <input
                                type="number"
                                className="form-control"
                                value={input.value}
                                onChange={(e) => input.setter(e.target.value)}
                            />
                        </div>
                    ))}
                </form>

                <button onClick={calcularPromedio} className="btn btn-success w-100 mt-3">
                    Calcular Promedio
                </button>

                {/* Muestra el error si existe */}
                {error && <div className="alert alert-danger mt-3">{error}</div>}

                {/* Muestra el resultado */}
                {promedio !== null && (
                    <div className="alert alert-info mt-3 fw-bold text-center">
                        El promedio es de: {promedio}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tp2Ej2;