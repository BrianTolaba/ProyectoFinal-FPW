import React, { useState, useEffect } from 'react';
import Kermit from '../../../assets/imag/Kermit.jpg';
//import '../../../assets/css/Ejercicio01.css';
function TP4ej1() {
  const [numeroObjetivo, setNumeroObjetivo] = useState(null);
  const [intento, setIntento] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [contadorIntentos, setContadorIntentos] = useState(0);

  useEffect(() => {
    // Genera el número al iniciar
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    setNumeroObjetivo(numeroRandom);
  }, []);

  const calcularIntento = () => {
    const numeroIngresado = parseInt(intento, 10); //numeros con base decimal
    setContadorIntentos(contadorIntentos + 1);
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
      setRespuesta('Por favor ingresa un número válido.');
    } else if (numeroIngresado < numeroObjetivo) {
      setRespuesta('Numero demasiado bajo');
    } else if (numeroIngresado > numeroObjetivo) {
      setRespuesta('Numero demasiado alto');
    } else {
      setRespuesta('Felicidades, adivinaste el numero ' + numeroObjetivo);
    }
  };

  return (
    <div className='ejercicio01contenedor'>
      <div className="row">
        <div className="col-md-6 p-4 bg-dark-subtle h-50 rounded-4 ">
          <h1><strong>Adivina un numero del 1 al 100</strong></h1>
          
          <div className=" row-sm-1 bg-dark-subtle"> 
            <input className="form-control me-2 w-75 p-2 m-2"
              type="number"
              onChange={(e) => setIntento(e.target.value)}
              placeholder="Tu número" />

            <button type="button" className="btn btn-success m-2"
              onClick={calcularIntento}>
              Adivina
            </button>


            <button type="button" className="btn btn-danger m-2"
              onClick={() => setRespuesta(`Te rendiste el numero era: ${numeroObjetivo}`)}>
              Rendirse
            </button>

          </div>


          <h2>{respuesta}</h2>
          <h3 className='mensajeIntentos'>Intentos: {contadorIntentos}</h3>

        </div>
        <div className="col-md-6">
          <img src={Kermit} alt="Piensa" />
        </div>
      </div>
    </div>
  );
}

export default TP4ej1;