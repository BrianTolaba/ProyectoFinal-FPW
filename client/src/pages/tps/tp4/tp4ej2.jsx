import React, { useState } from 'react';
//import '../css/Ejercicio02.css';

const colores = ['red', 'blue', 'green', 'orange'];   //arreglo de colores

function getColorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

function BotonesColores() {
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(0);
  const [botones, setBotones] = useState([ // cantidad de botones
    getColorAleatorio(),
    getColorAleatorio(),
    getColorAleatorio(),
    getColorAleatorio()
  ]);



  function handleClick() {
    const nuevosBotones = botones.map(() => getColorAleatorio());// Cambioo de color a los botones
    setBotones(nuevosBotones);
    setIntentos(intentos + 1);
    verificarVictoria(nuevosBotones);
  }


  function verificarVictoria(botonesActuales) {
    const contador = {};
    botonesActuales.forEach(color => {
      contador[color] = (contador[color] || 0) + 1;
    });

    const hayVictoria = Object.values(contador).some(cantidad => cantidad >= 3);
    if (hayVictoria) {
      setMensaje('Lo lograste!! con ' + intentos + ' intentos');

      setIntentos(0); //  Reinicia el contador de intentos
    } else {
      setMensaje('');
    }
  }

  return (

    <div className="Ejercicio02Botones">
      
        <div className="col-md-6 m-3 bg-dark-subtle rounded-4 mx-auto mt-5">
          {botones.map((color, index) => (
            <button className='botones border border-4 border-black'
              key={index}
              onClick={handleClick}
              style={{
                backgroundColor: color,
                color: 'white',
                padding: '20px',
                margin: '10px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              Botón {index + 1}
            </button>
          ))}
          <h2 className="m-2">{mensaje}</h2>
          <h2 className="m-2">Intentos: {intentos}</h2>
        </div>


        <div className="col-md-6 ">
          <h3></h3>
          <img src="" alt="" />
        </div>
    </div>
  );
}

export default BotonesColores;