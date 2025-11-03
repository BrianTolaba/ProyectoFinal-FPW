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
        <section className="section-formulario">
            <h1>Ingresa una cadena de caracteres</h1>
            <p>La cadena debe ser de ? y/o números (estos entre 0 - 4).</p>
            <p>Los signos de pregunta serán reemplazados por la suma de los números adyacentes.</p>

            <input 
                type="text" 
                placeholder="Ej: !??3?4?"
                value={inputCadena}
                onChange={(e) => setInputCadena(e.target.value)}
                style={{ width: '300px', padding: '10px' }}
            />
            
            <button 
                onClick={manejarCalculo} 
                style={{ marginLeft: '10px', padding: '10px' }}
            >
                Calcular
            </button>

            {/* Muestra error o resultado */}
            {error && <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>{error}</p>}
            {resultado && <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>{resultado}</p>}

        </section>
    );
};

export default Tp2Ej3;