import { useState, useEffect } from "react";
import "../../../assets/css/estrella.css"; // Importa tu CSS
import Jake from "../../../assets/imag/Jake.png";

function Tp5Ej1() {
  const [puntaje, setPuntaje] = useState(0);
  const [posicionEstrella, setPosicionEstrella] = useState({ y: 0, x: 0 });
  const [visible, setVisible] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [juegoActivo, setJuegoActivo] = useState(true);

  // Generar posición aleatoria
  const posicionAlAzar = () => {
    const y = Math.random() * 80 + 10;
    const x = Math.random() * 80 + 10;
    setPosicionEstrella({ y, x });
  };

  // Controlar aparición/desaparición de la estrella
  useEffect(() => {
    if (!juegoActivo) return;

    const intervalo = setInterval(() => {
      setVisible(true);
      posicionAlAzar();

      // Desaparece después de 1 segundo
      setTimeout(() => setVisible(false), 1000);
    }, 1500);

    return () => clearInterval(intervalo);
  }, [juegoActivo]);

  // Cuando atrapa la estrella
  const agarrarEstrella = () => {
    setPuntaje((p) => p + 1);
    setVisible(false);
  };

  // Verificar victoria
  useEffect(() => {
    if (puntaje >= 3) {
      setJuegoActivo(false);
      setMensaje("🌟 ¡Ganaste! 🌟");

      setVisible(false);
    }
  }, [puntaje]);

  // Reiniciar juego
  const reiniciarJuego = () => {
    setPuntaje(0);
    setMensaje("");
    setJuegoActivo(true);
    setVisible(false);
  };

  return (
    <div className="contenedor-juego mx-auto mt-5">

      <h1 className="col">🎮 Atrapa las Estrellas 🎮</h1>
      <p className="text-center">Puntaje: {puntaje}</p>

      {mensaje && <h2>{mensaje}</h2>}

      {mensaje === "🌟 ¡Ganaste! 🌟" && (
        <img
          src={Jake}
          alt="Jake celebrando"
          style={{ width: "200px", marginTop: "20px" }}
        />
      )}

      {visible && juegoActivo && (
        <div
          className="estrella"
          style={{
            top: `${posicionEstrella.y}%`,
            left: `${posicionEstrella.x}%`,
          }}
          onClick={agarrarEstrella}
        >
          ⭐
        </div>
      )}

      {!juegoActivo && (
        <button className="boton-reiniciar" onClick={reiniciarJuego}>
          🔁 Reiniciar Juego
        </button>
      )}
    </div>
  );
}

export default Tp5Ej1;