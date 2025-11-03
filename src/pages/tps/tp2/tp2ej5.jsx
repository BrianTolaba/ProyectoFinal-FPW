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

    return (
        <div className="contenedor" style={{ maxWidth: '500px', margin: 'auto' }}>
            <section className="seccion-formulario">
                <div className="titulos">
                    <h1>Simulador de Salario Mensual</h1>
                    <h2>Ingresa tus datos y calcula tu pago mensual</h2>
                </div>
                
                <form className="formulario">
                    {/* Input: Nombre */}
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    {/* Input: Horas Trabajadas */}
                    <label htmlFor="horasTrabajadas">Horas Trabajadas al mes</label>
                    <input type="text" id="horasTrabajadas" value={horasTrabajadas} onChange={(e) => setHorasTrabajadas(e.target.value)} />

                    {/* Input: Pago por Hora */}
                    <label htmlFor="pagoPorHora">Pago por hora</label>
                    <input type="text" id="pagoPorHora" value={pagoPorHora} onChange={(e) => setPagoPorHora(e.target.value)} />
                </form>

                <button id="calcular" onClick={calcularPago} style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '10px' }}>
                    Calcular pago
                </button>
                
                {/* Muestra el resultado */}
                {resultado && (
                    <p id="resultadoSuma" style={{ 
                        marginTop: '15px', 
                        fontWeight: 'bold',
                        // Muestra el color rojo si detecta el mensaje de "MENTIROSO"
                        color: resultado.includes("MENTIROSO") ? 'red' : 'green' 
                    }}>
                        {resultado}
                    </p>
                )}
            </section>
        </div>
    );
};

export default Tp2Ej5;