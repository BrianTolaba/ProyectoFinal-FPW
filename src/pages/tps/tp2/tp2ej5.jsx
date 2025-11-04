import React, { useState } from 'react';

const Tp2Ej5 = () => {
    // 1. Estado para los inputs: nombre, horas, y pago por hora
    const [nombre, setNombre] = useState('');
    const [horasTrabajadas, setHorasTrabajadas] = useState(''); // primerNumero
    const [pagoPorHora, setPagoPorHora] = useState('');       // segundoNumero
    
    // Estado para el resultado
    const [resultado, setResultado] = useState('');

    // 2. Lógica para manejar el cálculo (reemplaza el onclick del JS)
    const calcularPago = () => {
        setResultado('');
        
        // Conversión a números
        const hT = parseFloat(horasTrabajadas);
        const pPH = parseFloat(pagoPorHora);
        
        if (isNaN(hT) || isNaN(pPH) || nombre.trim() === '') {
            setResultado('Por favor, complete todos los campos con valores válidos.');
            return;
        }

        // Validación de horas (Línea 18 del JS original)
        if (hT > 720) {
            setResultado('No es posible trabajar mas de 720 horas MENTIROSO :(');
            return;
        }

        let pagoMensual = hT * pPH;

        // Bonificación por horas (Línea 15 del JS original)
        if (hT > 160) {
            pagoMensual *= 1.20; // Aumenta 20%
        }

        // Formato y visualización del resultado
        setResultado(`${nombre} tu paga este mes será ${pagoMensual.toFixed(2)}`);
    };

    // ... (código JavaScript/React es el mismo)

return (
    <div className="container mt-5">
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '550px' }}>
            <div className="titulos text-center mb-4">
                <h1 className="h3 text-purple">Simulador de Salario Mensual</h1>
                <h2 className="h5 text-muted">Ingresa tus datos y calcula tu pago mensual</h2>
            </div>
            
            <form className="formulario">
                {/* Inputs de Formulario (Todos usan 'form-control' y están en 'mb-3') */}
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="horasTrabajadas" className="form-label">Horas Trabajadas al mes</label>
                    <input type="text" id="horasTrabajadas" className="form-control" value={horasTrabajadas} onChange={(e) => setHorasTrabajadas(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="pagoPorHora" className="form-label">Pago por hora</label>
                    <input type="text" id="pagoPorHora" className="form-control" value={pagoPorHora} onChange={(e) => setPagoPorHora(e.target.value)} />
                </div>
            </form>

            <button id="calcular" onClick={calcularPago} className="btn btn-primary w-100 mt-3">
                Calcular pago
            </button>
            
            {/* Muestra el resultado */}
            {resultado && (
                <p 
                    id="resultadoSuma" 
                    
                    className={`alert mt-3 text-center fw-bold ${resultado.includes("MENTIROSO") ? 'alert-danger' : 'alert-success'}`}
                >
                    {resultado}
                </p>
            )}
        </div>
    </div>
);
};

export default Tp2Ej5;