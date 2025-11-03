import React, { useState } from 'react';

// Lógica pura: La función original del JS (resolver) se mantiene, adaptando los inputs/outputs.
const resolver = (num1Str, num2Str, resStr) => {
    // Convierte todo a mayúsculas para manejar 'x' o 'X'
    const N1 = num1Str.toUpperCase();
    const N2 = num2Str.toUpperCase();
    const RES = resStr.toUpperCase();

    for (let d = 0; d <= 9; d++) {
        // 1. Reemplaza la 'X' por el dígito actual (d)
        const n1String = N1.replace(/X/g, d.toString());
        const n2String = N2.replace(/X/g, d.toString());
        const rString = RES.replace(/X/g, d.toString());

        // 2. Convierte a números (usa base 10)
        // Nota: parseInt() detendrá el parseo si encuentra un no-dígito,
        // pero aquí solo debe haber números después del replace.
        const n1 = parseInt(n1String, 10);
        const n2 = parseInt(n2String, 10);
        const r = parseInt(rString, 10);

        // 3. Verifica la condición de suma
        if (n1 + n2 === r) {
            return `El valor de X es: ${d}`;
        }
    }

    return "No se encontró solución válida.";
};

const Tp3Ej1 = () => {
    // Estados para los tres inputs
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [res, setRes] = useState('');
    // Estado para la solución
    const [solucion, setSolucion] = useState('');

    const manejarResolver = () => {
        setSolucion(''); // Limpia el resultado anterior
        
        // Ejecuta la lógica pura con los estados actuales
        const resultado = resolver(num1, num2, res);
        setSolucion(resultado);
    };

    return (
        <section className="suma-incognita">
            <h2>Resolver suma con X</h2>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                {/* Primer Número */}
                <label>Primer número:</label>
                <input type="text" placeholder="Ej: 1X3" value={num1} onChange={(e) => setNum1(e.target.value)} />

                {/* Segundo número */}
                <label>Segundo número:</label>
                <input type="text" placeholder="Ej: 23X" value={num2} onChange={(e) => setNum2(e.target.value)} />

                {/* Resultado */}
                <label>Resultado:</label>
                <input type="text" placeholder="Ej: 4X7" value={res} onChange={(e) => setRes(e.target.value)} />
            </form>

            <button onClick={manejarResolver} style={{ marginTop: '15px', padding: '10px' }}>
                Resolver
            </button>

            {/* Muestra el resultado */}
            {solucion && (
                <p 
                    id="solucion" 
                    style={{ 
                        marginTop: '15px', 
                        fontWeight: 'bold', 
                        color: solucion.includes("No se") ? 'red' : 'green' 
                    }}
                >
                    {solucion}
                </p>
            )}
        </section>
    );
};

export default Tp3Ej1;