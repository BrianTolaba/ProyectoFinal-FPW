import React, { useState } from 'react';


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
        <div className="container my-5">
            <div className="card shadow-sm p-4 mx-auto border-danger" style={{ maxWidth: '350px' }}>
                <h2 className="h4 text-center mb-4 text-danger">Desafío: Suma con Incógnita 'X'</h2>

                <form className="d-flex flex-column gap-3">
                    {/* Primer Número */}
                    <div className="form-floating">
                        <input type="text" className="form-control" id="num1" placeholder="Ej: 1X3" value={num1} onChange={(e) => setNum1(e.target.value)} />
                        <label htmlFor="num1">Primer número:</label>
                    </div>

                    {/* Segundo número */}
                    <div className="form-floating">
                        <input type="text" className="form-control" id="num2" placeholder="Ej: 23X" value={num2} onChange={(e) => setNum2(e.target.value)} />
                        <label htmlFor="num2">Segundo número:</label>
                    </div>

                    {/* Resultado */}
                    <div className="form-floating">
                        <input type="text" className="form-control" id="res" placeholder="Ej: 4X7" value={res} onChange={(e) => setRes(e.target.value)} />
                        <label htmlFor="res">Resultado:</label>
                    </div>
                </form>

                <button onClick={manejarResolver} className="btn btn-danger w-100 mt-4">
                    Resolver
                </button>

                {/* Muestra el resultado */}
                {solucion && (
                    <div 
                        className={`alert mt-3 text-center fw-bold ${solucion.includes("No se") ? 'alert-warning text-dark' : 'alert-success'}`}
                    >
                        {solucion}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tp3Ej1;