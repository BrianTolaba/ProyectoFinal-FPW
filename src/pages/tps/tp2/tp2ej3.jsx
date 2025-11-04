import React, { useState } from 'react';

// Lógica pura: la función del JS original se puede reutilizar casi sin cambios.
const reemplazarSignos = (cadena) => {
    // Código del ejercicio03.js, convertido para funcionar con JS moderno
    if (typeof cadena !== 'string' || cadena.length === 0) {
        return "Cadena inválida";
    }

    const caracteres = cadena.split('');
    const nuevaCadena = [];

    for (let i = 0; i < caracteres.length; i++) {
        const actual = caracteres[i];

        if (actual === "?") {
            let izquierda = 0;
            let derecha = 0;

            // Busca el dígito de la izquierda
            if (i > 0 && caracteres[i - 1] >= '0' && caracteres[i - 1] <= '4') {
                izquierda = parseInt(caracteres[i - 1]);
            }
            // Busca el dígito de la derecha
            if (i < caracteres.length - 1 && caracteres[i + 1] >= '0' && caracteres[i + 1] <= '4') {
                derecha = parseInt(caracteres[i + 1]);
            }

            const suma = izquierda + derecha;
            nuevaCadena.push(suma.toString());
        } else if (actual >= '0' && actual <= '9' && actual <= '4') { 
            // Permite solo números 0-4
            nuevaCadena.push(actual);
        } else if (actual >= '5' || actual <= '9' || isNaN(parseInt(actual))) {
            return "Cadena inválida (contiene números mayores a 4 o caracteres inválidos)";
        }
    }
    return nuevaCadena.join("");
};


const Tp2Ej3 = () => {
    const [inputCadena, setInputCadena] = useState('');
    const [resultado, setResultado] = useState('');
    const [error, setError] = useState('');

    const manejarCalculo = () => {
        setError('');
        setResultado('');
        
        // Ejecuta la función de lógica pura con el estado actual
        const res = reemplazarSignos(inputCadena);

        if (res.includes("inválida")) {
            setError(res);
            setResultado('');
        } else {
            setResultado(`Resultado: ${res}`);
            setError('');
        }
    };

   return (
        <div className="container my-5">
            <div className="card shadow-sm p-4 mx-auto border-warning" style={{ maxWidth: '600px' }}>
                <h1 className="h4 text-warning">Ingresa una cadena de caracteres</h1>
                <p className="text-muted">La cadena debe ser de ? y/o números (0-4). Los '?' se suman con adyacentes.</p>

                <div className="input-group mb-3 mt-4">
                    <input 
                        type="text" 
                        placeholder="Ej: !??3?4?"
                        className="form-control"
                        value={inputCadena}
                        onChange={(e) => setInputCadena(e.target.value)}
                    />
                    
                    <button 
                        onClick={manejarCalculo} 
                        className="btn btn-warning text-dark fw-bold" 
                        type="button"
                    >
                        Calcular
                    </button>
                </div>

                {/* Muestra error o resultado */}
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {resultado && <div className="alert alert-success mt-3">{resultado}</div>}
            </div>
        </div>
    );
};

export default Tp2Ej3;